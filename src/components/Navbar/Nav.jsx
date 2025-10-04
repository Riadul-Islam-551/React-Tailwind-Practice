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

  return (
    <div className="shadow-2xs">
      <nav className="  flex justify-between items-center max-w-[1200px] mx-auto ">
        {/* ............nav icons............  */}
        <span
          className="flex gap-5 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <CircleX /> : <Menu />} <h1>My NAV</h1>
        </span>
        {/* ............link list...............  */}
        <ul className=" flex py-3 justify-center">
          {navLinks.map((links) => (
            <Links key={links.id} links={links}></Links>
          ))}
        </ul>
        {/* .............nav button.............  */}
        <button className="btn">Sign In</button>
      </nav>
    </div>
  );
};

export default Nav;
