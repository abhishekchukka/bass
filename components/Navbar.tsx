"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Function to handle mobile menu toggle with animation
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // useEffect to add scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 text-gray-800 shadow-lg"
          : "bg-transparent text-white",
        "backdrop-blur-xs"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Image
                src="/logo1.png"
                alt="Logo"
                width={80}
                height={70}
                className="mr-3"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "Home", href: "#" },
              { name: "About", href: "#" },
              { name: "Popular Services", href: "#" },
              { name: "Aims and Objectives", href: "#" },
              { name: "Gallery", href: "#" },
              { name: "Contact", href: "#" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-3 py-2 font-medium transition-all duration-300 rounded-md tracking-wide relative group",
                  "hover:text-green-500",
                  scrolled ? "text-gray-800" : "text-white",
                  "focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50",
                  "text-sm uppercase font-semibold"
                )}
              >
                {item.name}
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-green-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            ))}
            <Link
              href="#"
              className={cn(
                "bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-bold transition-all duration-300",
                "hover:shadow-lg transform hover:translate-y-[-2px]",
                "focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50",
                "text-sm uppercase tracking-wider"
              )}
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className={cn(
                "inline-flex items-center justify-center p-2 rounded-md",
                "focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50",
                "transition-colors duration-300",
                scrolled
                  ? "text-gray-700 hover:text-green-600"
                  : "text-white hover:text-green-400"
              )}
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: mobileMenuOpen ? "auto" : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-white shadow-lg rounded-b-lg"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {[
            { name: "Home", href: "#" },
            { name: "About", href: "#" },
            { name: "Popular Services", href: "#" },
            { name: "Aims and Objectives", href: "#" },
            { name: "Gallery", href: "#" },
            { name: "Contact", href: "#" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-4 py-3 rounded-md text-sm font-medium text-gray-800 hover:text-green-600 hover:bg-gray-50 transition-colors duration-300 tracking-wide uppercase"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="#"
            className="block px-4 py-3 my-2 rounded-lg text-sm font-bold bg-green-600 text-white text-center hover:bg-green-700 transition-colors uppercase tracking-wider"
          >
            Donate Now
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}
