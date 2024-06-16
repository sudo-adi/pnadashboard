import SideBar from '@/components/cutomui/sidebar'
import DashboardView from '@/views/DashBoardView'
import React from 'react'

const DashBoard = () => {
  return (
    <main className='flex overflow-hidden flex-row bg-[#F8FAFC] text-black items-center justify-center'>

        {/* sidebar starts here */}
        <SideBar/>
        {/* sidebar ends here */}

        {/* dashboard view starts here */}
        <DashboardView/>
        {/* dashboard ends here */}

    </main>
  )
}

export default DashBoard