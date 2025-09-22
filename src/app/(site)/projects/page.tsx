"use client";
import Link from "next/link";
import Navbar from "@/components/MainPortfolio/Navbar";
import { motion } from "framer-motion";


import { useState } from "react";


export default function Projects() {
  return (
     <main className="min-h-screen flex items-center justify-center px-6 text-white z-15 relative">
      <motion.section
        className="bg-black/60 p-10 rounded-lg max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="text-4xl sm:text-5xl font-extrabold mb-4 text-center">Projects</div>
        
      </motion.section>
    </main>
  );
}
