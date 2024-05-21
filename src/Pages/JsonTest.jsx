import {useEffect, useState} from "react";
import axios from "axios";
import React from 'react';

function JsonTest() {
    const [Products, setProducts] = useState(null);

    useEffect(() => {
        axios.get("../Products.json")
            .then(res => {
                setProducts(res.data);
            })
            .catch(error => console.log(error));
    }, []);

    const Productsarr = Products ? Object.values(Products) : [];

    return (
        <div>
            <div className="bg-white w-auto h-auto">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>
                    <div
                        className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {Productsarr?.map((Products) => (
                            <a key={Products.id} href={Products.href} className="group">
                                <div
                                    className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-50 h-auto mb-9  xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        src={Products.imageSrc}
                                        alt={Products.imageAlt}
                                        className="h-full w-full object-cover object-center mb-auto  group-hover:opacity-75"
                                    />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">{Products.name}</h3>
                                <p className="mt-0 text-lg font-medium text-gray-900">{Products.price}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JsonTest;
