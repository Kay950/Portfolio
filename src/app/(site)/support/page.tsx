// import Support from "@/components/Support";
// import { Metadata } from "next";

// const siteName = process.env.SITE_NAME;

// export const metadata: Metadata = {
//   title: `Support Page | ${siteName}`,
//   description: "This is Support page for Go Next.js",
//   // other metadata
// };

// export default function SupportPage() {
//   return (
//     <div className="px-4 pt-10 xl:container">
//       <Support />
//     </div>
//   );
// }


"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center text-white px-6">
      <motion.section
        className="bg-black/60 p-10 rounded-lg text-center max-w-2xl w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          Hi, I’m <span className="text-blue-500">Anthony</span>
          <br /> a Full-Stack Developer
        </h1>

        <p className="text-lg text-zinc-400 mt-4">
          I specialize in building high-performance backend systems and modern web apps using
          <span className="text-white font-medium"> Java</span>, 
          <span className="text-white font-medium"> Python</span>, 
          <span className="text-white font-medium"> Next.js</span>, and 
          <span className="text-white font-medium"> Tailwind CSS</span>.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <a
            href="/Resume-Anthony-Rosado.docx"
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded text-white font-semibold"
            download
          >
            Download Resume
          </a>
          <a
            href="/projects"
            className="bg-zinc-800 hover:bg-zinc-700 transition px-6 py-3 rounded border border-zinc-600 text-white font-semibold"
          >
            View Projects
          </a>
        </div>
      </motion.section>
    </main>
  );
}