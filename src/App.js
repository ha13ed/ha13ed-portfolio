// src/App.js
import React, { useRef, useState, useEffect } from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";

function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState("home");

  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("home");
  };
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    setActiveSection("projects");
  };
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    setActiveSection("about");
  };
  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: "smooth" });
    setActiveSection("skills");
  };
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
    setActiveSection("contact");
  };

  // Automatically update activeSection based on scroll position
  useEffect(() => {
    const sections = [
      { ref: homeRef, name: "home" },
      { ref: projectsRef, name: "projects" },
      { ref: aboutRef, name: "about" },
      { ref: skillsRef, name: "skills" },
      { ref: contactRef, name: "contact" },
    ];
    const observerOptions = { rootMargin: "-50% 0px -50% 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = sections.find((s) => s.ref.current === entry.target);
          if (section) {
            setActiveSection(section.name);
          }
        }
      });
    }, observerOptions);

    sections.forEach((s) => {
      if (s.ref.current) observer.observe(s.ref.current);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <NavBar
        onHomeClick={scrollToHome}
        onProjectsClick={scrollToProjects}
        onAboutClick={scrollToAbout}
        onSkillsClick={scrollToSkills}
        onContactClick={scrollToContact}
        activeSection={activeSection}
      />

      <div ref={homeRef}>
        <HeroSection
          onProjectsClick={scrollToProjects}
          onContactClick={scrollToContact}
        />
      </div>

      <div ref={projectsRef}>
        <ProjectsSection />
      </div>

      <div ref={aboutRef}>
        <AboutSection />
      </div>

      <div ref={skillsRef}>
        <SkillsSection />
      </div>

      <div ref={contactRef}>
        <ContactSection />
      </div>
    </>
  );
}

export default App;