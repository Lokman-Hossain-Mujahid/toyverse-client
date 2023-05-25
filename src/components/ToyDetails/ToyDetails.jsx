import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';


const ToyDetails = () => {
    window.scroll(0,0)
    useTitle("Details")
    const toys = useLoaderData()
    const { _id, photoURL, name, sub_category, price, rating, quantity, description, seller, email } = toys

    return (
        <div className='min-h-screen'>
            <div>
                <h2 className='text-6xl font-bebas font-semibold text-center'>Toy Details</h2>
                <hr className='md:w-1/4 mx-auto border-yellow-500 mb-6' />
            </div>
            <div className="md:hero md:h-[80vh] bg-yellow-300">
                <div className="hero-content flex-col lg:flex-row md:gap-20">
                    <img src={photoURL} className="md:max-w-md rounded-lg shadow-2xl" />
                    <div className='font-bebas'>
                        <div>
                            <h1 className="text-5xl font-semibold">Toy Name: {name}</h1>
                        </div>
                        <div className='text-2xl py-6'>
                            <h2>Seller: {seller}</h2>
                            <h2>Email: {email}</h2>
                            <h2>Price: ${price}</h2>
                            <h2>Rating: {rating}/10</h2>
                            <h2>Available: {quantity}</h2>
                        </div>

                        <p className="py-6 text-xl">Description: {description}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;