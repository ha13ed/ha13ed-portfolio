import React, { useState } from "react";

export default function ProjectsSection() {
  const backgroundStyle = {
    backgroundColor: "#EAEBEB", // Base background color (bottom-most)
    backgroundImage: `
      radial-gradient(circle at top left, rgba(0,0,0,0.2) 0%, transparent 40%),
      radial-gradient(circle at top right, rgba(0,0,0,0.2) 0%, transparent 40%),
      radial-gradient(circle at bottom left, rgba(0,0,0,0.2) 0%, transparent 40%),
      radial-gradient(circle at bottom right, rgba(0,0,0,0.2) 0%, transparent 40%),
      linear-gradient(to bottom, rgba(234,235,235,0) 0%, #EAEBEB 100%, #EAEBEB 100%),
      radial-gradient(#2C2C2C 0.45px, transparent 0.6px),
      radial-gradient(#2C2C2C 0.45px, #EAEBEB 0.6px)
    `,
    backgroundSize: "auto, auto, auto, auto, 100% 100%, 24px 24px, 24px 24px",
    backgroundPosition: "0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 6px 12px",
    backgroundRepeat: "no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, repeat, repeat",
  };

  // State and modal logic remain unchanged
  
  const [isMNISTModalOpen, setIsMNISTModalOpen] = useState(false);
  const openMNISTModal = () => {
    setIsMNISTModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeMNISTModal = () => {
    setIsMNISTModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const [isTimeSeriesModalOpen, setIsTimeSeriesModalOpen] = useState(false);
  const openTimeSeriesModal = () => {
    setIsTimeSeriesModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeTimeSeriesModal = () => {
    setIsTimeSeriesModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const [isRailwaysModalOpen, setIsRailwaysModalOpen] = useState(false);
  const openRailwaysModal = () => {
    setIsRailwaysModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeRailwaysModal = () => {
    setIsRailwaysModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="min-h-screen py-6 px-8" style={backgroundStyle}>
      <div className="max-w-3xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-[#FF925C] text-center mb-10">
          <span className="text-[#FF925C] [text-shadow:_0_0_1px_#000000,_0_0_2px_#2c2c2c55]">
            P
          </span>
          <span className="text-[#2C2C2C]">rojects</span>
        </h2>
        {/* Grid or Flex container for projects */}
        <div className="flex flex-col gap-4">
          {/* Project Card 1: MNIST & Fashion MNIST Analysis */}
          <div className="bg-[#F7F7F7] min-h-[210px] rounded-lg shadow-lg overflow-hidden md:flex">
            <div className="md:w-1/4 flex items-center justify-center bg-[#F7F7F7] p-1">
              <img
                src="/images/MNIST_Thumb.png"
                alt="MNIST/Fashion MNIST Model Performance Analysis Thumbnail"
                className="w-full h-auto object-contain cursor-pointer max-h-48 md:max-h-full"
                onClick={openMNISTModal}
              />
            </div>
            <div className="px-4 py-2 md:w-3/4 flex flex-col justify-between">
              <div>
                <h3 className="text-l font-bold text-[#317FD8] mb-2" style={{ textAlign: "justify" }}>
                  Train Size Matters In Model Selection (MNIST &amp; F-MNIST)
                </h3>
                <p className="text-[#2C2C2C] text-sm mb-2" style={{ textAlign: "justify" }}>
                  Explored how performance of traditional ML models (Logistic Regression, SVM, Random Forest), GBDTs, and CNNs varies with training set size, using the MNIST and Fashion MNIST datasets. These notebooks visualize trade-offs in accuracy, time, and scalability, highlighting CNN effectiveness on spatial data.
                </p>
              </div>
              <div className="mt-4">
                <p className="text-xs text-[#2C2C2C] mb-1">
                  <span className="font-semibold">Tools:</span> Python, TensorFlow/Keras, XGBoost/LGBM/Catboost, Scikit‑learn, Pandas, Matplotlib/Seaborn
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-left">
                  <a
                    href="https://www.kaggle.com/code/hamedabedi/train-size-matters-in-model-selection-mnist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      bg-[#317FD8] text-center text-white
                      py-2 px-4 rounded-lg font-semibold
                      min-w-[200px] sm:min-w-[150px]
                      shadow-md hover:shadow-lg hover:bg-[#1F6EC3]
                      transition-all duration-300
                      focus:ring-2 focus:ring-offset-2 focus:ring-[#317FD8]
                    "
                  >
                    View MNIST
                  </a>
                  <a
                    href="https://www.kaggle.com/code/hamedabedi/train-size-matters-in-model-selection-f-mnist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      bg-[#FF925C] text-center text-white
                      py-2 px-4 rounded-lg font-semibold
                      min-w-[200px] sm:min-w-[150px]
                      shadow-md hover:shadow-lg hover:bg-[#FF8345]
                      transition-all duration-300
                      focus:ring-2 focus:ring-offset-2 focus:ring-[#FF925C]
                    "
                  >
                    View F‑MNIST
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Project Card 2: Time Series */}
          <div className="bg-[#F7F7F7] min-h-[210px] rounded-lg shadow-lg overflow-hidden md:flex">
            <div className="md:w-1/4 flex items-center justify-center bg-[#F7F7F7] p-1">
              <img
                src="/images/RainFall_Competition_Thumb.png"
                alt="Mislabeled Time-Series Project Thumbnail"
                className="w-full h-auto object-contain cursor-pointer max-h-48 md:max-h-full"
                onClick={openTimeSeriesModal}
              />
            </div>
            <div className="px-4 py-2 md:w-3/4 flex flex-col justify-between">
              <div>
                <h3 className="text-l font-bold text-[#317FD8] mb-2" style={{ textAlign: "justify" }}>
                  Detecting &amp; Correcting Mislabeled Time-Series Data
                </h3>
                <p className="text-[#2C2C2C] text-sm mb-1" style={{ textAlign: "justify" }}>
                  In a Kaggle competition discussion, I demonstrated that the test set is a chronological continuation
                  after the train data. I visualized the dataset, identified mislabeled values, and presented methods to
                  correct them—enhancing model reliability.
                </p>
              </div>
              <div className="mt-4">
                <p className="text-xs text-[#2C2C2C] mb-1">
                  <span className="font-semibold">Tools:</span> Python, Pandas, Matplotlib
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-left">
                  <a
                    href="https://www.kaggle.com/competitions/playground-series-s5e3/discussion/565634"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      bg-[#317FD8] text-center text-white
                      py-2 px-4 rounded-lg font-semibold
                      min-w-[200px] sm:min-w-[150px]
                      shadow-md hover:shadow-lg hover:bg-[#1F6EC3]
                      transition-all duration-300
                      focus:ring-2 focus:ring-offset-2 focus:ring-[#317FD8]
                    "
                  >
                    View Discussion
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Project Card 3: Railways */}
          <div className="bg-[#F7F7F7] min-h-[210px] rounded-lg shadow-lg overflow-hidden md:flex">
            <div className="md:w-1/4 flex items-center justify-center bg-[#F7F7F7] p-1">
              <img
                src="/images/Railway_BoxPlot_Thumb.png"
                alt="Mislabeled Time-Series Project Thumbnail"
                className="w-full h-auto object-contain cursor-pointer max-h-48 md:max-h-full"
                onClick={openRailwaysModal}
              />
            </div>
            <div className="px-4 py-4 md:w-3/4 flex flex-col justify-between">
              <div>
                <h3 className="text-l font-bold text-[#317FD8] mb-2" style={{ textAlign: "justify" }}>
                  Data‑Driven Route & Schedule Assignment for Iran Railways
                </h3>
                <p className="text-[#2C2C2C] text-sm mb-1" style={{ textAlign: "justify" }}>
                Cleaned and engineered six years of passenger and train‑movement data to rank routes by demand.
                Built linear and tree‑based regression models (Random Forest, XGBoost) and derived fair path and time assignment
                algorithms for the trains — packaged as a Windows executable file.
                </p>
              </div>
              <div className="mt-4">
                <p className="text-xs text-[#2C2C2C] mb-4">
                  <span className="font-semibold">Tools:</span> Python, XGBoost, Scikit‑learn, Pandas, Matplotlib/Seaborn
                </p>
              </div>
            </div>
          </div>
          {/* Add more project cards here */}
        </div>
        {isTimeSeriesModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-start justify-center p-4 sm:p-8 overflow-y-auto"
            onClick={closeTimeSeriesModal}
          >
            <div
              className="bg-white rounded-lg overflow-y-auto max-h-[90vh] w-[75vw] shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="/images/RainFall_Competition.png"
                alt="Full-sized Mislabeled Time-Series Project"
                className="w-full object-contain"
              />
            </div>
          </div>
        )}
        {isMNISTModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-start justify-center p-8"
            onClick={closeMNISTModal}
          >
            <div
              className="bg-white rounded-lg overflow-y-auto max-h-[90vh] w-[75vw] shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="/images/MNIST_Progress.png"
                alt="Full-sized MNIST/Fashion MNIST Project"
                className="w-full object-contain"
              />
            </div>
          </div>
        )}
        {isRailwaysModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-start justify-center p-8"
            onClick={closeRailwaysModal}
          >
            <div
              className="bg-white rounded-lg overflow-y-auto max-h-[90vh] w-[75vw] shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="/images/Railway_BoxPlot.png"
                alt="Full-sized MNIST/Fashion MNIST Project"
                className="w-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}