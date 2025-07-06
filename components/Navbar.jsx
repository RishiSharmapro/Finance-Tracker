import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

const Navbar = () => {
    return (
        <>
            <div className='flex justify-between items-center bg-gray-800 text-white px-6 py-4 shadow-md'>
                <span>Finance Trakcer</span>
                <div>
                    <button className="text-gray-800  p-1 rounded-3xl hover:bg-gray-300 transition duration-300 ">
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