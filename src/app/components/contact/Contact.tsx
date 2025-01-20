"use client";

import React from 'react'
import Button from '../buttons/Buttons'
import Card from '../card/Card'
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}


export default function Contact() {

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Construct the mailto link
    const mailtoLink = `mailto:itsnotmymailid140@gmail.com?subject=Message from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(email)}`;

    // Open the mailto link
    window.location.href = mailtoLink;
  };

  return (
    <div className='w-full h-full p-10'>
      <h3 className="font-semibold lg:text-2xl my-12 text-center text-base">Wanna connect? Send a message!!</h3>

      {/* Content for the contact page */}

      <div className="flex flex-col md:flex md:flex-row justify-between items-center  gap-8">
        <div className="flex-1 grid place-items-center">
          <Card />
        </div>
        <form className="flex-1 flex flex-col gap-5 p-8" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="p-5 bg-transparent rounded-lg text-lg font-semibold outline-none border-2 border-slate-800 border-solid text-cyan-800"
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className="p-5 bg-transparent rounded-lg text-lg font-semibold outline-none border-2 border-slate-800 border-solid text-cyan-800"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="p-5 bg-transparent rounded-lg text-lg font-semibold outline-none border-2 border-slate-800 border-solid text-cyan-800"
          ></textarea>
          <div className="grid place-items-center">
            <button
              type="submit"
              className="px-3 py-2 bg-cyan-600 text-white rounded-lg"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
