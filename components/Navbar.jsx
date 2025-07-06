import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import Link from 'next/link'
import { DollarSign } from "lucide-react";

const Navbar = () => {
    return (
        <>
            <div className='flex justify-between items-center bg-gray-800 text-white px-6 py-4 shadow-md'>
                <div className='flex items-center space-x-2'>
                    <DollarSign className="h-6 w-6" />
                    <Link href={"./"}>Finance Trakcer</Link>
                </div>
                <div>
                    <button className="text-gray-800 cursor-pointer p-1 rounded-3xl hover:bg-gray-300 transition duration-300 ">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>ER</AvatarFallback>
                        </Avatar>
                    </button>
                </div>
            </div>

        </>
    )
}

export default Navbar   