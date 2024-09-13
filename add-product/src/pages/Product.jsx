import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('http://localhost:2312/api/products');
            setProducts(response.data);
        };

        fetchProducts();
    }, []);

    const addToCart = async (productId) => {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('Please login to add items to your cart');
            return;
        }

        try {
            await axios.post('http://localhost:2312/api/add-to-cart', {
                productId,
                quantity: 1
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Product added to cart');
        } catch (error) {
            console.error(error);
            alert('Error adding product to cart');
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product._id} className="border p-4 rounded">
                            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
                            <h2 className="text-xl font-bold">{product.name}</h2>
                            <p className="text-lg">{product.price}</p>
                            <button
                                onClick={() => addToCart(product._id)}
                                className="mt-2 p-2 bg-blue-500 text-white rounded"
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))
                ) : (

                    <p className="">

                        your cart is khali
                    </p>
                )}
            </div>
            <p className="">
                Show Cart? <a href="/cart" className="text-green-700 hover:underline font-bold">Your Cart</a>

            </p>


        </div>
    );

};

export default Products;






// import React from 'react';

// const Products = () => {
//   const products = [
//     { id: 1, name: 'Product 1', price: '$10' },
//     { id: 2, name: 'Product 2', price: '$20' },
//     { id: 3, name: 'Product 3', price: '$30' },
//   ];

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Products</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {products.map((product) => (
//           <div key={product.id} className="border p-4 rounded">
//             <h2 className="text-xl font-bold">{product.name}</h2>
//             <p className="text-lg">{product.price}</p>
//             <button className="mt-2 p-2 bg-blue-500 text-white rounded">Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;
