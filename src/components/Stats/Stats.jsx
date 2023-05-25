import React from 'react';

const Stats = () => {
    return (
        <div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
            <div>
                <h2 className='text-6xl font-bebas font-semibold text-center'>ToyVerse Progression</h2>
                <hr className='md:w-1/4 mx-auto border-yellow-500 mb-6' />
            </div>
            <div className='md:text-8xl'>
                <div className="stats stats-vertical mt-10 lg:stats-horizontal shadow">

                    <div className="stat">
                        <div className="stat-title text-yellow-400">Toy Sells</div>
                        <div className="stat-value text-yellow-500">31K</div>
                        <div className="stat-desc text-xl text-yellow-600">April 1st - May 1st</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title text-yellow-400">New Buyers</div>
                        <div className="stat-value text-yellow-500">4,200</div>
                        <div className="stat-desc text-xl text-yellow-600">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title text-yellow-400">New Registers</div>
                        <div className="stat-value text-yellow-500">1,200</div>
                        <div className="stat-desc text-xl text-yellow-600">↘︎ 90 (14%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title text-yellow-400">New Products</div>
                        <div className="stat-value text-yellow-500">5,000</div>
                        <div className="stat-desc text-xl text-yellow-600">↗︎ 200 (22%)</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Stats;