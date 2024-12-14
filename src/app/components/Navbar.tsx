import { useState } from "react";
import Link from "next/link";
import { List } from "@phosphor-icons/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/more-about-me", label: "More About Me" },
  ];

  return (
    <div className="wrapper max-w-screen-lg mx-auto">
      <nav className="bg-white border-b border-gray-200 relative">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-900"
          >
            <List size={24} />
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } absolute top-full right-0 w-auto md:static md:block md:w-auto md:order-1 transition-all duration-300`}
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:mt-0 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:border-0 md:bg-white">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} passHref>
                    <span
                      className="block py-2 px-3 text-gray-900 md:hover:text-blue-700 hover:font-bold whitespace-nowrap"
                      aria-current="page"
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
