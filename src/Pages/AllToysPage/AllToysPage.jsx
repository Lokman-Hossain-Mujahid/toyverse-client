import React, { useEffect, useState } from 'react';
import SingleToys from '../../components/SingleToys/SingleToys';
import useTitle from '../../hooks/useTitle';


const AllToysPage = () => {
    window.scroll(0,0)

    useTitle('All Toys')

    const [toys, setToys] = useState([])
    const [searchText, setSearchText] = useState("")
    const [displayCount, setDisplayCount] = useState(20);

    useEffect(() => {
        fetch("https://toy-verse-server-beige.vercel.app/alltoys")
            .then((res) => res.json())
            .then((result) => {
                setToys(result)
            })
    }, [])


    const handleSearch = () => {
        fetch(`https://toy-verse-server-beige.vercel.app/toySearchByName/${searchText}`)
            .then((res) => res.json())
            .then((result) => {
                setToys(result);
            });
    }

    const handleSeeMore = () => {
        setDisplayCount(toys.length);
    };


    return (
        <div className='min-h-screen'>
            <div>
                <h2 className='text-6xl font-bebas font-semibold text-center'>All toys</h2>
                <hr className='md:w-1/4 mx-auto border-yellow-500 mb-6' />
            </div>

            <div className='search-box p-2 text-center mb-4'>
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder='Search...'
                    type="text"
                    className='py-2 px-4 mr-2 rounded' />
                <button onClick={handleSearch} className='btn'>Search</button>
            </div>

            <div className='overflow-x-auto w-full'>
            <table className="table md:table-compact mx-auto md:w-[90vw]">
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
                        <th>See Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys?.slice(0, displayCount).map((toy, index) => <SingleToys key={toy._id} index={index} toy={toy}></SingleToys>
                        )
                    }
                    {displayCount < toys.length && (
                        <tr>
                            <td colSpan="8" className="text-center ">
                                <button onClick={handleSeeMore} className="btn text-2xl mt-4">
                                    See More
                                </button>
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
            </div>
        </div>
    );
};

export default AllToysPage;