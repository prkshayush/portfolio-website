import React from 'react'
import styles from './page.module.css'
import Link from 'next/link';
import Socials from '../socials/Socials';
import Button from '../buttons/Buttons';

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  return (
    <footer className='bg-gray-400 text-light drop-shadow-3xl py-5'>
      <div className="flex flex-col justify-between items-center py-8 gap-8 mx-8 md:flex-row lg:flex-row">
        <p className="font-semibold text-base md:text-lg lg:text-xl">
          <Link href='/'>Copyright<span className={styles.year}> © {year}.</span> Ayush Prakash </Link>
        </p>
        <div className="mx-8">
          <Socials />
        </div>
        <Button text='Admin' url='/admin' />
      </div>
    </footer>
  )
}
