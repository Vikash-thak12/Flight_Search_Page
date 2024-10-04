import React from 'react'
import { ComboboxDemo } from "../components/ui/Dropdown"
import { DatePickerDemo } from './ui/DatePicker'
import { Button } from './ui/button'
import Image from 'next/image'

const FirstPage = () => {
  return (
    <main className='border border-black px-10 rounded-xl py-5'>
      <h1>Flights</h1>
      <div className='py-5 flex items-center justify-center gap-5'>
        <ComboboxDemo where={"Where From ?"} val={"From"} />
        <div className="cursor-pointer">
          <Image
            src="/arrow.png"
            alt="Left Arrow"
            width={60}
            height={60}
          />
        </div>
        <ComboboxDemo where={"Where To ?"} val={"Destination"} />
        <DatePickerDemo val={"Departure"} />
        <DatePickerDemo val={"Return"} />
      </div>
      <div className='flex justify-end'>
        <Button>Search Flights</Button>
      </div>
    </main>
  )
}

export default FirstPage
