import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Authentication/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const MySingleToys = ({ toy, index }) => {

    const { updated, setUpdated } = useContext(AuthContext)

    const { _id, seller, name, sub_category, price, quantity, photoURL, description } = toy || {};

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data, event) => {
        event.preventDefault();
        fetch(`https://toy-verse-server-beige.vercel.app/updatetoys/${_id}`, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.modifiedCount > 0) {
                    setUpdated(true);
                    Swal.fire({
                        icon: 'success',
                        title: 'Updated Successfully',
                        text: 'The toy has been updated successfully.',
                        confirmButtonText: 'OK',
                        onClose: () => {
                            // Handle any necessary actions after the alert is closed
                        },
                    });
                }
                event.target.reset()
            })
            .catch(error => {
                console.error(error);
            });
        console.log(data)
    };

    // const handleDelete = id => {
    //     const proceed = confirm('Are you sure you want to delete')
    //     if (proceed) {
    //         fetch(`https://toy-verse-server-beige.vercel.app/deletetoys/${id}`, {
    //             method: "DELETE"
    //         })
    //             .then(res => res.json())
    //             .then(result => {
    //                 console.log(result)
    //                 if (result.deletedCount > 0) {
    //                     setUpdated(true)
    //                 }
    //             })
    //     }
    // }

    const handleDelete = id => {
        Swal.fire({
            icon: 'question',
            title: 'Confirmation',
            text: 'Are you sure you want to delete?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }).then(result => {
            if (result.isConfirmed) {
                fetch(`https://toy-verse-server-beige.vercel.app/deletetoys/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                        if (result.deletedCount > 0) {
                            setUpdated(true);
                            Swal.fire({
                                icon: 'success',
                                title: 'Deleted Successfully',
                                text: 'The toy has been deleted successfully.',
                                confirmButtonText: 'OK',
                                onClose: () => {
                                    // Handle any necessary actions after the alert is closed
                                },
                            });
                        }
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        });
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
                    {/* The button to open modal */}
                    <label htmlFor={_id} className="btn">Update</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id={_id} className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <div>
                                <h2 className='text-6xl font-bebas font-semibold text-center'>Update a toy</h2>
                                <hr className='md:w-1/4 mx-auto border-yellow-500 mb-6' />
                            </div>
                            <div className='text-center md:my-6 md:h-[70vh] hero bg-cover bg-[url("/pictures/actionfiguresblurr.png")] bg-yellow-300 py-5 md:w-2/4 mx-auto rounded-lg'>

                                <form className='grid gap-2 md:gap-0 md:grid-rows-3' onSubmit={handleSubmit(onSubmit)}>


                                    <div className='flex flex-col'>

                                        <input
                                            className='p-1 rounded'
                                            defaultValue={price}
                                            placeholder="Price"
                                            {...register("price", { required: true })}
                                            type='number' />



                                        <input
                                            className='mt-2 md:mt-3 md:ml-0 p-1 rounded'
                                            defaultValue={quantity}
                                            placeholder="Quantity"
                                            {...register("quantity",
                                                { required: true })}
                                            type='number' />

                                    </div>


                                    <div className=''>
                                        <textarea className="textarea textarea-bordered bg-base-300 textarea-md w-full max-w-xs"
                                            defaultValue={description}
                                            placeholder='description...'
                                            {...register("description",
                                                { required: true })}
                                        />
                                    </div>



                                    {/* errors will return when field validation fails  */}
                                    <button type="submit" className="btn mt-4 bg-white text-black">
                                        Update
                                    </button>
                                </form>
                            </div>
                            <div className="modal-action">
                                <label htmlFor={_id} className="btn">Done</label>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <button onClick={() => handleDelete(_id)} className='btn' >
                        delete
                    </button>
                </td>
            </tr>
        </>
    );
};

export default MySingleToys;