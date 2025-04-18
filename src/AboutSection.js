import React, { useState } from "react";

export default function AboutSection() {
  const backgroundStyle = {
    backgroundColor: "#EAEBEB", // Base background color (bottom-most)
    backgroundImage: `
      radial-gradient(circle at top left, rgba(0,0,0,0.2) 0%, transparent 40%),
      radial-gradient(circle at top right, rgba(0,0,0,0.2) 0%, transparent 40%),
      radial-gradient(circle at bottom left, rgba(0,0,0,0.2) 0%, transparent 40%),
      radial-gradient(circle at bottom right, rgba(0,0,0,0.2) 0%, transparent 40%)
    `,
    backgroundSize: "auto, auto, auto, auto, 100% 100%, 24px 24px, 24px 24px",
    backgroundPosition: "0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 12px 12px",
    backgroundRepeat: "no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, repeat, repeat",
  };

  const [isLetterTooltipVisible, setIsLetterTooltipVisible] = useState(false);
  const [isLetterModalOpen, setIsLetterModalOpen] = useState(false);

  const openLetterModal = () => {
    setIsLetterModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLetterModal = () => {
    setIsLetterModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const [isAbstractTooltipVisible, setIsAbstractTooltipVisible] = useState(false);
  const [isAbstractModalOpen, setIsAbstractModalOpen] = useState(false);

  const openAbstractModal = () => {
    setIsAbstractModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeAbstractModal = () => {
    setIsAbstractModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const imageStyle = {
    maxWidth: '250px', // Increased to 5 times the previous size
    height: 'auto',
  };

  const sideBarStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const leftSideStyle = {
    ...sideBarStyle,
    left: '20px', // Adjust as needed
  };

  const rightSideStyle = {
    ...sideBarStyle,
    right: '20px', // Adjust as needed
  };

  const leftImageTopStyle = {
    ...imageStyle,
    marginBottom: '170px', // Maintain spacing as if the middle image exists
  };

  return (
    <div className="min-h-screen py-8 px-8 relative" style={backgroundStyle}>
      <div style={leftSideStyle} className="px-8 opacity-10 sm:opacity-100">
        <img src="images/1.png" alt="Vector 1" style={leftImageTopStyle} />
        <img src="images/2.png" alt="Vector 2" style={imageStyle} />
      </div>
      <div style={rightSideStyle} className="px-8 opacity-10 sm:opacity-100">
        <img src="images/3.png" alt="Vector 3" style={imageStyle} />
      </div>
      <div className="max-w-2xl mx-auto relative z-10">
        {/* About Me Heading */}
        <h2 className="text-4xl font-bold text-[#317FD8] text-center mb-6">
          <span className="text-[#317FD8] [text-shadow:_0_0_1px_#000000,_0_0_2px_#2c2c2c55]">
            A
          </span>
          <span className="text-[#2C2C2C]">bout Me</span>
        </h2>

        {/* About Me Content */}
        <p
          className="text-med text-[#2C2C2C] mb-6 leading-relaxed text-left sm:text-justify"
        >
          I hold a <span className="font-semibold text-[#317FD8]">BSc in Civil Engineering</span> and an{" "}
          <span className="font-semibold text-[#317FD8]">MSc in Transportation Planning and Engineering</span> from{" "}
          <span className="font-semibold text-[#317FD8]">Sharif University of Technology</span> (Tehran, Iran). For my thesis, I optimized a mixed{" "}
          <span
            className="inline font-semibold text-[#FF8345] underline cursor-pointer transition-colors hover:text-[#F55200]"
            onMouseEnter={() => setIsAbstractTooltipVisible(true)}
            onMouseLeave={() => setIsAbstractTooltipVisible(false)}
            onClick={openAbstractModal}
          >
            Human-CAV (Connected Autonomous Vehicle) network design
            {/* Tooltip */}
            {isAbstractTooltipVisible && (
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-10">
                <img
                  src="images/Abstract_Thumb.png"
                  alt="Abstract thumbnail"
                  className="w-1/2 h-auto rounded shadow-lg"
                  loading="lazy"
                />
              </div>
            )}
          </span>.

          achieving a <span className="font-semibold text-[#317FD8]">15% reduction</span> in projected 40-year total transportation costs compared to prior state-of-the-art solutions.
        </p>
        <p
          className="text-med text-[#2C2C2C] mb-6 leading-relaxed text-left sm:text-justify"
        >
          That project encouraged me to deepen my knowledge and skills in programming and advanced analytics, prompting me to pursue self-study in{" "}
          <span className="font-semibold text-[#317FD8]">machine learning</span> and{" "}
          <span className="font-semibold text-[#317FD8]">deep learning</span>. I invested my time in cutting-edge books and online courses.
          This expertise granted me access to private data from{" "}
          <span className="font-semibold text-[#317FD8]">Iran Railways</span> for a research project (this was the first time that Iran Railways trusted a third party with such data). Using this data, I developed innovative solutions to improve train and route assignment, which led to increased efficiency, profitability, and fairness. My work received attention from top-level management at Iran Railways, including a{" "}
          <span
            className="relative inline font-semibold text-[#FF8345] underline cursor-pointer transition-colors hover:text-[#F55200]"
            onMouseEnter={() => setIsLetterTooltipVisible(true)}
            onMouseLeave={() => setIsLetterTooltipVisible(false)}
            onClick={openLetterModal}
          >
            letter of appreciation from the CEO
            {/* Tooltip */}
            {isLetterTooltipVisible && (
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-10">
                <img
                  src="/images/Appreciation_Letter_Thumb.jpg"
                  alt="Appreciation Letter thumbnail"
                  className="w-200 h-auto rounded shadow-med"
                  loading="lazy"
                />
              </div>
            )}
          </span>.
        </p>
        <p
          className="text-med text-[#2C2C2C] mb-6 leading-relaxed text-left sm:text-justify"
        >
          To stay sharp in this rapidly evolving field, I actively participate in Kaggle competitions and community discussions. Check out my{" "}
          <a
            href="https://www.kaggle.com/hamedabedi"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#FF8345] underline transition-colors hover:text-[#F55200]"
          >
            Kaggle page
          </a>.
        </p>

        {/* What I Do Heading */}
        <h2 className="text-4xl font-bold text-[#FF925C] text-center mt-12 mb-6">
          <span className="text-[#FF925C] [text-shadow:_0_0_1px_#000000,_0_0_2px_#2c2c2c55]">W</span>
          <span className="text-[#2C2C2C]">hat I Do</span>
        </h2>


        <p className="text-med text-[#2C2C2C] mb-6 leading-relaxed text-left sm:text-justify">
          I combine domain expertise with{" "}
          <span className="font-semibold text-[#317FD8]">creative feature extraction/engineering</span> and{" "}
          <span className="font-semibold text-[#317FD8]">precise modeling</span> to deliver{" "}
          <span className="font-semibold text-[#317FD8]">actionable, data-driven strategies</span> that accelerate tasks.
        </p>
      </div>

      {/* Modal for Abstract */}
      {isAbstractModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-start justify-center p-8 overflow-y-auto"
          onClick={closeAbstractModal}
        >
          <div
            className="bg-white rounded-med overflow-y-auto max-h-[90vh] w-[75vw] shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="images/Abstract.png"
              alt="Letter of MSC Thesis"
              className="w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      )}


      {/* Modal for Letter */}
      {isLetterModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-start justify-center p-8 overflow-y-auto"
          onClick={closeLetterModal}
        >
          <div
            className="bg-white rounded-med overflow-y-auto max-h-[90vh] w-[75vw] shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="/images/Appreciation_Letter_1.jpg"
              alt="Letter of Appreciation from the CEO of Iran's Railway"
              className="w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  );
}