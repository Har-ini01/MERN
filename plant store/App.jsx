import React from 'react';
import Home from './Home';
import ProductDetails from './productdetails';
import ProductPage from './productpage';
import Cart from './cart';
import './style.css';

const App = () => {
    return (
        <div className="App">
            <Home />
            <ProductPage />
            <ProductDetails />
            <Cart />
        </div>
    );
};

export default App;
