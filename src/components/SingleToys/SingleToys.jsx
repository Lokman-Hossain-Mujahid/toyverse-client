import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Authentication/AuthProvider/AuthProvider';

const SingleToys = ({ toy, index }) => {

    const { _id, seller, name, sub_category, price, quantity, photoURL } = toy || {};
    const {user} = useContext(AuthContext)

    const handleViewDetails = () => {
        if (!user) {
            Swal.fire({
                icon: 'info',
                title: 'Login Required',
                text: 'You have to log in first to view details.',
            });
        } else {
            // Navigate to the toy details page
            
        }
    };

    return (
        <>
            <tr>
                <td></td>
                <td>{index + 1}</td>
                <td><div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={photoURL} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div></td>              
                <td>{seller}</td>
                <td>{name}</td>
                <td>{sub_category}</td>
                <td>${price}</td>
                <td>{quantity}</td>

                <td>
                    <Link to={`/toydetail/${_id}`}>
                        <button className='btn' onClick={handleViewDetails}>
                            View Details
                        </button></Link>
                </td>
            </tr>
        </>
    )
};

export default SingleToys;