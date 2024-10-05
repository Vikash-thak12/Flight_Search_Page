import Image from 'next/image'
import React from 'react';
import { useEffect, useState } from 'react';

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import FirstPage from './FirstPage';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';


const LoadingPage = () => {

    const [steps, setSteps] = useState([false, false, false]);

    useEffect(() => {
        const timers = [
            setTimeout(() => setSteps([true, false, false]), 500), // Step 1 after 2s
            setTimeout(() => setSteps([true, true, false]), 1000), // Step 2 after 4s
            setTimeout(() => setSteps([true, true, true]), 3000),  // Step 3 after 6s
        ];

        return () => timers.forEach(timer => clearTimeout(timer));
    }, []);

    return (
        <>
            <div className='min-h-screen w-full'>
                <UpperBar />
                <LoadingBar />
                <div className="flex items-center justify-center bg-gray-50 mt-48">
                    <div className="p-8 bg-white rounded-xl flex flex-col items-center space-y-4 border border-black">
                        <Image
                            src="/loading.png"
                            alt="Loading icon"
                            width={100}
                            height={100}
                        />
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-2">
                                {steps[0] ? (
                                    <span>
                                        <Image src={"/tick.svg"} alt='Tick' width={30} height={30} />
                                    </span>
                                ) : (
                                    <div className="h-4 w-4 border-2 border-t-transparent border-gray-900 rounded-full animate-spin"></div>
                                )}
                                <span className="text-gray-700 font-medium">Searching 400+ flights</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                {steps[1] ? (
                                    <span>
                                        <Image src={"/tick.svg"} alt='Tick' width={30} height={30} />
                                    </span>
                                ) : (
                                    <div className="h-4 w-4 border-2 border-t-transparent border-gray-900 rounded-full animate-spin"></div>
                                )}
                                <span className="text-gray-700 font-medium">Attaching company rules</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                {steps[2] ? (
                                    <span>
                                        <Image src={"/tick.svg"} alt='Tick' width={30} height={30} />
                                    </span>
                                ) : (
                                    <div className="h-4 w-4 border-2 border-t-transparent border-gray-900 rounded-full animate-spin"></div>
                                )}
                                <span className="text-gray-700 font-medium">Serving best results</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoadingPage;


export const UpperBar = () => {

    const router = useRouter()

    const handleCancle = () => {
        router.push("/")
    }
    return (
        <Sheet>
            <div className="mt-5 pb-5">
                <div className='flex items-center justify-around px-48'>
                    <div className='flex items-center justify-between px-5 py-2 w-[60%] border border-black rounded-full'>
                        {/* First Section: Departure */}
                        <div className="flex items-center space-x-2 border">
                            <span className="font-bold">CDG</span>
                            <span className="text-sm text-gray-500 line-clamp-1">Paris Charles De Gaulle</span>
                        </div>

                        {/* Divider */}
                        <div className="mx-4 border-l border-gray-300 h-6"></div>

                        {/* Second Section: Destination */}
                        <div className="flex items-center space-x-2 border">
                            <span className="font-bold">DXB</span>
                            <span className="text-sm text-gray-500 line-clamp-1">Dubai International Airport Chennai</span>
                        </div>

                        {/* Divider */}
                        <div className="mx-4 border-l border-gray-300 h-6"></div>

                        {/* Date Section */}
                        <div className="flex items-center space-x-2 border">
                            <span className="text-sm font-semibold line-clamp-1">Jun 25 - Jul 2</span>
                        </div>

                        <div className="mx-4 border-l border-gray-300 h-6"></div>
                        {/* Search Icon */}
                        <SheetTrigger asChild>
                            <Button className="bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-gray-300" variant="outline">🔍</Button>
                        </SheetTrigger>
                    </div>
                    <button onClick={handleCancle} className='flex items-center justify-center border p-3 rounded-full cursor-pointer'>
                        ❌
                    </button>
                    <SheetContent side="top">
                        <FirstPage />
                    </SheetContent>
                </div>
            </div>
        </Sheet>

    )
}

export const LoadingBar = () => {
    return (
        <div className="fixed top-24 left-0 w-full h-1 bg-gray-200 overflow-hidden z-50">
            <div
                className="absolute h-full bg-blue-500"
                style={{
                    animation: 'slideLoading 2s infinite ease-in-out',
                }}
            ></div>
        </div>
    );
};

