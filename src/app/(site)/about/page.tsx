"use client";

import { useState } from "react";

import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";


export default function AboutPage() {

  return (

    


    <main className="min-h-screen flex items-center justify-center px-6 text-white z-15 relative">
      <motion.section
        className="bg-black/60 p-10 rounded-lg max-w-2xl w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-center text-sky-500">ABOUT ME</h1>
        <p className="text-zinc-200 text-center mb-8">
            <a className="text-sky-500">Brandon Lockman</a>, a passionate <a className="text-sky-500">Full Stack Developer</a> with an additional background in <a className="text-sky-500">Graphic Design</a>. 
        </p>
        <br />
        <p className="text-zinc-200 text-center mb-8">
            With a strong foundation in both front-end and back-end technologies, I specialize in creating dynamic and responsive web applications.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-sky-500">Skills and Certifications</h2>
        <p className="text-zinc-200 text-center mb-8">
        </p>

       <div className="grid grid-cols-2 gap-30 text-lg/8 leading-10">
      <div>
        <p className="font-bold text-sky-500 text-2xl">Languages</p><p>JavaScript</p> <p>TypeScript</p> <p>HTML</p> <p>CSS</p><br /> 
        <p className="font-bold text-sky-500 text-2xl">Systems and Platforms</p> <p>MySQL</p> <p>VS Code</p> <p>GitHub</p>
      </div>
      <div>
        <p className="font-bold text-sky-500 text-2xl">Frameworks</p><p>Tailwind CSS</p> <p>Next.js</p> <p>React.js</p> <p>Node.js</p><br />
        <p className="font-bold text-sky-500 text-2xl"> Certifications and Additional Skills</p> <p>Graphic Design</p> <p>Adobe Suite</p> <p>UX/UI</p> <p>Top Secret Clearance</p>
      </div>
    </div>
    <br />
      <div className="text-left mt-10 font-bold text-sky-500 text-2xl">Education
        <p className="text-zinc-200 text-lg/8 leading-10 mt-4">U.S. Army</p>
          <p className="text-slate-400 text-lg/8 leading-2">Intelligence Analyst (35F) </p>

        <p className="text-zinc-200 text-lg/8 leading-10 mt-4">University of South Carolina</p>
          <p className="text-slate-400 text-lg/8 leading-2">Bachelor of Arts in Graphic Design</p>
      </div>

      </motion.section>
    </main> 
    
  );

}







{/* // "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence, useInView } from "framer-motion";


// export default function About() { */}

{/* //     return ( */}
        

{/* //         <main className="flex min-h-screen flex-col items-center justify-between p-24">
//             <motion.section
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 > */}

{/* //                 <h1 className="text-4xl font-bold mb-8">About Me</h1>
//                 </motion.section>


//         </main> */}





