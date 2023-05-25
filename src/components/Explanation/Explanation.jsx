import React from 'react';

const Explanation = () => {


    
    return (
        <div>
            <div>
                <h2 className='text-6xl font-bebas font-semibold text-center'>How it's Made</h2>
                <hr className='md:w-1/4 mx-auto border-yellow-500 mb-6' />
            </div>
            <div className="">
                <div className="md:w-1/2 ">
                    <iframe className='w-full md:relative md:left-1/2' width="1280" height="560" src="https://www.youtube.com/embed/_KQwTYf_nUg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <hr className='md:w-4/4 mx-auto border-yellow-500 my-6' />
                <div className="">
                    <h2 className="text-4xl font-bold mb-4">Crafting High-Quality Action Figures: A Sneak Peek Behind the Scenes</h2>
                    <hr className='md:w-3/4 mx-auto border-yellow-500 mb-6' />

                    {/* Adding the remaining description paragraphs here */}
                </div>
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000" className='text-left text-xl px-2'>

                    <p className='mt-2 text-yellow-300'>
                        <span className='text-2xl mb-2 font-semibold text-yellow-500'>Design and Conceptualization:</span><br />
                        At the heart of every action figure lies a captivating design and a carefully thought-out concept. Our team of talented artists and designers invests countless hours in brainstorming, sketching, and refining ideas to ensure that each character represents the essence of its source material. From comic book superheroes to movie icons and gaming legends, we strive to capture the spirit and likeness of these beloved characters.
                    </p>

                    <p className='mt-2 text-yellow-300'>
                        <span className='text-2xl mb-2 font-semibold text-yellow-500'>Sculpting and Prototyping:</span><br />
                        Once the initial design is approved, our skilled sculptors bring the action figure to life in three dimensions. Using cutting-edge digital sculpting tools or traditional sculpting techniques, they painstakingly sculpt the character's features, expressions, and intricate details. These prototypes serve as the foundation for the final product and undergo rigorous evaluations to ensure accuracy and authenticity.
                    </p>

                    <p className='mt-2 text-yellow-300'>
                        <span className='text-2xl mb-2 font-semibold text-yellow-500'>Articulation and Poseability:</span><br />
                        Action figures are meant to be posed and played with, so we prioritize articulation and poseability. Our engineering team meticulously designs and tests the joints, ensuring they offer a wide range of motion without compromising structural integrity. Whether you want your figures to strike heroic poses or engage in epic battles, our action figures are built to withstand the test of time.
                    </p>

                    <p className='mt-2 text-yellow-300'>
                        <span className='text-2xl mb-2 font-semibold text-yellow-500'>Material Selection and Manufacturing:</span><br />
                        To achieve the highest quality standards, we select premium materials for our action figures. We use a variety of materials such as durable plastics, flexible resins, and high-quality paints to ensure longevity and visual appeal. Our manufacturing process involves state-of-the-art techniques, including injection molding and advanced painting methods, to bring out the vibrant colors and intricate details of each character.
                    </p>

                    <p className='mt-2 text-yellow-300'>
                        <span className='text-2xl mb-2 font-semibold text-yellow-500'>Quality Assurance:</span><br />
                        Quality is our utmost priority, and every action figure undergoes rigorous quality control procedures. Our team meticulously inspects each figure for any defects, imperfections, or paint inconsistencies before it reaches our shelves. We take pride in delivering action figures that meet or exceed the expectations of collectors and enthusiasts alike.
                    </p>

                    <p className='mt-2 text-yellow-300'>
                        <span className='text-2xl mb-2 font-semibold text-yellow-500'>Collaboration with Licensing Partners:</span><br />
                        We work closely with licensing partners, including renowned entertainment companies, to obtain the necessary approvals and ensure that our action figures faithfully represent the characters they portray. This collaboration allows us to create authentic, officially licensed collectibles that resonate with fans worldwide.
                    </p>

                    <p className='mt-2 text-yellow-300'>
                        <span className='text-2xl mb-2 font-semibold text-yellow-500'>Conclusion:</span><br />
                        We hope this behind-the-scenes glimpse into our action figure creation process has given you a newfound appreciation for the craftsmanship and dedication that goes into producing high-quality toys. At our Action Figure Toy Store, we are committed to delivering exceptional products that capture the imagination and bring joy to collectors of all ages. Shop with confidence, knowing that each action figure you purchase has been meticulously crafted to meet the highest standards of quality and authenticity.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Explanation;
