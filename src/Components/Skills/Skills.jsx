import React from 'react';
import HTML from '../../Assests/html.png';
import CSS from '../../Assests/css.png';
import JavaScript from '../../Assests/javascript.png';
import ReactImg from '../../Assests/react.png';
import Node from '../../Assests/node.png';
import FireBase from '../../Assests/firebase.png';
import GitHub from '../../Assests/github.png';
import Tailwind from '../../Assests/tailwind.png';
import Mongo from '../../Assests/mongo.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#E08D79] text-[#49416D] pt-16'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#B3F2DD]'>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 font-bold'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:border-4 border-[#B3F2DD] hover:text-[#B3F2DD]'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4 '>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:border-4 border-[#B3F2DD] hover:text-[#B3F2DD]'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:border-4 border-[#B3F2DD] hover:text-[#B3F2DD]'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:border-4 border-[#B3F2DD] hover:text-[#B3F2DD]'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:border-4 border-[#B3F2DD] hover:text-[#B3F2DD]'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:border-4 border-[#B3F2DD] hover:text-[#B3F2DD]'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:border-4 border-[#B3F2DD] hover:text-[#B3F2DD]'>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:border-4 border-[#B3F2DD] hover:text-[#B3F2DD]'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
