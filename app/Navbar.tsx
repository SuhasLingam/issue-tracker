import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const Navbar = () => {
  const navLinks = [
    { name: "Dashboard", href: "/" },
    { name: "Issues", href: "/Issues" },
  ];

  return (
    <nav className="flex space-x-6 border-b-2 border-gray-200 mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            className="text-zinc-500 hover:text-zinc-900 transition-colors"
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
