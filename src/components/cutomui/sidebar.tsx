

import React from 'react'
import CustomBtn from './custombtn'
import { BellIcon, BellPlusIcon, FileCogIcon, FilePieChartIcon, FilesIcon, LayoutDashboardIcon, LogOutIcon, PieChartIcon, SettingsIcon, UserCogIcon, UserIcon, UsersIcon } from 'lucide-react'

const SideBar = () => {
  return (
    <main className='xl:w-1/6 px-4 h-screen flex flex-col justify-start items-center bg-[#0F172A]'>

      {/* User profile Start Here*/}
      <div className='flex flex-col items-center'>

        <div className="xl:h-16 xl:w-16 h-8 w-8 rounded-full bg-white mt-8">

        </div>

        <text className='text-white xl:text-sm text-xs mt-4 flex justify-center items-center flex-col text-center'>
          User Name
        </text>

      </div>
      {/* User profile ends here */}

      {/* seperator starts here  */}
      <hr className="h-px my-6 bg-slate-100 w-[90%] border-1" />
      {/* sperator ends here */}


      {/* nav options starts here  */}

      {/* for the devices having width greater than xl */}

      <div className='hidden grow xl:flex xl:flex-col'>
        <div className='grow xl:flex xl:flex-col xl:gap-4 px-8'>
          <CustomBtn text="Dashboard" icon={<LayoutDashboardIcon className='h-4 w-4' />} />
          <CustomBtn text="Manage Assessment " icon={<FileCogIcon className='h-4 w-4' />} />
          <CustomBtn text="My Assessments" icon={<FilesIcon className='h-4 w-4' />} />
          <CustomBtn text="Manage Reports " icon={<PieChartIcon className='h-4 w-4' />} />
          <CustomBtn text="My Reports" icon={<FilePieChartIcon className='h-4 w-4' />} />
          <CustomBtn text="Manage Users " icon={<UserCogIcon className='h-4 w-4' />} />
          <CustomBtn text="My Account " icon={<UserIcon className='h-4 w-4' />} />
          <CustomBtn text="Manage Groups " icon={<UsersIcon className='h-4 w-4' />} />
          <CustomBtn text="Manage Notifications" icon={<BellPlusIcon className='h-4 w-4' />} />
          <CustomBtn text="Notifications" icon={<BellIcon className='h-4 w-4' />} />
          <CustomBtn text="Settings" icon={<SettingsIcon className='h-4 w-4' />} />
        </div>
        <div className='px-8 py-4 flex items-center justify-center flex-col gap-2'>
          <hr className='bg-white w-[95%]' />
          <CustomBtn text="Log Out" icon={<LogOutIcon className='h-4 w-4' />} />
        </div>
      </div>



      {/* for the devices having width greater than xl */}


      {/* for the devices having width less than xl */}

      <div className='xl:hidden grow flex flex-col'>
        <div className='grow flex flex-col gap-4'>
          <CustomBtn icon={<LayoutDashboardIcon />} />
          <CustomBtn icon={<FileCogIcon />} />
          <CustomBtn icon={<FilesIcon />} />
          <CustomBtn icon={<PieChartIcon />} />
          <CustomBtn icon={<FilePieChartIcon />} />
          <CustomBtn icon={<UserCogIcon />} />
          <CustomBtn icon={<UserIcon />} />
          <CustomBtn icon={<UsersIcon />} />
          <CustomBtn icon={<BellPlusIcon />} />
          <CustomBtn icon={<BellIcon />} />
          <CustomBtn icon={<SettingsIcon />} />
        </div>
        <div className='py-4 flex-col items-center justify-center gap-2 flex'>
          <hr className='bg-slate-100 w-[95%]' />
          <CustomBtn icon={<LogOutIcon />} />
        </div>
      </div>

      {/* for the devices having width less than xl */}

      {/* nav options ends here  */}

    </main>
  )
}

export default SideBar