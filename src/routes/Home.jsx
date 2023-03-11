import React from 'react'
import Hero from '../components/Hero'
import Navbar  from '../components/Navbar'
const Home = () => {
  return (
    <div>
        <Navbar home ="/" signinpage="/signin" signuppage="/signup"/>
       <Hero />
    </div>
  )
}

export default Home