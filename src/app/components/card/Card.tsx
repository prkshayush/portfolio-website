import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
import Button from '../buttons/Buttons'
import Socials from '../socials/Socials'

export default function Card() {

  return (
    <div className='border-none h-96 w-72 flex items-center text-justify justify-center rounded-3xl bg-gradient-to-br from-[#121111] to-[#008080]'>
      <article className="flex items-center flex-col gap-4 cursor-pointer">
        <div className="grid place-items-center rounded-full overflow-hidden relative"><Image src='/image.jpg' alt='profile-img' width={100} height={100} /></div>
        <h2 className="text-xl font-bold">Ayush Prakash</h2>
        <Link href='https://www.threads.net/@prksh_ayush' className='text-[#61A3B4] text-md font-normal hover:text-[#6BC2D7]'>@prksh_ayush</Link>
        <div className={styles.profileButton}>
          <Button url='/' text='Resume' />
        </div>
        <div className='my-2'>
          <Socials />
        </div>
      </article>
    </div>
  )
}
