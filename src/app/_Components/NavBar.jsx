"use client";
import Link from "next/link";
import { MdAccessTime } from "react-icons/md";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MdMenuOpen } from "react-icons/md";
import { useState } from "react";
import MenuLinks from "./MenuLinks";

const NavBar = () => {
  useGSAP(() => {
    gsap.to("#links", {
      opacity: 1,
      x: 0,
      duration: 0.7,
      delay: 0.3,
      stagger: 0.3,
    });
    gsap.to("#menu", {
      x: 0,
      duration: 0.4,
    });
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "home", href: "/" },
  ];

  return (
    <header className="w-full z-20 sm:w-[95%] mx-auto px-10 md:w-[90%] xl:w-[85%]  h-16 flex items-center justify-between">
      {/* Logo */}
      <div>
        <Link
          style={{
            transform: "translateX(-10px)",
          }}
          id="links"
          href="/"
          className="opacity-0 flex items-center gap-2 text-xl sm:text-2xl font-bold text-neutral-900 uppercase cursor-pointer hover:text-neutral-600"
        >
          <MdAccessTime className="clock-logo duration-500" />
          مواقيت
        </Link>
      </div>
      {/* Logo */}
      {/* Links Menu */}
      <div className="flex  sm:hidden">
        <div onClick={() => setIsOpen((p) => !p)}>
          <MdMenuOpen
            id="menu"
            style={{
              transform: "translateX(80px)",
            }}
            className="cursor-pointer text-3xl hover:text-orange-400 duration-300"
          />
        </div>
        <div>
          <MenuLinks links={links} isOpen={isOpen} />
        </div>
      </div>
      {/* Links Menu */}
      {/* Links big screen */}
      <div className="hidden sm:flex gap-4 items-center px-7">
        {links.map((link) => (
          <Link
            id="links"
            key={link.name}
            href={link.href}
            className="opacity-0 capitalize cursor-pointer hover:text-neutral-600"
          >
            {link.name}
          </Link>
        ))}
      </div>
      {/* Links big screen */}
    </header>
  );
};

export default NavBar;
