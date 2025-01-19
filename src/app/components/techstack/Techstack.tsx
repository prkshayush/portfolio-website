import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'

export default function TechStack() {
    const images = [
        {
            id: 1,
            name: "JS",
            url: '/js.svg',
        },
        {
            id: 2,
            name: "Python",
            url: '/python.svg',
        },
        {
            id: 3,
            name: "Go",
            url: '/golang.svg',
        },
        {
            id: 4,
            name: "Java",
            url: '/java.svg',
        },
        {
            id: 5,
            name: "NextJS",
            url: '/nextjs.png',
        },
        {
            id: 6,
            name: "Docker",
            url: '/docker.svg',
        },
        {
            id: 7,
            name: "AWS",
            url: "/dynamo.svg"
        },
    ]
  return (
    <div className="flex items-center justify-center lg:gap-5 gap-2">
        <p>Tech stack</p>
        {images.map(image => (
        <Image key={image.id} src={image.url} alt={image.name} width={45} height={40} className={styles.links} />
        ))}
    </div>
  )
}
