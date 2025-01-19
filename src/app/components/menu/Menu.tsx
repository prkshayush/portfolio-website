"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Socials from '../socials/Socials'


export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  const links = [
    {
        id: 1,
        title: "Home",
        url: '/',
    },
    {
        id: 2,
        title: "Projects",
        url: '/projects'
    },
    {
        id: 3,
        title: "Contact",
        url: '/contact'
    },
  ]

  return (
    <div className='relative'>
      <button className="flex flex-col justify-center item-center m-9 lg:hidden " onClick={handleClick}>
        <span className={`bg-teal-400 transition-all duration-300 ease-in-out block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : ' -translate-y-1'}`}></span>
        <span className={`bg-teal-400 transition-all duration-300 ease-in-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-teal-400 transition-all duration-300 ease-in-out block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : ' translate-y-1'}`}></span>
      </button>

      {/* responsive navbar for mobile menu */}

      {
        isOpen ?
          <div className="min-w-[40vw] max-h-[60vh] flex flex-col justify-between items-center gap-5 z-30 my-auto fixed left-1/2 rounded-2xl -translate-x-1/2 bg-cyan-600/90 p-24 border-2 border-cyan-700">
            {links.map(link => (
              <Link key={link.id} href={link.url} className='text-2xl font-semibold' onClick={handleClick}>{link.title}</Link>
            ))}
            <div className="mt-5">
              <Socials />
            </div>
          </div>
          : null
      }
    </div>
  )
}
