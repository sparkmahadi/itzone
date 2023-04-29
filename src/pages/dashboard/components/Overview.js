import React from 'react';
import { useSelector } from 'react-redux';

const Overview = () => {
    const { products, isLoading, deleteSuccess, isError, error } = useSelector(state => state.products);
    const { orders } = useSelector(state => state.cart);
    return (
        <div className='flex flex-col justify-center items-center w-full '>
            <div className='w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200'>
                <header className='px-5 py-4 border-b border-gray-100'>
                    <div className='font-semibold text-gray-800'>Overview</div>
                </header>

                <div className='overflow-x-auto p-3'>
                    <table className='table-auto w-full'>
                        <thead className='text-xs font-semibold uppercase text-gray-400 bg-gray-50'>

                            <tr>
                                <th className='p-2'>
                                    <div className='font-semibold text-left'>Total Products : {products.length}</div>
                                </th>
                            </tr>
                            <tr>
                                <th className='p-2'>
                                    <div className='font-semibold text-left'>No. of Orders : {orders.length}</div>
                                </th>
                            </tr>
                            <tr>
                                <th className='p-2'>
                                    <div className='font-semibold text-left'>Total Users: 5</div>
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Overview;