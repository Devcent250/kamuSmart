import React from 'react';
import ProductList from '../components/ProductList';

const Products = () => {
    return (
        <div className="min-h-screen pt-20">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Products</h1>
                <ProductList />
            </div>
        </div>
    );
};

export default Products; 