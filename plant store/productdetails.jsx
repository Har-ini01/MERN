import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const products = [
    { id: 1, name: 'Aglonema Crete', category: 'Indoor', price: 18.00, image: 'https://via.placeholder.com/500x300', description: 'A beautiful, vibrant indoor plant known for its striking foliage and air-purifying qualities.', careTips: 'Water once a week. Keep in indirect sunlight.' },
    { id: 2, name: 'Snake Plant', category: 'Indoor', price: 22.00, image: 'https://via.placeholder.com/500x300', description: 'A hardy, low-maintenance plant that thrives in low light and helps improve indoor air quality.', careTips: 'Water every 2-3 weeks. Tolerates low light.' },
    { id: 3, name: 'Peace Lily', category: 'Indoor', price: 16.50, image: 'https://via.placeholder.com/500x300', description: 'An elegant plant with white flowers that also purifies the air.', careTips: 'Keep soil moist. Prefers medium to low light.' },
    { id: 4, name: 'Spider Plant', category: 'Outdoor', price: 12.00, image: 'https://via.placeholder.com/500x300', description: 'A fast-growing plant that produces small white flowers and helps remove toxins from the air.', careTips: 'Water occasionally. Thrives in indirect light.' },
    { id: 5, name: 'Fern', category: 'Outdoor', price: 14.00, image: 'https://via.placeholder.com/500x300', description: 'A lush green plant perfect for shaded outdoor areas.', careTips: 'Keep soil moist. Prefers high humidity.' },
    { id: 6, name: 'Echeveria', category: 'Succulents', price: 9.50, image: 'https://via.placeholder.com/500x300', description: 'A stunning succulent known for its rosette shape and minimal water needs.', careTips: 'Water once a month. Needs bright, indirect light.' },
    { id: 7, name: 'Jade Plant', category: 'Succulents', price: 11.00, image: 'https://via.placeholder.com/500x300', description: 'A symbol of good luck and prosperity, known for its thick, fleshy leaves.', careTips: 'Water every 2-3 weeks. Prefers bright light.' },
];

const PlantPalProductDetails = () => {
    const { productId } = useParams();
    const product = products.find(p => p.id === parseInt(productId));

    if (!product) return <div>Product not found</div>;

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <img src={product.image} alt={product.name} className="w-full h-auto rounded-2xl shadow-lg" />
                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
                        <p className="text-xl text-green-700 font-semibold mb-4">${product.price.toFixed(2)}</p>
                        <p className="text-gray-600 mb-6">{product.description}</p>
                        <div className="text-gray-500 mb-6">
                            <h3 className="font-semibold mb-2">Care Tips:</h3>
                            <p>{product.careTips}</p>
                        </div>
                    </div>
                    <Button className="bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-all mb-4">
                        Add to Cart
                    </Button>
                    <Link to="/" className="text-green-500 hover:text-green-700 transition-all">Back to Products</Link>
                </div>
            </div>
        </div>
    );
};

export default PlantPalProductDetails;
