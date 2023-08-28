import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[85px] bg-[#49416D] flex justify-between items-center px-4 text-[#B3F2DD]'>
            <div className='z-10 lg:ml-[50px] md:ml-[20px] lg:hover:scale-125 duration-500'>
                <h1 className='text-4xl font-bold text-[#B3F2DD] border-b-4 border-[#E08D79]'>AC.</h1>
            </div>

            <div>
                <ul className='hidden md:flex justify-between lg:mr-10 text-[18px]'>
                    <li className='hover:text-[#E08D79] hover:scale-125 duration-300'>
                        <Link to='home' smooth={true} duration={500}>
                            Home
                        </Link></li>
                    <li className='hover:text-[#E08D79] hover:scale-125 duration-300'>
                        <Link to='about' smooth={true} duration={500}>
                            About
                        </Link></li><li className='hover:text-[#E08D79] hover:scale-125 duration-300'>
                        <Link to='skills' smooth={true} duration={500}>
                            Skills
                        </Link></li><li className='hover:text-[#E08D79] hover:scale-125 duration-300'>
                        <Link to='work' smooth={true} duration={500}>
                            Work
                        </Link></li>
                    <li className='hover:text-[#E08D79] hover:scale-125 duration-300'>
                        <Link to='contact' smooth={true} duration={500}>
                            Contact
                        </Link></li>
                </ul>
            </div>

            <div onClick={handleClick} className='md:hidden z-10 hover:text-pink-600 hover:scale-125 duration-300'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 h-screen w-full bg-[#49416D] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl hover:text-[#E08D79] hover:scale-125 duration-300'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link></li>
                <li className='py-6 text-4xl hover:text-[#E08D79] hover:scale-125 duration-300'>
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link></li>
                <li className='py-6 text-4xl hover:text-[#E08D79] hover:scale-125 duration-300'>
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        Skills
                    </Link></li>
                <li className='py-6 text-4xl hover:text-[#E08D79] hover:scale-125 duration-300'>
                    <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                        Work
                    </Link></li>
                <li className='py-6 text-4xl hover:text-[#E08D79] hover:scale-125 duration-300'>
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link></li>
            </ul>


            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a target='_blank' className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/adarsh-choudhari-6434391b9/">
                            Linkedin<FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000]'>
                        <a target='_blank' className='flex justify-between items-center w-full text-gray-300' href="https://github.com/MrCR77">
                            Github<FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a target='_blank' className='flex justify-between items-center w-full text-gray-300' href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCDlgrzhTWLwvqSXnmCfpnLXnPRrnLQHcLWlWJblzzFvsRSZvBfQKhDQnKcQXhZzlbGJxV">
                            Gmail<HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="/">
                            Resume<BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>

            </div>

        </div>
    )
}

export default Navbar