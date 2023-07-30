
import React, { useRef,Suspense,useEffect, useState } from 'react'

import Link from 'next/link'

export default function Header()
{
    const redirectButton = (location:string) =>
    {
        window.location.href = location;
    }
    return (
        <div className='p-3 bg-black w-full grid grid-cols-4 sticky top-0 left-0 border-b-2 border-[#DCB13C] z-50'>
          <Link href={'/'}><h3 className=' p-2 font-bold text-2xl'>Tsant Finance</h3></Link>
          <div className='col-span-2 grid grid-cols-4 text-xl'>
            <Link href={'/learnmore'}><h3 className='p-2 hover:text-[#FFD700] hover:font-bold hover:underline'>Features</h3></Link>
            <Link href={'/aboutus'}><h3 className='p-2 hover:text-[#FFD700] hover:font-bold hover:underline'>About Us</h3></Link>
            <Link href={'/howitworks'}><h3 className='p-2 hover:text-[#FFD700] hover:font-bold hover:underline '>How it Works</h3></Link>
            <Link href={'/pricing'}><h3 className='p-2 hover:text-[#FFD700] hover:font-bold hover:underline'>Pricing</h3></Link>
          </div>
          <div className='border-l-2 grid grid-cols-2 gap-x-4 text-xl text-black px-4'> 
            <button onClick={()=>
            {
              redirectButton("login")
            }} className='bg-white rounded-xl hover:bg-[#dbdbdb]'>
              Login
            </button>
            <button onClick={()=>
            {
              redirectButton("login")
            }} className='bg-white rounded-xl hover:bg-[#dbdbdb]'>
              Get Started
            </button>
          </div>
        </div>
    )
}