import React from "react";
import Links from "./Links";

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
  return (
    <div>
      <nav>
        <ul className="border flex py-3 justify-center">
          {navLinks.map((links) => (
            <Links key={links.id} links={links}></Links>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
