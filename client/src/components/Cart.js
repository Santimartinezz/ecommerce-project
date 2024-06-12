import React, { useState } from 'react';

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    // Función para añadir un producto al carrito
    const addToCart = (product) => {
        const existingItem = cartItems.find(item => item.product.id === product.id);
        if (existingItem) {
            const updatedCart = cartItems.map(item =>
                item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartItems(updatedCart);
        } else {
            setCartItems([...cartItems, { product: product, quantity: 1 }]);
        }
    };

    // Función para eliminar un producto del carrito
    const removeFromCart = (productId) => {
        const updatedCart = cartItems.filter(item => item.product.id !== productId);
        setCartItems(updatedCart);
    };

    // Función para calcular el subtotal del carrito
    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    };

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.product.id}>
                        <span>{item.product.title} - ${item.product.price} x {item.quantity}</span>
                        <button onClick={() => removeFromCart(item.product.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <p>Subtotal: ${calculateSubtotal()}</p>
        </div>
    );
}

export default Cart;

