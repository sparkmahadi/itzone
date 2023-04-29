import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';

const Order = () => {
    const { orders, isLoading, isError, error } = useSelector(state => state.cart);
    const router = useRouter();
    const orderId = router.query.order;
    console.log(router.query);
    return (
        <div className='mb-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
                {orders.find(order => order._id === orderId).products
                    .map((product) => (
                        <ProductCard key={product.model} product={product} />
                    ))}
            </div>

            <div className='flex justify-center'>
                {
                    <Link href={'/orders'}>
                        <button className='px-4 py-2 bg-indigo-500 rounded-md font-semibold text-white text-lg'>Back to Orders</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Order;