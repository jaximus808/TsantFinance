import Image from 'next/image'

import FinanceDesign from '@/components/financeDesign'

export default function Home() {
  return (
    <main className="flex flex-col items-center h-screen justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <div className='w-full text-center'>
          <h3 className='font-bold text-7xl'>Tsant Finance </h3>
        </div>
      </div>
      <FinanceDesign/>
      <div>

        write a sign up join now thingy
      </div>
    </main>
  )
}
