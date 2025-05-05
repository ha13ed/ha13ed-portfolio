import React, { useState, useEffect, useRef } from "react";

export default function ProjectsSection() {
  const BG = process.env.PUBLIC_URL;

  const projectsSectionRef = useRef(null); // Create a ref

  // track first render so we don’t auto-scroll on mount
  const isFirstPageEffect = useRef(true);

  // --- State for Modals ---
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

  const [isCIFAR10ModalOpen, setIsCIFAR10ModalOpen] = useState(false);
  const openCIFAR10Modal = () => {
    setIsCIFAR10ModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeCIFAR10Modal = () => {
    setIsCIFAR10ModalOpen(false);
    document.body.style.overflow = "auto";
  };

  // --- Project Data ---
  // Store project details in an array of objects
  const allProjectsData = [
    // --- cifar10 ---
    {
      id: "cifar10", // Use a different ID
      title: "Transfer Learning CIFAR-10, Accuracy: 94%", // Indicate it's a copy for clarity here
      description:
        "A comparison of transfer learning performance (using ResNet-50) against traditional models (GBDTs and CNNs) with varying training set sizes on the CIFAR10 dataset revealed the effectiveness of the transfer learning technique.",
      tools: "Python, TensorFlow/Keras, XGBoost/LGBM/Catboost, Scikit-learn, Pandas, Matplotlib/Seaborn",
      imageUrl: `${BG}/images/CIFAR10_Thumb.jpg`, // Same image
      modalImageUrl: `${BG}/images/CIFAR10_Progress.jpg`, // Same modal image
      modalAltText: "Full-sized CIFAR10 Project",
      openModal: openCIFAR10Modal, // Opens the *same* CIFAR10 modal
      links: [
        {
          href: "https://www.kaggle.com/code/hamedabedi/transfer-learning-cifar-10-acc-94",
          text: "View CIFAR10",
          color: "bg-[#317FD8]",
          hoverColor: "hover:bg-[#1F6EC3]",
          focusColor: "focus:ring-[#317FD8]",
        },
      ],
    },
    {
      id: "timeseries",
      title: "Detecting & Correcting Mislabeled Time-Series Data",
      description:
        "In a Kaggle competition discussion, I demonstrated that the test set is a chronological continuation after the train data. I visualized the dataset, identified mislabeled values, and presented methods to correct them—enhancing model reliability.",
      tools: "Python, Pandas, Matplotlib",
      imageUrl: `${BG}/images/RainFall_Competition_Thumb.jpg`,
      modalImageUrl: `${BG}/images/RainFall_Competition.jpg`,
      modalAltText: "Full-sized Mislabeled Time-Series Project",
      openModal: openTimeSeriesModal,
      links: [
        {
          href: "https://www.kaggle.com/competitions/playground-series-s5e3/discussion/565634",
          text: "View Discussion",
          color: "bg-[#317FD8]",
          hoverColor: "hover:bg-[#1F6EC3]",
          focusColor: "focus:ring-[#317FD8]",
        },
      ],
    },
    {
      id: "railways",
      title: "Data-Driven Route & Schedule Assignment for Iran Railways",
      description:
        "Cleaned and engineered six years of passenger and train-movement data to rank routes by demand. Built linear and tree-based regression models (Random Forest, XGBoost) and derived fair path and time assignment algorithms for the trains — packaged as a Windows executable file.",
      tools: "Python, XGBoost, Scikit-learn, Pandas, Matplotlib/Seaborn",
      imageUrl: `${BG}/images/Railway_BoxPlot_Thumb.jpg`,
      modalImageUrl: `${BG}/images/Railway_BoxPlot.png`,
      modalAltText: "Full-sized Railways Project",
      openModal: openRailwaysModal,
      links: [], // No external links for this one in the example
    },
    {
      id: "mnist", // Unique ID for key prop and potentially modal logic
      title: "Train Size Matters In Model Selection (MNIST & F-MNIST)",
      description:
        "Explored how performance of traditional ML models (Logistic Regression, SVM, Random Forest), GBDTs, and CNNs varies with training set size, using the MNIST and Fashion MNIST datasets. These notebooks visualize trade-offs in accuracy, time, and scalability, highlighting CNN effectiveness on spatial data.",
      tools: "Python, TensorFlow/Keras, XGBoost/LGBM/Catboost, Scikit-learn, Pandas, Matplotlib/Seaborn",
      imageUrl: `${BG}/images/MNIST_Thumb.png`,
      modalImageUrl: `${BG}/images/MNIST_Progress.jpg`,
      modalAltText: "Full-sized MNIST/Fashion MNIST Project",
      openModal: openMNISTModal, // Function to open the correct modal
      links: [
        {
          href: "https://www.kaggle.com/code/hamedabedi/train-size-matters-in-model-selection-mnist",
          text: "View MNIST",
          color: "bg-[#317FD8]",
          hoverColor: "hover:bg-[#1F6EC3]",
          focusColor: "focus:ring-[#317FD8]",
        },
        {
          href: "https://www.kaggle.com/code/hamedabedi/train-size-matters-in-model-selection-f-mnist",
          text: "View F-MNIST",
          color: "bg-[#FF925C]",
          hoverColor: "hover:bg-[#FF8345]",
          focusColor: "focus:ring-[#FF925C]",
        },
      ],
    },
    // Add more project objects here as needed
  ];

  // --- Pagination State & Logic ---
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3; // Set how many projects to display per page
  const totalPages = Math.ceil(allProjectsData.length / projectsPerPage);

  // Calculate the projects to display on the current page
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjectsToDisplay = allProjectsData.slice(startIndex, endIndex);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };


  // --- Effect for Scrolling on Page Change (Mobile Only) ---
  useEffect(() => {
    // Check if the ref is attached and if the screen width is mobile (e.g., < 768px for Tailwind's 'md')
    // We also check currentPage > 0 to avoid potential issues, though it starts at 1
   // skip scrolling on initial mount
   if (isFirstPageEffect.current) {
     isFirstPageEffect.current = false;
     return;
   }


   // only scroll when moving to pages beyond the first
   if (currentPage > 1 && projectsSectionRef.current && window.innerWidth < 768) {
     projectsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
   }

     // Dependency array: This effect runs when currentPage changes
  }, [currentPage]);

  // --- Background Style (Unchanged) ---
  const backgroundStyle = {
    backgroundColor: "#EAEBEB",
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

  // --- Calculate min height for the project container ---
  // Card min-height is 210px, gap is 1rem (gap-4)
  const cardMinHeightPx = 210;
  const gapRem = 1;
  // Calculate height needed for max cards per page + gaps between them
  const minContainerHeight = `calc(${projectsPerPage} * ${cardMinHeightPx}px + (${projectsPerPage - 1} * ${gapRem}rem))`;

  return (
    <div ref={projectsSectionRef} className="min-h-auto md:min-h-screen py-8 md:py-12 px-8" style={backgroundStyle}>
      <div className="max-w-3xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-[#FF925C] text-center mb-6">
          <span className="text-[#FF925C] [text-shadow:_0_0_1px_#000000,_0_0_2px_#2c2c2c55]">
            P
          </span>
          <span className="text-[#2C2C2C]">rojects</span>
        </h2>

        {/* Grid or Flex container for projects */}
        <div className="flex flex-col gap-4"
          style={{ minHeight: minContainerHeight }} // Apply calculated min-height
        >
          {/* Map through current projects for display */}
          {currentProjectsToDisplay.map((project) => (
            <div
              key={project.id} // Add unique key prop
              className="bg-[#F7F7F7] min-h-[210px] rounded-lg shadow-lg overflow-hidden md:flex"
            >
              <div className="md:w-1/4 flex items-center justify-center bg-[#F7F7F7] p-1">
                <img
                  src={project.imageUrl}
                  alt={`${project.title} Thumbnail`}
                  className="w-full h-auto object-contain cursor-pointer max-h-48 md:max-h-full"
                  onClick={project.openModal} // Use the function from the project object
                />
              </div>
              <div className="px-4 py-2 md:w-3/4 flex flex-col justify-between">
                <div>
                  <h3 className="text-l font-bold text-[#317FD8] mb-2" style={{ textAlign: "justify" }}>
                    {project.title}
                  </h3>
                  <p className="text-[#2C2C2C] text-sm mb-1" style={{ textAlign: "justify" }}>
                    {project.description}
                  </p>
                </div>
                <div className="mt-4">
                  {project.tools && ( // Conditionally render tools if they exist
                     <p className={`text-xs text-[#2C2C2C] ${project.links.length > 0 ? 'mb-1' : 'mb-4'}`}>
                        <span className="font-semibold">Tools:</span> {project.tools}
                     </p>
                  )}
                  {project.links.length > 0 && ( // Conditionally render links container
                    <div className="flex flex-col sm:flex-row gap-4 justify-left">
                      {project.links.map((link, index) => (
                        <a
                          key={index}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`
                            ${link.color} text-center text-white
                            py-2 px-4 rounded-lg font-semibold
                            min-w-[200px] sm:min-w-[150px]
                            shadow-md hover:shadow-lg ${link.hoverColor}
                            transition-all duration-300
                            focus:ring-2 focus:ring-offset-2 ${link.focusColor}
                          `}
                        >
                          {link.text}
                        </a>
                      ))}
                    </div>
                   )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Pagination Controls --- */}
        {totalPages > 1 && ( // Only show pagination if there's more than one page
          <div className="flex justify-center items-center mt-3 gap-4">
            {/* Previous Button */}
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`
                bg-[#FF925C] text-white text-sm
                min-w-[100px]
                py-1 px-2 rounded-lg font-semibold
                shadow-md hover:shadow-lg hover:bg-[#FF8345]
                transition-all duration-300
                focus:ring-2 focus:ring-offset-2 focus:ring-[#FF925C]
                disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#FF925C]
              `}
            >
              Previous
            </button>

            {/* Page Indicator (Optional but helpful) */}
            <span className="text-[#2C2C2C] font-semibold">
              Page {currentPage} of {totalPages}
            </span>

            {/* Next Button */}
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`
                bg-[#317FD8] text-white text-sm
                min-w-[100px]
                py-1 px-2 rounded-lg font-semibold
                shadow-md hover:shadow-lg hover:bg-[#1F6EC3]
                transition-all duration-300
                focus:ring-2 focus:ring-offset-2 focus:ring-[#317FD8]
                disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#317FD8]
              `}
            >
              Next
            </button>
          </div>
        )}

        {/* --- Modals (Keep them outside the main mapping/pagination logic) --- */}
        {isTimeSeriesModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-start justify-center p-4 sm:p-8 overflow-y-auto"
            onClick={closeTimeSeriesModal}
          >
            <div
              className="bg-white rounded-lg overflow-y-auto max-h-[90vh] w-[75vw] shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Find the correct modal image URL from the data array if needed, or keep as is if only one type */}
              <img
                 src={allProjectsData.find(p => p.id === 'timeseries')?.modalImageUrl || `${BG}/images/RainFall_Competition.jpg`} // Example of dynamic lookup if needed
                 alt={allProjectsData.find(p => p.id === 'timeseries')?.modalAltText || "Full-sized Mislabeled Time-Series Project"}
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
                 src={allProjectsData.find(p => p.id === 'mnist')?.modalImageUrl || `${BG}/images/MNIST_Progress.jpg`} // Use mnist's image
                 alt={allProjectsData.find(p => p.id === 'mnist')?.modalAltText || "Full-sized MNIST/Fashion MNIST Project"}
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
                 src={allProjectsData.find(p => p.id === 'railways')?.modalImageUrl || `${BG}/images/Railway_BoxPlot.png`}
                 alt={allProjectsData.find(p => p.id === 'railways')?.modalAltText || "Full-sized Railways Project"}
                 className="w-full object-contain"
              />
            </div>
          </div>
        )}
        {isCIFAR10ModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-start justify-center p-8"
            onClick={closeCIFAR10Modal}
          >
            <div
              className="bg-white rounded-lg overflow-y-auto max-h-[90vh] w-[75vw] shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
               <img
                 src={allProjectsData.find(p => p.id === 'cifar10')?.modalImageUrl || `${BG}/images/CIFAR10_Progress.jpg`} // Use cifar10's image
                 alt={allProjectsData.find(p => p.id === 'cifar10')?.modalAltText || "Full-sized CIFAR10 Project"}
                 className="w-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}