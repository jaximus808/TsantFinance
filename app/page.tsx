import Image from 'next/image'

import FinanceDesign from '@/components/financeDesign'
import { ThreePieChart } from '@/components/threeChartDesign'


export default function Home() {
  return (
    <main className="p-24 flex flex-col items-center h-screen justify-between ">
      <div className='flex justify-between flex-col z-10 w-full text-center h-screen'>
        <div className=" z-10 w-full  text-sm lg:flex">
          <div className='  w-full text-center'>
            <h3 className=' font-bold text-6xl'>Start Managing Your Money </h3>
          </div>
        </div>
        <div className='h-4/5'>
        <ThreePieChart height={"60%"} className={"w-full"}/>

        </div>
      </div>
      <div className=' w-2/3 grid grid-cols-2'>
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
