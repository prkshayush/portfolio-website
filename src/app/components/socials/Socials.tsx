import Link from 'next/link'
import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Socials() {
  return (
    <div className='flex items-center gap-4 cursor-pointer'>
      <Link href='https://github.com/prkshayush' className='grid place-items-center text-2xl ease-in-out text-gray-950 transition-all hover:scale-125 hover:drop-shadow-xl hover:text-slate-700'>< FaGithub /></Link>
      <Link href='https://www.linkedin.com/in/prkshayush/' className='grid place-items-center text-2xl text-gray-950 ease-in-out transition-all hover:scale-125  hover:drop-shadow-xl hover:text-cyan-600'>< FaLinkedin /></Link>
      <Link href='https://twitter.com/maybenot_ap' className='grid place-items-center text-2xl ease-in-out text-gray-950 transition-all hover:scale-125 hover:drop-shadow-xl hover:text-sky-500'>< FaTwitter /></Link>
      <Link href='https://www.instagram.com/prksh_ayush/' className='grid place-items-center text-2xl text-gray-950 ease-in-out transition-all hover:scale-125 hover:drop-shadow-xl hover:text-pink-600/80'>< FaInstagram /></Link>
    </div>
  )
}
