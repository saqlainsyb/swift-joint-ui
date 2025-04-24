"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Disable scroll when the menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up the effect when the component is unmounted or menu is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
      setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "flex justify-between items-center py-6 px-8 md:px-30 sticky top-0 z-100",
        "bg-black text-white shadow-lg"
      )}
      aria-labelledby="header"
    >
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <Link href="/" aria-label="Homepage">
          <Image
            src="/logo.svg"
            alt="Swift Joint Logo"
            width={60}
            height={60}
          />
        </Link>
      </div>

      {/* Navigation Links (Visible on medium screens and above) */}
      <nav className="hidden md:flex space-x-8 items-center">
        <Link href="#products" className="text-white hover:text-blue-500">
          Products
        </Link>
        <Link href="/application" className="text-white hover:text-blue-500">
          App
        </Link>
        <Link href="#about-us" className="text-white hover:text-blue-500">
          About Us
        </Link>
        <Link href="#contact" className="text-white hover:text-blue-500">
          Contact
        </Link>
      </nav>

      {/* Hamburger Icon (Visible on small screens) */}
      <div className="md:hidden flex items-center" onClick={toggleMenu}>
        <button aria-label="Toggle Menu" className="text-white">
          <Menu size={25} /> {/* Use the Menu icon from Lucide */}
        </button>
      </div>

      {/* Mobile Menu (Visible when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-dvh bg-black text-white flex flex-col items-center justify-center space-y-10 py-12 md:hidden z-50 pb-50">
          <div className="absolute top-8 right-8">
            <button
              className="text-white"
              onClick={toggleMenu}
              aria-label="Close Menu"
            >
              <X size={25} /> {/* Close icon from Lucide */}
            </button>
          </div>
          
            <Link
            href="#products"
            className="text-white hover:text-blue-500 text-2xl"
          >
            Products
          </Link>
          <Link href="/application" className="text-white hover:text-blue-500 text-2xl">
            App
          </Link>
          <Link
            href="#about-us"
            className="text-white hover:text-blue-500 text-2xl"
          >
            About Us
          </Link>
          <Link
            href="#contact"
            className="text-white hover:text-blue-500 text-2xl"
          >
            Contact
          </Link>
          <Link href="/" aria-label="Bag">
            <Image
              src="/bag.svg"
              alt="Swift Joint Logo"
              width={35}
              height={35}
            />
          </Link>
       
        </div>
      )}

      {/* CTA Button (Lock Icon) */}
      <div className="hidden md:block">
        <Link href="/" aria-label="Bag">
          <Image src="/bag.svg" alt="Swift Joint Logo" width={25} height={25} />
        </Link>
      </div>
    </header>
  );
}
