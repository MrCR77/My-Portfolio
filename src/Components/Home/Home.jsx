import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Typed from 'react-typed';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#E08D79]'>

            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#49416D] font-bold'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#B3F2DD]'>Adarsh Choudhari</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#B3F2DD]' >I'm a
                    <Typed
                        className='ml-4 text-[#49416D]'
                        strings={['Full Stack Developer', 'Front End Developer', 'Back End Developer']}
                        typeSpeed={120}
                        backSpeed={120}
                        loop
                    />
                </h2>
                <p className='text-[#49416D] py-4 max-w-[700px]'>
                    I’m a <b>front-end developer</b> specializing in building and
                    designing exceptional digital experiences. Currently, I’m focused on
                    building responsive front-end web applications.
                </p>
                <div>
                    <button>
                        <Link className='group text-[#49416D] border-2 border-[#49416D] px-6 py-3 my-2 flex items-center hover:bg-[#49416D] hover:border-[#B3F2DD] lg:hover:scale-125 duration-500 hover:text-[#B3F2DD]' to='work' smooth={true} duration={500}>
                            View Work
                            <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3' /></span>
                        </Link></button>
                </div>
            </div>

        </div>
    )
}

export default Home