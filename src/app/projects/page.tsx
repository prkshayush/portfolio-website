import React from "react";
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "Loki's-Fleet",
        description: "Ever wondered what if Loki from Marvel Cinematic universe owned a vehicle rental service? Well, here's a fictional website for the same.",
        url: "https://loki-fleet.vercel.app/",
        img: "/loki.webp"
    },
    {
        id: 2,
        title: "Book Manager",
        description: "Backend API for a book manager application, built using Golang, Gorilla/Mux, MongoDB & Mongoose. It allows users to perform CRUD operations on books.",
        url: "https://github.com/prkshayush/go-projects/tree/main/go-mongo",
        img: "/go1.jpg"
    },
    {
        id: 3,
        title: "URL Shortener",
        description: "URL shortener service built using Golang, Gin, MongoDB & Mongoose. It allows users to shorten long URLs into short ones.",
        url: "https://github.com/prkshayush/go-urlshortener",
        img: "/go2.jpg"
    },
    {
        id: 4,
        title: "RemindRyt",
        description: "Building this for the Google gemini AI hackathon, using gemini API, Python, Django. Currently in development.",
        url: "/",
        img: "/",
    },
]

export default function Projects() {
    return (
        <div id="main" className="flex flex-col mt-16">
            <div className="w-full my-10 p-5 flex items-center flex-col gap-3">
                <h1 className='uppercase text-2xl md:text-3xl lg:text-5xl font-semibold text-teal-200'>Projects</h1>
                <p className="text-lg font-medium text-teal-500 my-2 sm:text-base">Some awesome pieces of code & desgin, turned into reality</p>
            </div>
            <div>
                {
                    projects.map(project => (
                        <div key={project.id} className='flex flex-col lg:flex lg:flex-row gap-5 my-5 p-16'>
                            <div className='flex-1' >
                                <Image src={project.img} alt={project.title} width={400} height={200} className='rounded-xl ' />
                            </div>
                            <div className='flex-1 flex flex-col justify-center items-center gap-10 p-5'>
                                <div>
                                    <h1 className='text-2xl font-semibold lg:text-4xl lg:font-bold text-teal-500'>{project.title}</h1>
                                    <p className='text-base lg:text-xl font-normal lg:font-semibold text-slate-500'>{project.description}</p>
                                </div>
                                <div>
                                    <a href={project.url} target='_blank' rel='noreferrer'>
                                        <button className='p-2 bg-teal-500 text-slate-100 rounded-xl hover:bg-teal-600 ease transition-all'>View Project</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}