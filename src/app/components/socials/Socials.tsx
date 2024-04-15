import Link from 'next/link'
import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Socials() {
  return (
    <div className='flex items-center gap-4 cursor-pointer'>
      <Link href='https://github.com/prkshayush' className='grid place-items-center text-2xl ease-in-out transition-all hover:scale-125 hover:drop-shadow-xl text-slate-200/80 hover:text-slate-100'>< FaGithub /></Link>
      <Link href='https://www.linkedin.com/in/ayush-prakash-8a3320224/' className='grid place-items-center text-2xl ease-in-out transition-all hover:scale-125  hover:drop-shadow-xl text-slate-200/80 hover:text-cyan-500'>< FaLinkedin /></Link>
      <Link href='https://twitter.com/maybenot_ap' className='grid place-items-center text-2xl ease-in-out transition-all hover:scale-125 hover:drop-shadow-xl text-slate-200/80 hover:text-sky-500'>< FaTwitter /></Link>
      <Link href='https://www.instagram.com/prksh_ayush/' className='grid place-items-center text-2xl text-slate-200/80 ease-in-out transition-all hover:scale-125 hover:drop-shadow-xl hover:text-pink-600'>< FaInstagram /></Link>
    </div>
  )
}
