import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Orders() {
    const [orders, setOrders] = useState([]);

    // Función para cargar las órdenes desde la API
    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/orders'); // Ajusta la URL según tu backend
            setOrders(response.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    return (
        <div>
            <h2>Orders</h2>
            <ul>
                {orders.map(order => (
                    <li key={order._id}>
                        <h3>Order Number: {order.orderNumber}</h3>
                        <p>Status: {order.status}</p>
                        <ul>
                            {order.products.map(product => (
                                <li key={product._id}>
                                    {product.title} - Quantity: {product.quantity} - Price: ${product.price}
                                </li>
                            ))}
                        </ul>
                        <p>Order Date: {new Date(order.orderDate).toLocaleDateString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Orders;
