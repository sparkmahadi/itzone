import ProductCard from '@/components/ProductCard';
import { toggle, toggleBrand } from '@/redux/features/filter/filterSlice';
import { getProducts } from '@/redux/features/products/productsSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Products = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);
    const { products, isLoading } = useSelector(state => state.products);
    const { stock, brands } = filter;

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    let content;

    if (isLoading) {
        content = <h2>Loading...</h2>
    }

    if (products?.length) {
        content = products.map((product =>
            <ProductCard key={product.model} product={product}></ProductCard>
        ))
    }

    if (products?.length && (stock || brands.length)) {
        content = products.filter((product) => {
            if (stock) {
                return product.status === true
            }
            else {
                return product
            }
        })
            .filter((product) => {
                if (brands.length) {
                    return brands.includes(product.brand)
                }
                else {
                    return product
                }
            })
            .map((product) =>
                <ProductCard key={product.model} product={product}></ProductCard>
            )
    }

    const activeClass = "text-white  bg-indigo-500 border-white";
    return (
        <div className='max-w-7xl gap-14 mx-auto my-10'>
            <div className='mb-10 flex justify-end gap-5'>
                <button
                    onClick={() => dispatch(toggle())}
                    className={`border px-3 py-2 rounded-full font-semibold ${stock ? activeClass : null}`}
                >
                    In Stock
                </button>
                <button onClick={() => dispatch(toggleBrand('amd'))} className={`border px-3 py-2 rounded-full font-semibold ${brands.includes('amd') ? activeClass : null}`}>
                    AMD
                </button>
                <button onClick={() => dispatch(toggleBrand('intel'))} className={`border px-3 py-2 rounded-full font-semibold ${brands.includes('intel') ? activeClass : null}`}>
                    Intel
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
                {content}
            </div>
        </div>
    );
};

export default Products;