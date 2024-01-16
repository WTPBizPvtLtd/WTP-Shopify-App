async function fetchProductData() {
    try {
        const response = await fetch('https://shopify-node-backend.onrender.com/api/shopify/authorize?shop=designtool678'); // Use your API URL here
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch product data:", error);
        return null;
    }
}

import React, { useEffect, useState } from 'react';

const MyComponent = () => {
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        fetchProductData().then(data => setProductData(data));
    }, []);

    if (!productData) {
        return <div>Loading...</div>;
    }

    return <div>{JSON.stringify(productData)}</div>;
};

export default MyComponent;
