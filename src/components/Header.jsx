import React from 'react'
import {NavLink ,Link} from 'react-router-dom'


function Header() {
    return (
        <div className='bg-white text-slate-600 flex justify-between item-center px-8 py-6'>
            <h1 className='text-3xl font-bold text-red-600'>
                <Link to='/'>My App</Link>
            </h1>

            <nav className='flex gap-6 font-semibold'>
               <NavLink to='/' className={({isActive})=> isActive? 'text-red-500': ""}>Home</NavLink>
               <NavLink to='/about' className={({isActive})=> isActive? 'text-red-500': ""}>About</NavLink>
               <NavLink to='/stories' className={({isActive})=> isActive? 'text-red-500': ""}>Stories</NavLink>
               <NavLink to='/profile' className={({isActive})=> isActive? 'text-red-500': ""}>Profile</NavLink>
            </nav>
              
            
        </div>
    )
}

export default Header
