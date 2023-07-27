import Image from 'next/image'

import FinanceDesign from '@/components/financeDesign'
import { ThreePieChart } from '@/components/threeChartDesign'
import { Suspense } from 'react'


export default function Home() {
  return (
    <main className="  items-center   ">
      
      <div className='h-[60vh] z-10 w-full text-center h-3/4 bg-[#2C3259]'>
        <div className='w-full text-center'>
          <h3 className=' font-bold text-6xl'>Start Managing Your Money </h3>
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
      <div className='absolute left-0 top-0 w-screen h-screen'>
        <Suspense>
          <ThreePieChart  className={""}/>
        </Suspense>
      </div>
    </main>
  )
}
