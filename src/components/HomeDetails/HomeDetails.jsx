import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import ToyTab from '../ToyTab/ToyTab';
import Gallery from '../Gallery/Gallery';
import Stats from '../Stats/Stats';
import Explanation from '../Explanation/Explanation';


const HomeDetails = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Gallery></Gallery>
            <ToyTab></ToyTab>
            <div className='max-w-7xl mx-auto text-center font-bebas mt-10'>
                <Explanation></Explanation>
            </div>
            <div className='w-[90vw] mx-auto text-center text-6xl font-bebas mt-10'>
                <Stats></Stats>
            </div>
        </div>
    );
};

export default HomeDetails;