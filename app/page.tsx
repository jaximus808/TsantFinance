import Image from 'next/image'

import FinanceDesign from '@/components/financeDesign'
import { ThreePieChart } from '@/components/threeChartDesign'
import { Suspense } from 'react'


export default function Home() {
  return (
    <main className="  items-center   ">
      
      <div className='z-10 w-full text-center  bg-[#2C3259]'>
        <div className='w-full text-center'>
          <h3 className='bg-[#0A0E28]  p-6 font-bold text-6xl'>Start Managing Your Money </h3>
        </div>
        <div className='border-[#DCB13C]  border-t-2 border-b-2 w-screen h-[60vh]'>
          <Suspense>
            <ThreePieChart  className={""}/>
          </Suspense>
        </div>
      </div>
      <div className='text-center w-full grid grid-cols-2'>
        <button>
          Helo
        </button>
        <button>
          Helo
        </button>
      </div>
      
    </main>
  )
}
