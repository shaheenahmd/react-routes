import React from 'react'
import { Outlet } from 'react-router-dom'

const Stories = () => {
  return (
    <div className='text-center'>
        {/* <h2>Stories component</h2> */}
        <Outlet/>
    </div>
  )
}

export default Stories