import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const StorieID = () => {

    const {id} = useParams()
    
    const[story,setStory]=useState()

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=> res.json())
        .then(data=> setStory(data));
    },[])

  return (
    <div>
        <div className='bg-white p-8'>
            <h1 className='text-red-500 font-bold pb-4 text-2xl'>{story?.title}</h1>
            <p>{story?.body}</p>
        </div>
    </div>
  )
}

export default StorieID