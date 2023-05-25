import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Authentication/AuthProvider/AuthProvider';

const ToyTab = () => {

    const [toys, setToys] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch("https://toy-verse-server-beige.vercel.app/alltoys")
            .then((res) => res.json())
            .then((result) => {
                setToys(result)
            })
    }, [])

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
        <div className='mt-6 ' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
            <div>
                <h2 className='text-6xl font-bebas font-semibold text-center'>Action Figure Categories</h2>
                <hr className='md:w-2/4 mx-auto border-yellow-500 mb-6' />
            </div>
            <div className='text-center mx-auto'>
                <Tabs>
                    <TabList>
                        <Tab>Avengers</Tab>
                        <Tab>StarWars</Tab>
                        <Tab>Transformers</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='grid md:grid-cols-3 gap-3 max-w-7xl mx-auto'>
                            {
                                toys.filter(toy => toy.sub_category == "Avengers").slice(0, 6).map(avenger =>
                                    <div className='card-container' key={avenger._id}>
                                        <div className="md:card md:w-96 bg-yellow-200 shadow-xl font-bebas text-3xl">
                                            <figure className="px-10 pt-10">
                                                <img src={avenger.photoURL} alt="Shoes" className="rounded-xl" />
                                            </figure>
                                            <div className="card-body items-center text-center">
                                                <h2 className="card-title text-3xl">{avenger.name}</h2>
                                                <p>${avenger.price}</p>
                                                <p>{avenger.rating}/10</p>
                                                <div className="card-actions">
                                                    <Link to={`/toydetail/${avenger._id}`}>
                                                        <button className='btn text-xl' onClick={handleViewDetails}>
                                                            View Details
                                                        </button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        {toys.filter(toy => toy.sub_category == 'Avengers').length > 5 ? <div className='flex justify-center items-center mt-[20px]'><Link to='/alltoys'><button className='btn btn-warning text-center'>see more</button></Link></div> : ''}
                    </TabPanel>
                    <TabPanel>
                        <div className='grid md:grid-cols-3 gap-3 md:max-w-7xl mx-auto'>
                            {
                                toys.filter(toy => toy.sub_category == "StarWars").slice(0, 6).map(starwars =>
                                    <div className='card-container' key={starwars._id}>
                                        <div className="md:card md:w-96 bg-yellow-200 shadow-xl font-bebas text-3xl">
                                            <figure className="px-10 pt-10">
                                                <img src={starwars.photoURL} alt="Shoes" className="rounded-xl" />
                                            </figure>
                                            <div className="card-body items-center text-center">
                                                <h2 className="card-title text-3xl">{starwars.name}</h2>
                                                <p>${starwars.price}</p>
                                                <p>{starwars.rating}/10</p>
                                                <div className="card-actions">
                                                    <Link to={`/toydetail/${starwars._id}`}>
                                                        <button className='btn text-xl' onClick={handleViewDetails}>
                                                            View Details
                                                        </button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                        {toys.filter(toy => toy.sub_category == 'StarWars').length > 5 ? <div className='flex justify-center items-center mt-[20px]'><Link to='/alltoys'><button className='btn btn-warning text-center'>see more</button></Link></div> : ''}
                    </TabPanel>
                    <TabPanel>
                        <div className='grid md:grid-cols-3 gap-3 max-w-7xl mx-auto'>
                            {
                                toys.filter(toy => toy.sub_category == "Transformers").slice(0, 6).map(transformers =>
                                    <div className='card-container' key={transformers._id}>
                                        <div className="md:card md:w-96 bg-yellow-200 shadow-xl font-bebas text-3xl ">
                                            <figure className="px-10 pt-10">
                                                <img src={transformers.photoURL} alt="Shoes" className="rounded-xl" />
                                            </figure>
                                            <div className="card-body items-center text-center">
                                                <h2 className="card-title text-3xl">{transformers.name}</h2>
                                                <p>${transformers.price}</p>
                                                <p>{transformers.rating}/10</p>
                                                <div className="card-actions">
                                                    <Link to={`/toydetail/${transformers._id}`}>
                                                        <button className='btn text-xl' onClick={handleViewDetails}>
                                                            View Details
                                                        </button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        {toys.filter(toy => toy.sub_category == 'Transformers').length > 5 ? <div className='flex justify-center items-center mt-[20px]'><Link to='/alltoys'><button className='btn btn-warning text-center'>see more</button></Link></div> : ''}
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default ToyTab;