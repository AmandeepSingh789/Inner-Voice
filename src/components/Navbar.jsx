import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'
import logo from  '../assets/Inner Voice.png'


const Navbar = ({home,signinpage,signuppage}) => {

    const [nav,SetNav] = useState(false)
    const handleClick =()=>
    {
        SetNav(!nav)
    }

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center  text-gray-300 text-secondary font-comforter">
        <div className='text-4xl mx-4 text-primary mt-12 lg:ml-12'>
            <img src={logo} alt="Inner Voice" width={200} height={200} />
        </div>

        <ul className='hidden md:flex animate-fade-in-down mr-20' >
            <li className=' transition ease-in-out delay-100 text-3xl hover:text-primary mx-2 cursor-pointer'>
            
            <Link to = {home}>
            Home
            </Link>
            
            </li>
            <li className=' transition ease-in-out delay-100 text-3xl hover:text-primary mx-2'>
                
                <Link to = {signinpage}>
                Sign In
            </Link>
            </li>
            <li className=' transition ease-in-out delay-100 text-3xl hover:text-primary mx-2'>
            <Link to = {signuppage}>
                Sign Up
            </Link>
            </li>

        </ul>

        <div onClick = {handleClick} className=' md:hidden z-10 mr-2 md:mr-8'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-background flex flex-col justify-center items-center  '} >
        <li className=' transition ease-in-out delay-100 py-6 text-4xl' >Home</li>

        <li className=' transition ease-in-out delay-100 py-6 text-4xl' >Sign In</li>

        <li className=' transition ease-in-out delay-100 py-6 text-4xl' >Sign Up</li>

        </ul>
    </div>
  )
}

export default Navbar