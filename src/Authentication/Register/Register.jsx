import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import useTitle from '../../hooks/useTitle';


const Register = () => {
    window.scroll(0, 0)
    const { createUser, logOut, setSuccess } = useContext(AuthContext);

    const [error, setError] = useState('')

    useTitle('Register')

    const navigate = useNavigate()

    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photoURL.value;

        console.log(name, email, password, photo);

        setError('')
        if(password.length < 6){
            setError('*password needs to be 6 characters or longer')
            return
        }

        createUser(email, password)
            .then(response => {
                const user = response.user

                updateProfile(response.user, {
                    displayName: name, photoURL: photo
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });

                console.log(user);
                form.reset()
                setSuccess('*Registration complete! You can now Login')
                logOut()
                navigate("/login")

            })

            .catch(error => {
                console.log(error);
                setError('*This E-mail already exists*')
            })
    }

    return (
        <div className='hero bg-base-200 mx-auto  md:h-[90vh]'>

            <div>
                <div className="hero-content flex-col lg:flex">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold font-nunito">Register now!</h1>
                        <p className="py-6 text-xl font-nunito">And be a part of wonderful action figure kingdom <span className='font-semibold italic'>"ToyVerse"</span></p>
                    </div>
                    
                    <div className=' card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-10'>
                    
                        <form onSubmit={handleSignUp} className="flex flex-col gap-4">
                            <div className="form-control">
                                <label htmlFor="name" className="label">
                                    Your name
                                </label>
                                <input
                                    name="name"
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    required={true}
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label htmlFor="email" className="label">
                                    Your email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    required={true}
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label htmlFor="password" className="label">
                                    Your password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    required={true}
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label htmlFor="photoUrl" className="label">
                                    Photo URL
                                </label>
                                <input
                                    name="photoURL"
                                    id="photoUrl"
                                    type="url"
                                    placeholder="Enter your photo"
                                    required={false}
                                    className="input input-bordered"
                                />
                            </div>
                            <button type="submit" className="btn mt-4 bg-white text-black">
                                Submit
                            </button>
                        </form>
                        <div className='mt-6'>
                            <h2><small>Already registered? <Link className='text-red-600 underline' to="/login">Login</Link></small></h2>
                        </div>
                        <p className='text-red-50 mt-6'>{error}</p>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;