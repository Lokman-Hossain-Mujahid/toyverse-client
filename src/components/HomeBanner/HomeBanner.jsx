import React from 'react';
import useTitle from '../../hooks/useTitle';

const HomeBanner = () => {
    useTitle('Home')
    return (
        <div className='mt-6'>
            <div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                <div className=' w-11/12 h-[80vh] mx-auto rounded-lg border-4 border-yellow-500 bg-cover bg-[url("/pictures/avengerbanner.png")] p-4 md:p-0 '>
                    <div className='absolute left-[35%] md:left-[44%]'>
                        <img className='md:h-56 h-36' src="/pictures/logo.png" alt="" />
                    </div>
                    <div className='text-center text-white font-bebas mt-20 md:mt-6'>

                        <div className='md:pt-28  md:pr-9'>
                            <h2 className=' text-2xl md:text-7xl  md:font-bold md:my-4 pt-24 md:pt-16 '>Welcome To ToyVerse!</h2>
                            <h2 className=' md:font-semibold text-xl -mt-4 md:-mt-0 md:text-4xl pb-2 md:pb-10'> <br /> Find All Kinds Of Action Figure Toys Here</h2>
                            <p className='  md:text-xl md:px-40'>Unleash your inner hero at ToyVerse - the ultimate destination for action figure enthusiasts. Explore our vast selection of iconic characters from Marvel, Avengers, Star Wars, and Transformers. Discover the extraordinary craftsmanship and intricate details that bring these legendary tales to life. Step into a world of imagination and adventure at ToyVerse!</p>
                        </div>


                    </div>


                </div>
            </div>
        </div>
    );
};

export default HomeBanner;