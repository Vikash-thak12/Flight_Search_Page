'use client'
import React, { useState } from 'react'
import { ComboboxDemo } from "../components/ui/Dropdown"
import { DatePickerDemo } from './ui/DatePicker'
import { Button } from './ui/button'
import Image from 'next/image'
import LoadingPage from './Loading'
import { useToast } from '@/hooks/use-toast'
import { useRouter } from 'next/navigation'

type Airport = {
  city: string;
  code: string;
  name: string;
};


const FirstPage = () => {
  const [isloading, setIsloading] = useState(false)
  const [from, setFrom] = useState<Airport | null>(null);
  const [to, setTo] = useState<Airport | null>(null);
  const [departure, setDeparture] = useState<Date | null>(null);
  const [destination, setDestination] = useState<Date | null>(null);
  const { toast } = useToast();
  const router = useRouter()

  const handleSearch = () => {
    if (!from || !to || !departure || !destination) {
      toast({
        title: "Error",
        description: "Please Fill all the details",
      })
      return
    }
    setIsloading(true)
    try {
      console.log({ from, to, departure, destination });
      setTimeout(() => {
        setIsloading(false)
        router.push("/dashboard")
      }, 3000);
      
    } catch (error) {
      console.log("Error while sending the request", error)
    }
  }

  return isloading ?
    <>
      <LoadingPage />
    </> : (
      <main className='border border-black px-10 rounded-xl py-5 mt-5'>
        <h1 className='font-bold'>Flights</h1>
        <div className='py-5 flex items-center justify-center gap-5'>
          <ComboboxDemo where={"Where From ?"} val={"From"} onChange={setFrom} />
          <div className="cursor-pointer">
            <Image
              src="/arrow.png"
              alt="Left Arrow"
              width={60}
              height={60}
            />
          </div>
          <ComboboxDemo where={"Where To ?"} val={"Destination"} onChange={setTo} />
          <DatePickerDemo val={"Departure"} onChange={setDeparture} />
          <DatePickerDemo val={"Return"} onChange={setDestination} />
        </div>
        <div className='flex justify-end' onClick={handleSearch}>
          <Button className='flex items-center justify-center gap-5 p-6'>
            <Image
              src="/searchIcon.png"
              alt='Search'
              width={20}
              height={20}
            />
            Search Flights
          </Button>
        </div>
      </main>
    )
}

export default FirstPage
