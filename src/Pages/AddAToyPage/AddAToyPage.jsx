import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Authentication/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Swal from 'sweetalert2';


const AddAToyPage = () => {

    useTitle('Add Toy')

    const { user } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();



    const onSubmit = (data, event) => {
        fetch("https://toy-verse-server-beige.vercel.app/addedToys", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                event.target.reset()
                Swal.fire({
                    icon: 'success',
                    title: 'Toy Added!',
                    text: 'The toy has been successfully added.',
                    confirmButtonText: 'OK',
                    onClose: () => {
                        // Handle any necessary actions after the alert is closed
                    }
                });
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong. Please try again later.',
                    confirmButtonText: 'OK'
                });
            });
        console.log(data)
    };



    return (
        <div>
            <div>
                <h2 className='text-6xl font-bebas font-semibold text-center'>ADD a toy</h2>
                <hr className='md:w-1/4 mx-auto border-yellow-500 mb-6' />
            </div>
            <div className='text-center md:my-6 md:h-[70vh] hero bg-cover bg-[url("/pictures/actionfiguresblurr.png")] bg-yellow-300 py-5 md:w-2/4 md:mx-auto rounded-lg'>

                <form className='grid gap-2 md:gap-0 md:grid-rows-5' onSubmit={handleSubmit(onSubmit)}>
                    <div>

                        <input
                            className='p-1 rounded'
                            placeholder="Picture URL"
                            {...register("photoURL", { required: true })} />


                        <input
                            className='mt-2 ml-1 md:mt-0 md:ml-2 p-1 rounded'
                            placeholder="ToyName"
                            {...register("name", { required: true })}
                        />

                        <select className='ml-2 mt-2 md:mt-0 p-1 rounded' {...register("sub_category")}>
                            <option value="Avengers">Avengers</option>
                            <option value="StarWars">StarWars</option>
                            <option value="Transformers">Transformers</option>
                        </select>

                    </div>

                    <div>

                        <input
                            className='p-1 rounded mr-2 md:mr-0'
                            placeholder="Price"
                            {...register("price", { required: true })}
                            type='number' />


                        <input
                            className='mt-2 md:mt-0 md:ml-2 px-6 p-1 rounded'
                            placeholder="Rating"
                            min="1"
                            max="10"
                            {...register("rating",
                                { required: true })}
                            type='number'
                        />


                        <input
                            className='mt-2 md:mt-0 md:ml-2 p-1 rounded'
                            placeholder="Quantity"
                            {...register("quantity",
                                { required: true })}
                            type='number' />

                    </div>


                    <div className=''>
                        <textarea className="textarea textarea-bordered bg-base-300 textarea-md w-full max-w-xs"
                            placeholder='description...'
                            {...register("description")}
                        />
                    </div>

                    <div className='md:mt-6'>

                        <input
                            className='p-1 rounded'
                            defaultValue={user?.displayName}
                            {...register("seller")}
                            placeholder='Seller Name'
                        />


                        <input
                            className='mt-2 md:mt-0 ml-1 md:ml-2 p-1 rounded'
                            defaultValue={user?.email}
                            {...register("email", { required: true })}
                            placeholder='Email'
                            type='email'
                        />

                    </div>

                    {/* errors will return when field validation fails  */}
                    <button type="submit" className="btn mt-4 bg-white text-black">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddAToyPage;