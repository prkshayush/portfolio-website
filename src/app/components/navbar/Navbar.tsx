'use client'
import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Menu from '../menu/Menu'

const links = [
    {
        id: 1,
        title: "Experience",
        url: '/#experience',
    },
    {
        id: 2,
        title: "Projects",
        url: '/#projects'
    },
    {
        id: 3,
        title: "Contact",
        url: '/#contact'
    },
]


export default function Navbar() {
    return (
        <div className='flex justify-between items-center fixed w-full px-10 text-gray-800  bg-gray-100 z-[100]'>
            <Link href='/' className="">
                <Image src='/logo-dark.png' alt='Logo' width={50} height={50} className="priortiy invert" />
            </Link>
            <Menu />
            <div className="hidden lg:flex lg:items-center lg:gap-5 lg:mx-12">
                {links.map(link => (
                    <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
                ))}
            </div>
        </div>
    )
}
