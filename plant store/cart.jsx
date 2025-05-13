import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus } from 'lucide-react';

const PlantPalCart = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Fiddle Leaf Fig', price: 50, quantity: 2, image: 'https://via.placeholder.com/80', description: 'Indoor Tree' },
        { id: 2, name: 'Snake Plant', price: 30, quantity: 1, image: 'https://via.placeholder.com/80', description: 'Low Maintenance' },
        { id: 3, name: 'Monstera', price: 60, quantity: 2, image: 'https://via.placeholder.com/80', description: 'Tropical Vibes' },
    ]);

    const updateQuantity = (id, delta) => {
        setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        ));
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="flex flex-col md:flex-row gap-8 p-8 bg-green-50">
            <div className="flex-1">
                <h1 className="text-3xl font-bold mb-6 text-green-800">Your Cart</h1>
                {cartItems.map(item => (
                    <Card key={item.id} className="flex items-center justify-between p-4 mb-4 bg-green-100 hover:bg-green-200 transition-all duration-300 rounded-lg">
                        <img src={item.image} alt={item.name} className="w-20 h-20 rounded-md mr-4" />
                        <div className="flex-1">
                            <h2 className="text-lg font-semibold text-green-900">{item.name}</h2>
                            <p className="text-sm text-green-700">{item.description}</p>
                        </div>
                        <div className="flex items-center">
                            <span className="font-semibold text-lg text-green-800">${item.price}</span>
                            <div className="flex items-center mx-4">
                                <Button variant="ghost" onClick={() => updateQuantity(item.id, -1)}><Minus /></Button>
                                <span className="mx-2 font-semibold text-green-800">{item.quantity}</span>
                                <Button variant="ghost" onClick={() => updateQuantity(item.id, 1)}><Plus /></Button>
                            </div>
                            <span className="font-semibold text-lg text-green-800">${item.price * item.quantity}</span>
                            <Button variant="ghost" onClick={() => removeItem(item.id)} className="ml-4"><Trash2 /></Button>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="w-full md:w-1/3">
                <Card className="p-6 shadow-md bg-green-100 rounded-lg">
                    <CardContent>
                        <h2 className="text-xl font-bold mb-4 text-green-900">Order Summary</h2>
                        <div className="flex justify-between mb-2 text-green-800">
                            <span>Subtotal</span>
                            <span>${subtotal}</span>
                        </div>
                        <div className="flex justify-between mb-4 text-green-800">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg text-green-900">
                            <span>Total</span>
                            <span>${subtotal}</span>
                        </div>
                        <Button variant="default" className="w-full mt-6 bg-green-600 text-white hover:bg-green-700 hover:scale-105 transition-all duration-300">Checkout</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default PlantPalCart;
