import React, {useState} from 'react';
import '../assets/index.css';

const ProductDetail = ({product, onClose}) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    if (!product || !product.images || product.images.length === 0) return null;

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-90 bg-gray-950 bg-opacity-60">
            <div className="bg-blue-50 bg-opacity-90 p-5 rounded-3xl shadow-lg max-w-md w-full">
                <button onClick={onClose} className="text-red-500 font-bold float-right">X</button>
                <div className="mb-3">
                    <img src={product.images[selectedImageIndex].src} alt={product.images[selectedImageIndex].alt}
                         className="rounded-3xl w-full h-auto object-cover"/>
                </div>
                <div className="flex justify-center mb-3">
                    {product.images?.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            className={`w-16 h-16 rounded-2xl ml-3  object-cover cursor-pointer ${selectedImageIndex === index ? 'border-2 border-blue-500' : ''}`}
                            onClick={() => handleImageClick(index)}
                        />
                    ))}
                </div>
                <h2 className="text-2xl text-center font-bold mb-2 text-gray-950">{product.name}</h2>
                <p className="text-lg text-gray-950 text-center mb-3">{product.price} $</p>
                <p className="text-gray-950 text-center">{product.description}</p>
            </div>
        </div>
    );
};

export default ProductDetail;
