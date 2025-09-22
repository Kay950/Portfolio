"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];


export default function Navbar() {
  const pathname = usePathname();
  return (

    <nav
      className="w-full z-10 text-center bg-black/80 sticky top-0 shadow-sm"
    >
      <Link href="/" className="text-xl font-bold text-blue-500">  </Link>

      <div className="space-x-8 p-4 items-center gap-6 text-sm sm:text-base object-center bg-black">
        {navItems.map((item) => (
          <Link 
          key={item.href} 
          href={item.href}
          className={`hover:text-blue-400 transition ${
            pathname === item.href ? "text-blue-500 font-semibold" : "text-white"
              }`}
          >
            {item.label}
          </Link>

              



        ))}
      </div>


      {/* <div className="text-center p-2 bg-gray-900 text-white">
        <Link href="/about" className=>About</Link>
        </div> */}
    </nav>

        

  );
}

    

// export default function CustomNavbar() {
//   const pathname = usePathname();
//   const [menuOpen, setMenuOpen] = useState(false); // Toggle for mobile menu

//   return (
//     <nav className="w-full bg-black/80 backdrop-blur sticky top-0 z-50 shadow-sm">
//       {/* Top bar layout */}
//       <div className="w-full px-6 py-3 flex justify-between items-center text-white">
//         {/* Brand */}
//         <Link href="/" className="text-xl font-bold text-blue-500">
//           <img
//           src="/images/logo/logo.png"
//           alt="Logo"
//           className="h-20 w-auto object-contain rounded-lg border border-white/30 bg-white/10 p-1 shadow-md"
//           />
//         </Link>

//         {/* Desktop menu: nav links + icons */}
//         <div className="hidden sm:flex items-center gap-6 text-sm sm:text-base">
//           {/* Nav links */}
//           {navItems.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className={`hover:text-blue-400 transition ${
//                 pathname === item.href ? "text-blue-500 font-semibold" : "text-white"
//               }`}
//             >
//               {item.label}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }
