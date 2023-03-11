import React,{useState} from 'react'
import { AiFillLock, AiOutlineMail } from 'react-icons/ai'
import Navbar from '../components/Navbar'
const SignIn = () => {
    const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')

  const handleSubmit = async (e) =>
  {
    e.preventDefault()
    setError('')
    try{
        console.log(e);
    }
    catch (e) {
      setError(e.message)
      console.log(e.message)
      alert(e.message)
    }

  }

  return (
      
    <div className='w-full h-screen bg-background  '>
<Navbar />
<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-start align-center h-full font-calli">

<h1 className=' mt-40 self-center text-5xl text-primary '>Sign In</h1>
<form onSubmit={handleSubmit}>
          <div className='my-12 text-lg text-primary rounded-2xl'>
            <label>Email</label>
            <div className='my-2 w-full relative rounded-2xl '>
              <input 
              onChange={(e)=>setEmail(e.target.value)}
              className='w-full p-2 bg-secondary border border-input rounded-2xl shadow-xl text-[#fff]' type="email" />
              <AiOutlineMail className='absolute right-2 top-3 text-primary' />
            </div>
          </div>
          <div className='my-4 text-lg text-primary'>
            <label>Password</label>
            <div className='my-2 w-full relative rounded-2xl '>
              <input 
              onChange={(e)=>setPassword(e.target.value)}
              className='w-full p-2 bg-secondary border border-input rounded-2xl shadow-xl text-[#fff]' type="password" />
              <AiFillLock className='absolute right-2 top-3 text-primary' />
            </div>
          </div>
          <button className=' text-lg w-full my-2 p-3 bg-button text-secondary rounded-2xl shadow-xl hover:text-primary'>
            Sign In
          </button>
        </form>

</div>
        </div>
  )
}

export default SignIn