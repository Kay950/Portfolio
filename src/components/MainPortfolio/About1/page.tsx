"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";


export default function About() {

    return (
    
       

        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <motion.section

            className="bg-black/60 p-10 rounded-lg max-w-4xl w-full text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            >
                <h1 className="text-4xl font-bold mb-8">About Me</h1>
                </motion.section>


        </main>

    


    );
}