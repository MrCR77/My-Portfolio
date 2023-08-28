import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#E08D79] flex justify-center items-center p-4 sm:pt-20'>
        <form method='POST' action="https://getform.io/f/2f15f735-ddfb-4305-96ef-d866e96e43ef" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-5'>
                <p className='text-4xl font-bold inline border-b-4 border-[#B3F2DD] text-[#49416D]'>Contact</p>
                <p className='text-[#49416D] py-4'>// Submit the form below or shoot me an email - <b>adarshchowdary525@gmail.com</b></p>
            </div>
            <input className='bg-[#B3F2DD] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#B3F2DD]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#B3F2DD] p-2' name="message" rows="8" placeholder='Message'></textarea>
            <button className='text-[#49416D] border-2 hover:bg-[#49416D] hover:border-white hover:text-[#B3F2DD] hover:scale-125 duration-500 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact