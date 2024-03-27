import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="w-full bg-slate-400 fixed z-10">
      <ul className="text-sm cursor-pointer flex">
        <li className="py-2 px-4 nav-act">
          <Link
            to="home"
            smooth={true}
            // offset={0}
            spy={true}
            exact="true"
            // activeClass="active"
            duration={200}
            className="hover:border-b-2 py-[0.10rem] hover:border-blue-500 transition-[all 0.2s ease-out] px-4"
          >
            HOME
          </Link>
        </li>
        <li className="py-2 px-4 nav-act">
          <Link
            to="about"
            smooth={true}
            // offset={100}
            spy={true}
            exact="true"
            // activeClass="active"
            duration={200}
            className="hover:border-b-2 py-[0.10rem] hover:border-blue-500 transition-[all 0.2s ease-out] px-4"
          >
            ABOUT
          </Link>
        </li>
        <li className="py-2 px-4 nav-act">
          <Link
            to="skills"
            smooth={true}
            // offset={100}
            spy={true}
            exact="true"
            // activeClass="active"
            duration={200}
            className="hover:border-b-2 py-[0.10rem] hover:border-blue-500 transition-[all 0.2s ease-out] px-4"
          >
            SKILLS
          </Link>
        </li>
        <li className="py-2 px-4 nav-act">
          <Link
            to="education"
            smooth={true}
            // offset={100}
            spy={true}
            exact="true"
            // activeClass="active"
            duration={200}
            className="hover:border-b-2 py-[0.10rem] hover:border-blue-500 transition-[all 0.2s ease-out] px-4"
          >
            EDUCATION
          </Link>
        </li>
        <li className="py-2 px-4 nav-act">
          <Link
            to="experience"
            smooth={true}
            // offset={100}
            spy={true}
            exact="true"
            // activeClass="active"
            duration={200}
            className="hover:border-b-2 py-[0.10rem] hover:border-blue-500 transition-[all 0.2s ease-out] px-4"
          >
            EXPERIENCE
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
