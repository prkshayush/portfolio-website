import React from 'react'
import Button from '../components/buttons/Buttons'
import Card from '../components/card/Card'

export default function Contact() {
  return (
    <div className='w-full h-full p-10'>
      <h1 className="text-2xl lg:text-5xl font-bold my-5 text-center uppercase text-teal-300">Contact</h1>
      <h3 className="text-center lg:text-2xl mb-16 text-base">Wanna connect? Send a message!!</h3>
      
      {/* Content for the contact page */}

      <div className="flex flex-col md:flex md:flex-row justify-between items-center  gap-8">
        <div className="flex-1 grid place-items-center">
          <Card />
        </div>
        <form className='flex-1 flex flex-col gap-5'>
          <input type="text" placeholder='Name' className='p-5 bg-transparent rounded-lg text-lg font-semibold outline-none border-2 border-slate-600 border-solid text-cyan-200' />
          <input type="email" placeholder='E-mail' className='p-5 bg-transparent rounded-lg text-lg font-semibold outline-none border-2 border-slate-600 border-solid text-cyan-200' />
          <textarea name="message" placeholder='Message' className='p-5 bg-transparent rounded-lg text-lg font-semibold outline-none border-2 border-slate-600 border-solid text-cyan-200'></textarea>
          <div className='grid place-items-center'><Button text='Send' url='/' /></div>
        </form>
      </div>
    </div>
  )
}
