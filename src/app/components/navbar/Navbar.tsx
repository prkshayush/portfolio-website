'use client'
import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Menu from '../menu/Menu'

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
        title: "About",
        url: '/#about'
    },
    {
        id: 4,
        title: "Contact",
        url: '/contact'
    },
]


export default function Navbar() {
    return (
        <div className='flex justify-between items-center py-2 fixed w-full text-slate-300 bg-slate-950 z-[100]'>
            <Link href='/' className="mx-10">
                <Image src='/logo-dark.png' alt='Logo' width={70} height={70} className="priortiy" />
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
