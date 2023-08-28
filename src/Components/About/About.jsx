import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#E08D79] text-[#49416D]'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#B3F2DD]'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm <span className='text-[#B3F2DD]'>Adarsh Choudhari</span>, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>A highly motivated and passionate React JS Developer with strong technical skills and a desire to learn
                            and grow. Possessing a solid understanding of front-end development and web technologies, and eager
                            to leverage these skills to deliver outstanding results. Seeking a challenging role in a dynamic
                            organization where I can apply my skills and knowledge to build innovative solutions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
