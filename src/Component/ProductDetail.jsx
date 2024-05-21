import React from 'react';
import '../assets/index.css';

const ProductDetail = ({product, onClose}) => {
    if (!product) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-90 bg-gray-950 bg-opacity-40">
            <div className="bg-blue-50 bg-opacity-75 p-5 rounded-lg shadow-lg max-w-md w-full">
                <button onClick={onClose} className=" text-red-500 font-bold float-right">X</button>
                <div className="mb-3 ">
                    <img src={product.imageSrc} alt={product.imageAlt} className="w-full h-auto object-cover"/>
                </div>
                <h2 className="text-2xl font-bold mb-2 text-gray-950">{product.name}</h2>
                <p className="text-lg text-gray-950">{product.price}</p>
                <p className="text-gray-950">{product.description}</p>
            </div>
        </div>
    );
};

export default ProductDetail;
