import { History, Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='w-full bg-slate-200 flex justify-between px-5 py-2'>
        <div className='flex gap-3 items-center'>
          <History className='w-7' />
          <div className='w-full relative'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-2'>
            <Search className='w-6 opacity-70' />
            </div>
            <input type="text" className='focus:outline-none h-10 rounded-md pl-10' placeholder='Search branch name...' />
          </div>
        </div>
        <div className='flex'>
            <Image height={1} width={40} className='rounded-full h-[40px]' src={'/Image1.png'} alt='Error not found' />
        </div>
    </div>
  )
}

export default Header