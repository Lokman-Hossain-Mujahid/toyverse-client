import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    window.scroll(0, 0)

    const { googleSignIn, signIn, success, setSuccess } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    useTitle('Login')

    const [error, setError] = useState('')

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);

        setError('')
        if (password.length < 6) {
            setError('*Password needs to be 6 characters or longer*')
            return
        }

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                form.reset()
                setSuccess(null)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError('*No user found*')
            })

    }

    const handleGoogleSingIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(null)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }

    return (
        <div>
            <div className="hero md:h-[80vh] bg-base-200">
                <div className='text-white text-center py-2'>
                    {success ? <p>{success}</p> : ''}
                </div>
                <div className="hero-content flex-col lg:flex">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold font-nunito">Login now!</h1>
                        <p className="py-6 text-xl font-nunito">And be a part of wonderful action figure kingdom <span className='font-semibold italic'>"ToyVerse"</span></p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-10">
                        <form onSubmit={handleLogin} className="flex flex-col gap-4">

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

                            <button type="submit" className="btn mt-4 bg-white text-black">
                                Login
                            </button>
                        </form>
                        <h2 className='text-center text-xl mt-2'>Or</h2>
                        <button onClick={handleGoogleSingIn} className='btn my-4'>Login With Google</button>
                        <p className='text-red-500 text-center mt-6'>{error}</p>
                    </div>
                    
                    <div className='mt-6'>
                            <h2><small>Don't have an account? <Link className='text-red-600 underline' to="/register">Register</Link></small></h2>
                        </div>
                </div>
                

            </div>
        </div>
    );
};

export default Login;