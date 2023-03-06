import React, { useState } from 'react'

export default function Navbar() {
    const [dropDown, setDropDown] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const handleDropDown = () => {
        if (dropDown === false) {
            setDropDown(true)
        }
        else {
            setDropDown(false)
        }
    }

    window.onscroll = () => {
        setIsScrolled(window.scrollY <= 200 ? false : true)
        return () => (window.onscroll = null)
    }

    return (
        // main navbar div
        <div className={`ease-in-out text-lg duration-500 flex h-20 justify-center fixed w-full ${isScrolled ? "bg-black" : "bg-gradient-to-t from-transparent to-black/50"} z-50`}>

            {/* left div for logo and options */}
            <div className="flex justify-around w-2/3 items-center">
                <div className="text-white flex w-2/3 justify-evenly items-center ">
                    <span className='cursor-pointer'>Home</span>
                    <span className='cursor-pointer'>Home</span>
                    <span className='cursor-pointer'>Home</span>
                    <span className='cursor-pointer'>Home</span>
                </div>
            </div>
        </div>
    )
}
