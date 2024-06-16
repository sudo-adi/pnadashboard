import { LayoutDashboardIcon } from 'lucide-react'
import React from 'react'

const DashBoardView = () => {
  return (
    <main className='w-full h-screen flex flex-col gap-4 justify-center items-center p-10'>
      <div className='flex flex-row justify-between w-full gp-8 items-center'>
        <h1 className='font-bold text-6xl'>Dashboard</h1>
        <LayoutDashboardIcon size={64}/>
      </div>
      <hr className='w-full h-px bg-black'/>
      <div className='h-full bg-white w-full p-4 shadow-xl rounded-2xl'>
        hello world
      </div>
    </main>
  )
}

export default DashBoardView