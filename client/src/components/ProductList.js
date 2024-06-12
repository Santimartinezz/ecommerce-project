import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('http://localhost:3000/api/products');
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Products</h2>
            <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">All</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
            </select>
            <div>
                {products
                    .filter(product => category === '' || product.category === category)
                    .map(product => (
                        <div key={product._id}>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                            <button>Add to cart</button>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default ProductList;
