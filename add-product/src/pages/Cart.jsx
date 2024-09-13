import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:2312/api/cart', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setCartItems(response.data);
        };

        fetchCartItems();
    }, []);

    const handleQuantityChange = async (productId, quantity) => {
        const token = localStorage.getItem('token');
        await axios.post('http://localhost:2312/api/cart/update-quantity', {
            productId,
            quantity
        }, {
            headers: { Authorization: `Bearer ${token}` }
        });

        // Update cart items state
        setCartItems((prevItems) =>
            prevItems.map(item =>
                item.product._id === productId ? { ...item, quantity } : item
            )
        );
    };

    const handleRemoveItem = async (productId) => {
        const token = localStorage.getItem('token');
        await axios.post('http://localhost:2312/api/cart/remove-item', {
            productId
        }, {
            headers: { Authorization: `Bearer ${token}` }
        });

        setCartItems((prevItems) =>
            prevItems.filter(item => item.product._id !== productId)
        );
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <div key={item.product._id} className="border p-4 rounded mb-4">
                            <h2 className="text-xl font-bold">{item.product.name}</h2>
                            <p className="text-lg">{item.product.price}</p>
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item.product._id, e.target.value)}
                                className="p-2 border rounded"
                            />
                            <button
                                onClick={() => handleRemoveItem(item.product._id)}
                                className="mt-2 p-2 bg-red-500 text-white rounded"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
