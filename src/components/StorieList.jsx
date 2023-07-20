import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const StorieList = () => {
  
  const[stories,setStories]= useState([]);

  const navigate = useNavigate();

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')           //api for the get request
    .then(response => response.json())
    .then(data => setStories(data));
    console.log(data);
    
  },[])


  return (
    
    <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8'>
      {stories.map((story)=>(
        <div className='bg-white p-8 text-left'>
          <h1>{story.title}</h1>
          <button className='bg-pink-400 text-white p-1 text-xs mt-4 rounded' onClick={()=>navigate(`${story.id}`)}>Read story</button>
        </div>
      ))}
    </div>

   
  )
}

export default StorieList;