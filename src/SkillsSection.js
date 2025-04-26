// src/SkillsSection.js
import React from "react";

export default function SkillsSection() {
  const BG = process.env.PUBLIC_URL;

  // Reordered skills for better grouping
  const skills = [
    // Core Language
    { name: "Python", icon: `${BG}/icons/python.svg` },

    // Data Handling & Analysis
    { name: "Pandas", icon: `${BG}/icons/pandas.svg` },
    { name: "NumPy", icon: `${BG}/icons/numpy.svg` },
    { name: "Scipy", icon: `${BG}/icons/scipy.svg` },
    { name: "Geopandas", icon: `${BG}/icons/geopandas.svg` }, // Geospatial data handling

    // Machine Learning (General)
    { name: "Scikit‑learn", icon: `${BG}/icons/scikit-learn.svg` },

    // Deep Learning Frameworks
    { name: "TensorFlow", icon: `${BG}/icons/tensorflow.svg` },
    { name: "Keras", icon: `${BG}/icons/keras.svg` }, // Note: Corrected from lowercase 'keras'
    { name: "Pytorch", icon: `${BG}/icons/pytorch.svg` },

    // Gradient Boosting Libraries
    { name: "XGBoost", icon: `${BG}/icons/XGBoost.svg` },
    { name: "LightGBM", icon: `${BG}/icons/lightgbm.svg` },
    { name: "CatBoost", icon: `${BG}/icons/CatBoost.svg` },

    // Data Visualization
    { name: "Plotly", icon: `${BG}/icons/plotly.svg` },

    // Web Development
    { name: "React", icon: `${BG}/icons/react.svg` },

    // Development Tools
    { name: "Git", icon: `${BG}/icons/git.svg` },
    { name: "Docker", icon: `${BG}/icons/docker.svg` },
    { name: "Power Bi", icon: `${BG}/icons/powerbi.svg` },
    { name: "Selenium", icon: `${BG}/icons/selenium.svg` },
  ];

  return (
    <section className="bg-[#EAEBEB] py-12 px-6">
      {/* Fixed nested h2 tags */}
      <h2 className="text-4xl font-bold text-center mb-8">
        <span className="text-[#317FD8] [text-shadow:_0_0_1px_#000000,_0_0_2px_#2c2c2c55]">
          T
        </span>
        <span className="text-[#2C2C2C]">echnologies & Skills</span>
      </h2>

      <div className="
          max-w-2xl mx-auto {/* Increased max-width slightly for more columns */}
          grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 {/* Adjusted grid columns for better density */}
          gap-2 {/* Reduced gap between items */}
        ">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center space-y-2 p-3 bg-white rounded-lg shadow hover:shadow-lg transition-shadow text-center" // Adjusted padding, added text-center
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-9 h-9 object-contain" // Made icons smaller
            />
            <span className="text-sm font-medium text-[#2C2C2C]">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}