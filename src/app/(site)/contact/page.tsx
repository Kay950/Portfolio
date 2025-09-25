"use client";
import Link from "next/link";
import Navbar from "@/components/MainPortfolio/Navbar";
import { motion } from "framer-motion";
import Swal from 'sweetalert2'

import { useState } from "react";


export default function ContactPage() {

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c6e3149d-2b7b-4d74-9944-998909fef8b0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully! Talk to you soon!",
        icon: "success"
      });
    }
  };

  return (
     <main className="min-h-screen flex items-center justify-center px-6 text-white z-15 relative">
      <motion.section
        className="bg-black/60 p-10 rounded-lg max-w-2xl w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="text-4xl sm:text-5xl font-extrabold  text-center mb-12 ">CONTACT ME</div>
        {/* <p>Contact ME HERE</p> */}


      <section className="Contact">
        <form onSubmit={onSubmit}>
          <h2 className="text-2xl font-bold mb-10 ml-25 ">Contact me for work opportunities.</h2>
          <div className="input-box">
            <div className="">
              <label className="block mb-2">Name:</label>
              <input type="text" className="field px-4 py-2 w-full ml-4 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-blue-500 transition" 
              placeholder="Enter Your Full Name" name="name" required />
            </div>
          </div>
    <br />
          <div className="input-box">
            <label className='block mb-2'>Email:</label>
            <input type="email" className="field px-4 py-2 w-full ml-4 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-blue-500 transition" 
            placeholder="Enter Your Email" name="email" required />
          </div>
    <br />
          <div className="input-box">
            <label className="block mb-2">Message:</label>
            <textarea name="message"  className="field mess w-full px-4 py-2 ml-4 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-blue-500 transition" 
            placeholder="Enter Your Message" required></textarea>
          </div>
          <button type="submit" className="btn px-30 ml-30 mt-10 py-5 bg-blue-500 rounded-lg hover:bg-blue-600 transition">Send Message</button>
        </form>

      </section>
      </motion.section>
    </main>
  );
}
