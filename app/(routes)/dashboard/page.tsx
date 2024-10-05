'use client'
import Cards from '@/components/Cards'
import { UpperBar } from '@/components/Loading'
import React from 'react'

const DashboardPage = () => {
  return (
    <div className='h-screen overflow-hidden'>
      <UpperBar />
      {/* <SheetSide /> */}
      <div className='w-full h-1 bg-gray-600'></div>
      <div className='px-32 py-10 max-w-[80%] mx-auto h-[85%] overflow-x-auto'>
        <div>
          <h1>Showing 300 of 457 Results</h1>
          <div className='mt-5'>
            <Cards />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
