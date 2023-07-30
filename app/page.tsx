'use client'
import Image from 'next/image'

import FinanceDesign from '@/components/financeDesign'
import { ThreePieChart } from '@/components/threeChartDesign'
import { Suspense } from 'react'
import Link from 'next/link'

import Footer from '@/components/footer';
import Header from '@/components/header'

//bg-[#0A0E28]
export default function Home() {

  const redirectButton = (location:string) =>
  {
    window.location.href = location;
  }

  return (
    <main className="items-center">
      
      <Header/>
      <div className='z-10 w-full text-center   '>
        <div className='bg-[#2C3259] border-[#DCB13C] grid grid-cols-2  border-b-2 w-screen h-[40rem]'>
            <div className='w-[150vw] relative right-full'>
              <Suspense>
                <ThreePieChart  className={""}/>
              </Suspense>
            </div>
            <div className='h-full flex items-center justify-center relative z-20'>
              <div className='text-right pr-12 '>
                <h3 className='leading-snug text-8xl font-bold text-[#FFD700]'>
                  Easily Manage Your Finances!
                </h3>
                <h3 className='mt-4 text-3xl'>[Tsant Finance] is here to streamline budgeting for you! Take advantage of simple yet powerful budgeting tools for any purpose.</h3>
                <button onClick={()=>
            {
              redirectButton("register")
            }} className='mt-8 text-2xl font-bold bg-[#FFD700] text-[#18206F] p-4 rounded-xl hover:bg-[#d1b202] hover:rounded-lg duration-100 '>Get Started for Free!</button>
              </div>
            </div>
        </div>
        <div className='border-[#DCB13C] grid grid-cols-2 bg-[#000035] w-screen h-[35rem]'>
            
            <div className='h-full flex items-center justify-center relative z-20'>
              <div className='text-left p-12'>
                <h3 className='leading-snug text-6xl text-[#eaa80c] font-bold text-white'>
                    Simple and Effective Budgeting
                </h3>
                <h3 className='mt-4 text-2xl'>
                  Create seemless budgets to categorize and manage parts of your income into Needs, Wants, and Investments. Tsant Finance 
                </h3>
              </div>
            </div>
            <div>

            </div>
        </div>
        <div className='border-[#DCB13C] grid grid-cols-2 bg-[#000042] w-screen h-[35rem]'>
            <div>

            </div>
            <div className='h-full flex items-center justify-center relative z-20'>
              <div className='text-left p-12'>
                <h3 className='leading-snug text-6xl text-[#eaa80c] font-bold text-white'>
                    Create and Reach Financial Goals
                </h3>
                <h3 className='mt-4 text-2xl'>
                  Make and categorize finicial goals and let [Tsant Finance] help you reach them! Tsant Finance will automatically deduct a portion from your budget category for you to put into your goal.
                </h3>
              </div>
          </div>
          
          
        </div>
        <div className='border-[#DCB13C] grid grid-cols-2 bg-[#000035] w-screen h-[35rem]'>
            
          <div className='h-full flex items-center justify-center relative z-20'>
            <div className='text-left p-12'>
              <h3 className='leading-snug text-6xl text-[#eaa80c] font-bold text-white'>
                Automatic Budgeting at Your Finger Tips
              </h3>
              <h3 className='mt-4 text-2xl'>
                Tsant Finances will attempt to best categorize each expidenture into its budget category! Allowing you to track your spending and budget effortlessly!
              </h3>
            </div>
          </div>
          <div>

          </div>
            
        </div>
        <div className='border-[#DCB13C] grid grid-cols-2 bg-[#000042] w-screen h-[35rem]'>
            
          
          <div>

          </div>
          <div className='h-full flex items-center justify-center relative z-20'>
            <div className='text-left p-12'>
              <h3 className='leading-snug text-6xl text-[#eaa80c] font-bold text-white'>
                We Got Your Back
              </h3>
              <h3 className='mt-4 text-2xl'>
                All of data Tsant Finance uses is completely 256-bit encrypted in secure Databases using MongoDB. What we do store is minimized to its fullest extent and only includes what we need. In addition, Tsant Finance's basic tier is completely free and offers all the features you need to manage your money!
              </h3>
            </div>
          </div>
            
        </div>

        <div className='border-[#DCB13C] bg-[#1c1c84] w-screen h-[30rem]'>
            
          <div className='h-full flex items-center justify-center relative z-20'>
            <div className='text-center p-12'>
              <h3 className='leading-snug text-6xl text-[#eaa80c] font-bold text-white'>
                Ready To Start Your Financial Journey?
              </h3>
              <button onClick={()=>
              {
                redirectButton("register")
              }}>
                <h3 className='underline mt-4 text-4xl font-bold bg-[#FFD700] text-[#18206F] p-4 rounded-xl hover:bg-[#d1b202] hover:rounded-lg duration-100 '>
                  Get Started For Free Now!
                </h3>
              
              </button>
              <h3 className='text-2xl mt-4  '>or</h3>
              <Link href={"pricing"}>
                <h3 className='underline mt-4 text-2xl '>
                    View Our Different Pricings Here!
                  </h3>
              </Link>
            </div>
          </div>
          
         
            
        </div>
      </div>
      <Footer/>
      
      
      
    </main>
  )
}
