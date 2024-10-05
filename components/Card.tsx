import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import FlightDetailCard from './FlightCard'


const Card = () => {
    return (
        <>
            <Sheet>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Flight Details</SheetTitle>
                        <div className="w-full h-1 bg-gray-600"></div>
                        <SheetDescription className="mt-10">
                            Here are your flight details. Please review them carefully.
                        </SheetDescription>
                    </SheetHeader>

                    <div className="mt-6 space-y-10">
                        {/* Flight 1 */}
                        <FlightDetailCard
                            departure="Sat 28 Sept • 2:15"
                            arrival="DXB • Dubai International Airport"
                            flight="Saudi Arabian Airlines • SV553"
                            time="Economy • A330 | Flight time 3h 45m" layover={''}
                        />
                        {/* Flight 2 */}
                        <FlightDetailCard
                            departure="Sat 28 Sept • 2:15"
                            arrival="RUH • King Khalid International Airport"
                            flight="Saudi Arabian Airlines • SV553"
                            time="Economy • A330 | Flight time 3h 45m" layover={''} />

                        {/* Layover */}
                        {/* <FlightDetailCard layover="2h 25m" departure={''} arrival={''} flight={''} time={''} /> */}

                        {/* Flight 3 */}
                        <FlightDetailCard
                            departure="Sat 28 Sept • 2:15"
                            arrival="DXB • Dubai International Airport"
                            flight="Saudi Arabian Airlines • SV553"
                            time="Economy • A330 | Flight time 3h 45m" layover={''}
                        />

                        {/* Flight 4 */}
                        <FlightDetailCard
                            departure="Sat 28 Sept • 2:15"
                            arrival="CDG • Paris - Charles de Gaulle Airport"
                            flight="Saudi Arabian Airlines • SV553"
                            time="Economy • A330 | Flight time 3h 45m" layover={''} />
                    </div>
                </SheetContent>
                <SheetTrigger className='w-full'>
                    <div className='w-full border rounded-md mt-3 cursor-pointer'>
                        <div className='grid grid-cols-5 items-center'>
                            <div className='col-span-4 px-5 mt-5 flex flex-col gap-3'>
                                <div className='flex gap-5 items-center justify-between'>
                                    <div className='w-[60%]'>
                                        <div className='flex items-center justify-start gap-3'>
                                            {/* <span>Thu 25 Jun</span> */}
                                            <div>
                                                <Image
                                                    src={"/logo.png"}
                                                    alt='Logo'
                                                    width={50}
                                                    height={50}
                                                />
                                            </div>
                                            <div className='flex flex-col'>
                                                <span>Emirates . At 4334</span>
                                                <span>9:45 AM - 11:45 AM</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-center justify-center'>
                                        <span>DEL - MUM</span>
                                        <span>2h 10min</span>
                                    </div>
                                    <span>Non Stop</span>
                                </div>
                                <div className='flex gap-5 items-center justify-between'>
                                    <div className='w-[60%]'>
                                        <div className='flex items-center justify-start gap-3'>
                                            {/* <span>Thu 25 Jun</span> */}
                                            <div>
                                                <Image
                                                    src={"/logo.png"}
                                                    alt='Logo'
                                                    width={50}
                                                    height={50}
                                                />
                                            </div>
                                            <div className='flex flex-col'>
                                                <span>Emirates . At 4334</span>
                                                <span>9:45 AM - 11:45 AM</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-center justify-center'>
                                        <span>DEL - MUM</span>
                                        <span>2h 10min</span>
                                    </div>
                                    <span>Non Stop</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3 mx-5 '>
                                <div className='flex flex-col'>
                                    <span>From</span>
                                    <span>AED 1,456.90</span>
                                </div>
                                <Button asChild>Select</Button>
                            </div>
                        </div>
                    </div>
                </SheetTrigger>

            </Sheet>
        </>
    )
}

export default Card
