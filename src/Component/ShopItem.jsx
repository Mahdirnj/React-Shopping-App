import "../assets/index.css"
import {useEffect, useState} from "react";
import axios from "axios";
import ProductDetail from './ProductDetail';

function ShopItem() {
    const [Products, setProducts] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        axios.get("../Products.json")
            .then(res => {
                setProducts(res.data);
            })
            .catch(error => console.log(error));
    }, []);

    const Productsarr = Products ? Object.values(Products) : [];

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleClose = () => {
        setSelectedProduct(null);
    };

    return (
        <div>
            <div className="bg-white w-auto h-auto">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>
                    <div
                        className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {Productsarr?.map((product) => (
                            <div key={product.id} className="group cursor-pointer"
                                 onClick={() => handleProductClick(product)}>
                                <div
                                    className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-50 mb-9 h-64 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center mb-auto group-hover:opacity-75"
                                    />
                                </div>
                                <h3 className="text-sm text-gray-700 font-bold">{product.name}</h3>
                                <p className="mt-5 text-lg text-center font-medium text-gray-900">{product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {selectedProduct && <ProductDetail product={selectedProduct} onClose={handleClose}/>}
        </div>
    );
}

export default ShopItem;
