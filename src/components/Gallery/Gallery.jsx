import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectCoverflow, Navigation, Pagination } from 'swiper';



const Gallery = () => {
    return (
        <div data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
            <div className='mt-6'>
                <div>
                    <h2 className='text-6xl font-bebas font-semibold text-center'>Action figure gallery</h2>
                    <hr className='md:w-1/4 mx-auto border-yellow-500 mb-6' />
                </div>
            </div>
            <div className="max-w-full mx-auto">
                <Swiper
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={3} 
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    navigation={true} 
                    pagination={{
                        clickable: true,
                    }} 
                    className="swiper-container"
                >
                    <SwiperSlide>
                        <img
                            src="https://cdn.leonardo.ai/users/6b05b28b-2898-4981-b04a-aedf76061171/generations/dda79fb8-d2be-4fb2-9fe5-67d42cb57dac/Leonardo_Diffusion_IronHide_Transformers_Action_Figure_toy_0.jpg"
                            alt=""
                            className="w-full h-auto"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://cdn.leonardo.ai/users/6b05b28b-2898-4981-b04a-aedf76061171/generations/155a18f1-5ba5-4b72-8b11-9074b91a9047/Leonardo_Diffusion_Megatron_Transformers_Action_Figure_toy_0.jpg"
                            alt=""
                            className="w-full h-auto"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://cdn.leonardo.ai/users/6b05b28b-2898-4981-b04a-aedf76061171/generations/50f6b14f-08d4-4b6a-924a-dc1bd5fb3440/Leonardo_Diffusion_Optimus_Prime_Transformers_Action_Figure_to_0.jpg"
                            alt=""
                            className="w-full h-auto"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://cdn.leonardo.ai/users/6b05b28b-2898-4981-b04a-aedf76061171/generations/47a8c9b6-6910-4d51-8e59-75ee2a13b77a/Leonardo_Diffusion_Starscream_Transformers_Action_Figure_toy_0.jpg"
                            alt=""
                            className="w-full h-auto"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://cdn.leonardo.ai/users/6b05b28b-2898-4981-b04a-aedf76061171/generations/ff2e38b2-70d4-4a28-b6b5-166aa6f46fbd/Leonardo_Diffusion_IronMan_Action_Figure_toy_0.jpg"
                            alt=""
                            className="w-full h-auto"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://cdn.leonardo.ai/users/6b05b28b-2898-4981-b04a-aedf76061171/generations/c629e1ed-fb10-4201-8510-68b4888978c7/Leonardo_Diffusion_Hulk_Action_Figure_toy_0.jpg"
                            alt=""
                            className="w-full h-auto"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://cdn.leonardo.ai/users/6b05b28b-2898-4981-b04a-aedf76061171/generations/fce650ac-7e3b-412a-a875-3395e3ba7069/Leonardo_Diffusion_Black_widow_Action_Figure_toy_0.jpg"
                            alt=""
                            className="w-full h-auto"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://cdn.leonardo.ai/users/6b05b28b-2898-4981-b04a-aedf76061171/generations/edc9eba9-41e6-4de1-8827-f906d3ee1d06/Leonardo_Diffusion_Darth_Vader_Figure_toy_0.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://cdn.leonardo.ai/users/6b05b28b-2898-4981-b04a-aedf76061171/generations/dd355ae4-5561-46dc-91d0-d4dfc3817c6c/Leonardo_Diffusion_Storm_Trooper_Figure_toy_0.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://cdn.leonardo.ai/users/6b05b28b-2898-4981-b04a-aedf76061171/generations/faf99fa5-d299-4345-a416-1932e63534b2/Leonardo_Diffusion_Yoda_Figure_toy_0.jpg" alt="" />
                    </SwiperSlide>

                    
                </Swiper>
            </div>
        </div>
    );
};

export default Gallery;