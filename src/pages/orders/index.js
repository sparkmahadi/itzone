import { getOrders } from "@/redux/features/cart/cartSlice";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Orders = () => {
    const dispatch = useDispatch();
    const { orders, isLoading, isError, error } = useSelector(state => state.cart);
    const { userProfile } = useSelector(state => state.user);

    useEffect(() => {
        if (userProfile) {
            dispatch(getOrders(userProfile.mobile));
            console.log(userProfile.mobile);
        }
    }, [userProfile]);


    return (
        <div className='flex flex-col justify-center items-center h-full w-full '>
            <div className='w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200'>
                <header className='px-5 py-4 border-b border-gray-100'>
                    <div className='font-semibold text-gray-800 text-center text-lg'>My Orders</div>
                </header>

                <div className='overflow-x-auto p-3'>
                    {
                        orders.length ?

                            <table className='table-auto mx-auto text-center'>
                                <thead className='text-xs lg:text-base font-semibold uppercase text-gray-400 bg-gray-50'>
                                    <tr>
                                        <th className='p-2'>
                                            <div className='font-semibold text-left'>Serial</div>
                                        </th>
                                        <th className='p-2'>
                                            <div className='font-semibold text-left'>Total Products</div>
                                        </th>
                                        <th className='p-2'>
                                            <div className='font-semibold text-left'>Action</div>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className='text-sm divide-y divide-gray-100 '>
                                    {orders.map((order, i) => (
                                        <tr key={order._id}>
                                            <td className='p-2'>
                                                <div className='font-medium text-gray-800'>{i + 1}</div>
                                            </td>
                                            <td className='p-2'>
                                                <div className='font-medium text-gray-800'>{order.products.length}</div>
                                            </td>
                                            <td className='p-2'>
                                                <div className='font-medium text-gray-800'>
                                                    <Link href={`/orders/${order._id}`}>
                                                        <button className="px-2 py-1 bg-indigo-500 rounded-md font-semibold text-white text-xs disabled:bg-gray-500">View Products</button>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            :

                            <p className="text-center text-lg">No orders are placed yet...</p>

                    }
                </div>
            </div>
        </div>
    );
};

export default Orders;