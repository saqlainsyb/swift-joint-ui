"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { productDetails } from "@/data/productDetails"; // Import product details
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"; // Import relevant ShadCn components
import { cn } from "@/lib/utils"; // Utility class for handling classes

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
      className="flex justify-between items-center py-6 px-8 md:px-30 sticky top-0 z-100 bg-black text-white shadow-lg"
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
        {/* Products Dropdown Menu */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white">
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-[#121212] text-white rounded-lg shadow-lg">
                <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  {productDetails.map((product) => (
                    <ListItem
                      key={product.slug}
                      title={product.title}
                      href={`/product-detail/${product.slug}`}
                    >
                      {product.description.slice(0, 150)}...
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

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
      <div className="md:hidden flex items-center">
        {/* Products Menu for small screens */}
        <div className="text-white">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-[#121212] text-white rounded-lg shadow-lg">
                  <ul className="w-40">
                    {productDetails.map((product) => (
                      <ListItem
                        key={product.slug}
                        title={product.title}
                        href={`/product-detail/${product.slug}`}
                      ></ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      <div className="md:hidden">
      <button
        aria-label="Toggle Menu"
        className="text-white"
        onClick={toggleMenu}
      >
        <Menu size={25} />
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
              <X size={25} />
            </button>
          </div>
          <Link
            href="/application"
            className="text-white hover:text-blue-500 text-2xl"
          >
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

// ListItem component for rendering each product in the dropdown menu
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
