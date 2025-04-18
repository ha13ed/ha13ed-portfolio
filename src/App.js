import React, { useRef } from "react";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";

function App() {
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Handlers to scroll smoothly to sections
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <HeroSection onProjectsClick={scrollToProjects} onContactClick={scrollToContact} />
      <div ref={projectsRef}>
        <ProjectsSection />
      </div>
      <AboutSection />
      <div ref={contactRef}>
        <ContactSection />
      </div>
    </>
  );
}
export default App;
