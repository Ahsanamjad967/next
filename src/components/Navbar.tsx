import { navlinks } from '@/constants/constants'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    
      <div className='h-20 bg-white flex shadow-2xl'>
        <div className='flex items-center justify-between w-full px-4'>
          <div className='flex items-center'>
            <div className='text-lg font-semibold'>Logo</div>
          </div>
          <div className='flex gap-2 items-center'>
            {navlinks.map((link,idx) => (<Link key={idx } href={link.href} className='text-sm font-semibold '>{link.name}</Link>))}
          </div>
        </div>
      </div >

      
  )
}

export default Navbar
