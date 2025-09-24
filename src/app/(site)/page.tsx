// import About from "@/components/About";
// import HomeBlogSection from "@/components/Blog/HomeBlogSection";
// import Brands from "@/components/Brands";
// import CallToAction from "@/components/Home/CallToAction";
// import Features from "@/components/Home/Features";
// import Hero from "@/components/Home/Hero";
// import Portfolio from "@/components/Home/Portfolio";
// import Testimonials from "@/components/Home/Testimonials";
// import Pricing from "@/components/Pricing";
// import Support from "@/components/Support";
// import Team from "@/components/Team";
// import { Metadata } from "next";
// import { integrations, messages } from "../../../integrations.config";
"use client";
import Navbar from "@/components/MainPortfolio/Navbar";
import ContactPage from "./contact/page";

// const siteName = process.env.SITE_NAME;

// export const metadata: Metadata = {
//   title: `Next.js Starter for Business Sites | ${siteName}`,
//   description:
//     "Next.js starter for your next - Startup, Business, Agency or SaaS Website. Comes with refreshing design, integrations and everything you need to kickstart your next web project",
// };

// export default function Home() {
//   return (
//     <>
//       <Hero />
//       <Features />
//       <About />
//       <Team />
//       <Portfolio />
//       <Testimonials />
//       <Brands />
//       <Pricing />
//       {integrations?.isSanityEnabled && <HomeBlogSection />}
//       <Support />
//       <CallToAction />
//     </>
//   );
// }

// import Navbar from "@/components/MainPortfolio/Navbar";
// import About from "@/components/MainPortfolio/About/About";
// import AboutPage from "../about/page";
// import Contact from "@/components/MainPortfolio/Contact/Contact";
// import ContactPage from "../Contact/page";
// import Contact from "@/components/MainPortfolio/Contact/page";
// import About from "@/components/MainPortfolio/About/page";

import Link from "next/link";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-top text-white px-6 z-15 relative">
      <motion.section
        className="bg-black/60 p-15  rounded-lg max-w-4xl w-200 mt-20 mx-auto w-40"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-center">WELCOME TO <a className="text-sky-500">LOCKMANS </a> PORTFOLIO</h1>
        <p className="text-white text-center mb-8">
          Im a Full Stack Developer specializing in creating dynamic and responsive web applications. Experienced in <a className="text-sky-500">HTML, CSS, JavaScprit, Next.js</a> and <a className="text-sky-500">Tailwind CSS</a>.
        </p>
        
      </motion.section>
      
      {/* <About /> */}
      {/* <About /> */}
    </main>
  );
}








