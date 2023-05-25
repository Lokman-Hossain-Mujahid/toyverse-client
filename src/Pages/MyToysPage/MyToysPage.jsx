import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Authentication/AuthProvider/AuthProvider';
import SingleToys from '../../components/SingleToys/SingleToys';
import useTitle from '../../hooks/useTitle';
import MySingleToys from '../../components/MySingleToys/MySingleToys';

const MyToysPage = () => {

    useTitle('My Toys')

    const { user, updated, setUpdated } = useContext(AuthContext)
    const [toys, setToys] = useState([]);
    const [sortAscending, setSortAscending] = useState(true);

    useEffect(() => {
        fetch(`https://toy-verse-server-beige.vercel.app/mytoys/${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
        setUpdated(false)
    }, [user, updated])

    const handleSortByPrice = () => {
        
        const newSortOrder = !sortAscending;
        setSortAscending(newSortOrder);

        
        const sortedToys = [...toys].sort((a, b) => {
            if (sortAscending) {
                return a.price - b.price; 
            } else {
                return b.price - a.price; 
            }
        });

        
        setToys(sortedToys);
    };

    return (
        <div className='min-h-screen'>
            <div>
                <h2 className='text-6xl font-bebas font-semibold text-center'>My toys</h2>
                <hr className='md:w-1/4 mx-auto border-yellow-500 mb-6' />
            </div>

            <div className='text-center my-3'>
                <button className='btn' onClick={handleSortByPrice}>Sort by price</button>
            </div>

            <div className='overflow-x-auto w-full'>
                <table className="table table-compact mx-auto w-[90vw]">
                    <thead>
                        <tr>
                            <th></th>
                            <th>#</th>
                            <th>Images</th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>price</th>
                            <th>quantity</th>
                            <th>Update Toy</th>
                            <th>Delete Toy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys?.map((toy, index) => <MySingleToys key={toy._id} index={index} toy={toy}></MySingleToys>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToysPage;