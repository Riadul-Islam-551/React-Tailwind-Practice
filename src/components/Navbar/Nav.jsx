import React, { useState } from "react";
import Links from "./Links";
import { Menu } from "lucide-react";
import { CircleX } from "lucide-react";

const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Projects",
    path: "/projects",
  },
  {
    id: 5,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 6,
    name: "Contact",
    path: "/contact",
  },
];

const Nav = () => {
  const [open, setOpen] = useState(false);

  const links = navLinks.map((links) => (
    <Links key={links.id} links={links}></Links>
  ));

  return (
    <div className="shadow-2xs">
      <nav className="  flex justify-between items-center max-w-[1200px] mx-auto px-4 py-2 md:py-0">
        {/* ............nav icons............  */}
        <div className="flex items-center gap-5 cursor-pointer">
          <span onClick={() => setOpen(!open)}>
            {open ? (
              <CircleX className="md:hidden" />
            ) : (
              <Menu className="md:hidden" />
            )}
          </span>
          <ul className={`md:hidden absolute bg-gray-400 ${open ? 'left-0 top-16' : '-left-[700px] top-16'} duration-1000 z-10 w-full rounded-2xl`}>
            {links}
          </ul>
          <h1 className="text-xl font-bold">My NAV</h1>
        </div>
        {/* ............link list...............  */}
        <ul className="hidden md:flex py-3 justify-center">{links}</ul>
        {/* .............nav button.............  */}
        <button className="btn">Sign In</button>
      </nav>
    </div>
  );
};

export default Nav;
