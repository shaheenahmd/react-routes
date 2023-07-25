import React, { useContext } from 'react'
import { usercontext } from '../Context';



const About = () => {

const {counter,setCounter,name}= useContext(usercontext);

  return (
    <div className='bg-yellow-400 min-h-screen p-4 mt-3'>
      <h1 className='text-2xl'>About componet</h1>

      <h1 className='text-4xl'>{counter}</h1>
      <h2>{name}</h2>
    </div>
  )
}

export default About