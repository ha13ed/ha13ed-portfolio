import React from "react";

export default function HeroSection({ onProjectsClick, onContactClick }) {
  const backgroundStyle = {
    backgroundColor: "rgba(212, 213, 214, 0.4)",
    backgroundImage: `
      radial-gradient(circle at top left, rgba(0,0,0,0.08) 90%, transparent 40%),
      radial-gradient(circle at top right, rgba(0,0,0,0.08) 50%, transparent 40%),
      radial-gradient(circle at bottom left, rgba(0,0,0,0.15) 50%, transparent 40%),
      radial-gradient(circle at bottom right, rgba(0,0,0,0.15) 50%, transparent 40%),
      radial-gradient(#2C2C2C 0.45px, transparent 0.6px),
      radial-gradient(#2C2C2C 0.45px, #EAEBEB 0.6px)
    `,
    backgroundSize: "auto, auto, auto, auto, 24px 24px, 24px 24px",
    backgroundPosition: "0 0, 0 0, 0 0, 0 0, 0 0, 6px 12px",
    backgroundRepeat: "no-repeat, no-repeat, no-repeat, no-repeat, repeat, repeat",
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center p-8 bg-[#EAEBEB]"
      style={backgroundStyle}
    >
      <div className="relative z-10 max-w-2xl w-full text-center">
        <h1 className="text-5xl font-extrabold mb-6">
          <span className="text-[#317FD8] [text-shadow:_0_0_1px_#000000,_0_0_2px_#2c2c2c55]">
            H
          </span>
          <span className="text-[#2C2C2C]">amed</span>
          <span className="text-[#FF925C] [text-shadow:_0_0_1px_#000000,_0_0_2px_#2c2c2c55]">
            &nbsp;A
          </span>
          <span className="text-[#2C2C2C]">bedi</span>
        </h1>

        <h2 className="text-2xl font-semibold text-[#2C2C2C] mb-1">
          Data Scientist and Kaggle Expert
        </h2>

        <p className="text-xl font-bold mb-8">
          <span
            className="text-[#2C2C2C] font-serif italic text-xl font-bold
                       [text-shadow:_0_0_1px_#000000,_0_0_2px_#2c2c2c55]
                       hover:[text-shadow:_0_0_2px_#000000,_0_0_3px_#2c2c2c77]
                       transition-all"
          >
            Creative Data-Driven Solutions
          </span>
        </p>

        <p className="text-lg mb-8 px-4 sm:px-0">
          Whether you need quick{" "}
          <span className="text-[#317FD8] font-semibold">
            Exploratory Data Analysis
          </span>{" "}
          with crystal-clear insights, improved business processes with{" "}
          <span className="text-[#317FD8] font-semibold">
            ML-driven models
          </span>
          ,{" "}
          <span className="text-[#317FD8] font-semibold">
            Automated tools
          </span>
          , or{" "}
          <span className="text-[#317FD8] font-semibold">
            Fine-tuned computer vision models
          </span>
          , I deliver solutions tailored to your needs.
        </p>

        {/* **Here’s where we wire up the scroll handlers** */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onProjectsClick}
            className="bg-[#FF925C] text-center text-white py-3 px-8 rounded-lg font-semibold
                       min-w-[200px] sm:min-w-[150px]
                       shadow-md hover:shadow-lg hover:bg-[#FF8345]
                       transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-[#FF925C]"
          >
            My Projects
          </button>
          <button
            onClick={onContactClick}
            className="bg-[#317FD8] text-center text-white py-3 px-8 rounded-lg font-semibold
                       min-w-[200px] sm:min-w-[150px]
                       shadow-md hover:shadow-lg hover:bg-[#1F6EC3]
                       transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-[#317FD8]"
          >
            Contact Me
          </button>
        </div>
      </div>
      
      <div className="
          absolute left-0 right-0
          bottom-14 sm:bottom-10
          text-center
          text-xs sm:text-sm
          text-[#2C2C2C] font-bold
          px-4
        ">
        © 2025 Hamed Abedi. All rights reserved.
      </div>

      {/* SVG Transition + Footer */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,0 C600,100 600,100 1200,0 L1200,120 L0,120 Z" fill="#EAEBEB" />
        </svg>
      </div>
    </div>
  );
}
