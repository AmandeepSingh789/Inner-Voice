import React,{useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
const Navbar = () => {

    const [nav,SetNav] = useState(false)
    const handleClick =()=>
    {
        SetNav(!nav)
    }

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center bg-[#tertiary] text-gray-300 text-secondary font-comforter">
        <div className='text-4xl mx-4 ml-20 text-primary'>
            Inner Voice
        </div>

        <ul className='hidden md:flex animate-fade-in-down mr-20' >
            <li className=' transition ease-in-out delay-100 text-3xl hover:text-primary mx-2'>
                Home
            </li>
            <li className=' transition ease-in-out delay-100 text-3xl hover:text-primary mx-2'>
                Home
            </li>
            <li className=' transition ease-in-out delay-100 text-3xl hover:text-primary mx-2'>
                Home
            </li>

        </ul>

        <div onClick = {handleClick} className=' md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>
    </div>
  )
}

export default Navbar