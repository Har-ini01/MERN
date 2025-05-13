import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FaSearch } from 'react-icons/fa'; // Import the search icon for search bar

const PlantPalProductPage = () => {
    const [products] = useState([
        { id: 1, name: 'Aglonema Crete', category: 'Indoor', price: 18.00, image: 'https://via.placeholder.com/300x200', isSale: true },
        { id: 2, name: 'Snake Plant', category: 'Indoor', price: 22.00, image: 'https://via.placeholder.com/300x200', isSale: false },
        { id: 3, name: 'Peace Lily', category: 'Indoor', price: 16.50, image: 'https://via.placeholder.com/300x200', isSale: false },
        { id: 4, name: 'Spider Plant', category: 'Outdoor', price: 12.00, image: 'https://via.placeholder.com/300x200', isSale: true },
        { id: 5, name: 'Fern', category: 'Outdoor', price: 14.00, image: 'https://via.placeholder.com/300x200', isSale: false },
        { id: 6, name: 'Echeveria', category: 'Succulents', price: 9.50, image: 'https://via.placeholder.com/300x200', isSale: true },
        { id: 7, name: 'Jade Plant', category: 'Succulents', price: 11.00, image: 'https://via.placeholder.com/300x200', isSale: false },
    ]);

    const [categoryFilter, setCategoryFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('');

    const filteredProducts = products
        .filter(product => 
            (categoryFilter === 'all' || product.category === categoryFilter) &&
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => {
            if (sortOrder === 'asc') return a.price - b.price;
            if (sortOrder === 'desc') return b.price - a.price;
            return 0;
        });

    return (
        <div className="bg-[#f3fdf7] font-sans text-gray-800">
            {/* Hero Banner Section */}
            <section className="bg-[#e6f4ec] h-64 flex items-center justify-center text-center">
                <div>
                    <h1 className="text-4xl font-light text-gray-700 mb-2">Products</h1>
                    <nav className="text-sm text-gray-500">
                        <a href="#" className="hover:underline">Home</a> / Products
                    </nav>
                </div>
            </section>

            {/* Navigation Tabs for Categories */}
            <div className="flex justify-center border-b border-gray-200 bg-white py-4">
                <nav className="flex gap-6 text-sm text-gray-600">
                    <button onClick={() => setCategoryFilter('Indoor')} className="px-4 py-2 rounded-full border border-green-300 hover:bg-green-50 transition-all">Indoor Plants</button>
                    <button onClick={() => setCategoryFilter('Outdoor')} className="px-4 py-2 rounded-full border border-green-300 hover:bg-green-50 transition-all">Outdoor Plants</button>
                    <button onClick={() => setCategoryFilter('Succulents')} className="px-4 py-2 rounded-full border border-green-300 hover:bg-green-50 transition-all">Succulents</button>
                    <button onClick={() => setCategoryFilter('all')} className="px-4 py-2 rounded-full border border-green-300 hover:bg-green-50 transition-all">All</button>
                </nav>
            </div>

            {/* Filters Section with Search Input */}
            <div className="max-w-6xl mx-auto px-4 py-6 flex flex-wrap gap-4 items-center justify-between">
                <select 
                    value={sortOrder} 
                    onChange={(e) => setSortOrder(e.target.value)} 
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-300 w-auto sm:w-40 hover:border-green-500 transition-colors"
                >
                    <option value="">Sort by Price</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                </select>
                <div className="relative w-auto sm:w-64">
                    <input 
                        type="text" 
                        placeholder="Search plants..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="border border-gray-300 rounded-md px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-300 hover:border-green-500 transition-colors w-full"
                    />
                    <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
            </div>

            {/* Product Grid Display Area */}
            <section className="max-w-6xl mx-auto px-4 pb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredProducts.map(product => (
                    <Card key={product.id} className="overflow-hidden bg-[#f0fdf4] rounded-lg border hover:bg-[#e9f5e1] hover:shadow-lg transition-all relative">
                        {/* Sale Badge */}
                        {product.isSale && (
                            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                Sale
                            </div>
                        )}
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                        <CardContent className="text-center p-4">
                            <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
                            <p className="mt-2 text-green-600 font-bold">${product.price.toFixed(2)}</p>
                            <Button className="mt-2 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors">
                                Add to Cart
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </section>
        </div>
    );
};

export default PlantPalProductPage;
