import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome </h1>
            <p className="text-lg mb-6">Your one-stop shop for all your needs.</p>
            <div className="flex gap-4">

                <Link to="/login" className="p-2 bg-green-700 text-white rounded hover:bg-green-600">Login</Link>
                <Link to="/register" className="p-2 bg-green-700 text-white rounded hover:bg-green-600">Register</Link>
            </div>
        </div>
    );
};

export default Home;
