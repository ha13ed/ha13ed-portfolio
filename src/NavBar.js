// src/NavBar.js
import React from "react";

export default function NavBar({
  onHomeClick,
  onProjectsClick,
  onAboutClick,
  onSkillsClick,
  onContactClick,
  activeSection, // "home" | "projects" | "about" | "skills" | "contact"
}) {
  // base link styling + active / hover colors
  const linkClasses = (section) =>
    `cursor-pointer transition-colors duration-300 ${
      activeSection === section
        ? "text-[#FF925C] font-semibold"
        : "text-[#2C2C2C] hover:text-[#317FD8]"
    }`;

  // hide on small screens, and also hide when we're in the Hero
  const navClass =
    activeSection === "home"
      ? "hidden"
      : "hidden sm:block fixed top-0 left-0 right-0 bg-[#EAEBEB] bg-opacity-80 backdrop-blur-md z-50";

  return (
    <nav className={`${navClass} group transition-all duration-300`}>
      <ul
        className="
          max-w-4xl mx-auto
          flex justify-between items-center
          py-1                     /* default padding-y */
          group-hover:py-2         /* grow on hover */
          px-6
          transition-all duration-300
        "
      >
        <li>
          <button
            onClick={onHomeClick}
            className={`${linkClasses("home")} transform hover:scale-110 transition-transform duration-200`}
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={onProjectsClick}
            className={`${linkClasses("projects")} transform hover:scale-110 transition-transform duration-200`}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={onAboutClick}
            className={`${linkClasses("about")} transform hover:scale-110 transition-transform duration-200`}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={onSkillsClick}
            className={`${linkClasses("skills")} transform hover:scale-110 transition-transform duration-200`}
          >
            Skills
          </button>
        </li>
        <li>
          <button
            onClick={onContactClick}
            className={`${linkClasses("contact")} transform hover:scale-110 transition-transform duration-200`}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}
