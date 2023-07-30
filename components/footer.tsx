
import React, { useRef,Suspense,useEffect, useState } from 'react'

import Link from 'next/link'

export default function Footer()
{

    const [email, setEmail] = useState('');
    return (
        <div className='w-full h-[25rem] py-12  px-24 bg-[#141414] text-white grid grid-rows-4'>
            <div>
                <h3 className='font-bold text-3xl'>
                    Tsant Finance
                </h3>
            </div>
            
            <div className='w-full grid-span-3 grid grid-cols-4 '>
                <div className='grid grid-rows-5 gap-y-4'>
                    <h3 className='font-bold text-xl text-[#FFD700]'>Features</h3>
                    <Link href={"budget-allocator"} className='hover:underline'>budget allocator</Link>
                    <Link href={"automatic-categorization"} className='hover:underline'>automation</Link>
                    <Link href={"financial-goals"} className='hover:underline'>finacial goals</Link>
                    <Link href={"budget-allocator"} className='hover:underline'>real-time alerts</Link>
                </div>
                <div className='grid grid-rows-5 gap-y-4'>
                    <h3 className='font-bold text-xl text-[#FFD700]'>About Us</h3>
                    <Link href={"about-us"} className='hover:underline'>Who We Are</Link>
                    <Link href={"updates"} className='hover:underline'>Updates</Link>
                    <Link href={"contacts"} className='hover:underline'>Contact</Link>
                </div>
                <div className='grid grid-rows-5 gap-y-4'>
                    <h3 className='font-bold text-xl text-[#FFD700]'>Resources</h3>
                    <Link href={"usuage-manual"} className='hover:underline'>Usuage Manual</Link>
                    <Link href={"support"} className='hover:underline'>Support</Link>
                    <Link href={"privacy-policy"} className='hover:underline'>Privacy Policy</Link>
                    <Link href={"legal"} className='hover:underline'>Legal</Link>
                </div>
                <div className='h-full  flex items-center justify-center relative'>
                    <div className='text-center p-4'>
                        <h3 className='leading-snug text-2xl text-[#eaa80c] font-bold text-white'>
                            Join Our Mailing List!
                        </h3>
                        <h3 className='text-xl mt-4 '>
                            Keep up with new updates from Tsant Finance and Tsant
                        </h3>
                        <input  type='text' value={email} onChange={(e)=>setEmail(e.currentTarget.value)} placeholder='name@email.com' className='text-black mt-4 w-full h-8 p-2 rounded-lg'>
                        </input>
                        <button className='mt-4  bg-white rounded-lg hover:bg-[#dbdbdb] text-lg text-black px-4'>
                            sign up
                        </button>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}