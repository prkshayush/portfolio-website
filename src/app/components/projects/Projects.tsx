import React from "react";
import projects from "../../data/data";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Projects() {
    return (
        <div className="flex flex-col">
            <div className="w-full my-10 p-5 flex items-center flex-col gap-3">
                <p className="font-semibold text-xl lg:text-2xl">Some awesome pieces of code I&apos;ve worked upon!</p>
                <div className="flex text-lg text-gray-900 gap-2">Check my GitHub -
                    <a href="https://github.com/prkshayush" target="_blank" rel="noreferrer"><FaGithub className="text-2xl text-gray-950"/></a>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 p-5 lg:px-36 gap-8'>{projects.map(project => (
                <div key={project.id} className='bg-gray-200 rounded-lg flex flex-col justify-center items-center gap-2 px-8 py-4'>
                    <div>
                        <div className="flex">
                            <h1 className='flex-1 text-2xl font-semibold lg:text-3xl lg:font-bold text-teal-500'>{project.title}</h1>
                            <a href={project.url} target='_blank' rel='noreferrer'>
                                <FaExternalLinkAlt className="text-teal-500" />
                            </a>
                        </div>
                        <p className='text-base text-slate-900'>{project.description}</p>
                    </div>
                    <div>
                        <ul className='flex flex-wrap gap-2'>
                            {project.tags.map((tag, index) => (
                                <li key={index} className='bg-gray-300 rounded-lg py-1 px-2 text-sm text-gray-900'>{tag}</li>
                            ))}
                        </ul>
                    </div>
                </div>))}
            </div>
        </div>
    )
}