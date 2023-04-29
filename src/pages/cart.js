import ProductCard from '@/components/ProductCard';
import { placeOrder } from '@/redux/features/cart/cartSlice';
import React from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart);
    const { user } = useSelector(state => state.user);

    const handlePlaceOrder = (cart) => {
        const orderData = {
            products: cart,
            customerMobile: user.mobile,
        };
        console.log(orderData);

        dispatch(placeOrder(orderData));
        toast.success("Order Placed Successfully!!");
    }
    return (
        <div className='mb-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
                {cart
                    .map((product) => (
                        <ProductCard key={product.model} product={product} />
                    ))}
            </div>

            <div className='flex justify-center'>
                {
                    cart.length ?
                        <button onClick={() => (handlePlaceOrder(cart))} className='px-4 py-2 bg-indigo-500 rounded-md font-semibold text-white text-lg'>Place Order</button>
                        :
                        <p className='text-xl'>No products are added to cart yet..</p>
                }
            </div>
        </div>
    );
};

export default Cart;