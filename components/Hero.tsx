"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Array of image URLs - REPLACE THESE WITH YOUR ACTUAL IMAGE PATHS/URLs
const slideshowImages = [
  "slider/agedcare.jpg",
  "slider/childlabour.jpg",
  "slider/collegeeducation.jpg",
  "slider/community disaster pre.jpg",
  // Add more relevant image URLs
];

// Array of corresponding context-aware subtext for each image
const slideshowContext = [
  [
    `Dedicated to eradicating <span class="text-green-300">child labour</span> through our special school programs in <span class="text-green-300">Guntur</span>, Andhra Pradesh.`,
    `Providing <span class="text-green-300">education</span>, vocational training, and support to former child laborers in this district.`,
  ],
  [
    `Facilitating <span class="text-green-300">health awareness</span> and community-based medical centers for slum communities in <span class="text-green-300">Guntur</span>, Andhra Pradesh.`,
    `Operating <span class="text-green-300">wellness centers</span> with free check-ups and medicines to improve health in this city.`,
  ],
  [
    `Providing a safe and nurturing <span class="text-green-300">Children's Home</span> for vulnerable girls in <span class="text-green-300">Guntur</span>, Andhra Pradesh.`,
    `Giving new life and educational opportunities to abandoned girls in this supportive district.`,
  ],
  [
    `Empowering poor and marginalized communities in rural and urban areas of <span class="text-green-300">Andhra Pradesh</span> and <span class="text-green-300">Telangana</span>.`,
    `Our <span class="text-green-300">community-based development</span> programs foster sustainable progress throughout these states.`,
    `Focusing on <span class="text-green-300">education</span>, capacity building, and participatory development.`,
  ],
  [
    `Providing <span class="text-green-300">emergency relief</span> and support to disaster victims in <span class="text-green-300">Kerala</span> and <span class="text-green-300">Andhra Pradesh</span>.`,
    `Our rapid response ensures urgent aid and recovery measures in times of need across these affected regions.`,
  ],
];

const imageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } },
  exit: { opacity: 0, transition: { duration: 1, ease: "easeInOut" } },
};

const textVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeIn" } },
};

export default function Hero() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex(
        (prevIndex) => (prevIndex + 1) % slideshowImages.length
      );
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
      {/* Image Slideshow Background */}
      <div className="absolute inset-0">
        {slideshowImages.map((imageUrl, index) => (
          <motion.img
            key={imageUrl}
            src={imageUrl}
            alt={`Serving Communities - Image ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            variants={imageVariants}
            initial="initial"
            animate={index === currentSlideIndex ? "animate" : "exit"}
            exit="exit"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 to-emerald-900/60 z-10"></div>
      </div>
      {/* Video Background (Commented Out) */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-emerald-900/80 z-10"></div>
        <video
          className="absolute w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div> */}
      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Static Title */}
        <motion.h1
          className="text-3xl sm:text-4xl font-bold mb-4 leading-tight text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The Bharath Abhyudaya Seva Samithi (BASS)
        </motion.h1>

        {/* Dynamic Subtext with Highlighting */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlideIndex}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={textVariants}
            className="mb-8"
          >
            {slideshowContext[currentSlideIndex]?.map((line, index) => (
              <motion.p
                key={index}
                className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed text-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                dangerouslySetInnerHTML={{ __html: line }}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a
            href="#"
            className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-full text-lg font-bold transition-colors transform hover:scale-105 duration-200"
          >
            Donate Now
          </a>
          <a
            href="#"
            className="px-8 py-3 bg-white text-green-700 hover:bg-gray-100 rounded-full text-lg font-bold transition-colors transform hover:scale-105 duration-200"
          >
            Learn More
          </a>
        </motion.div>
      </div>
      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2,
        }}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </div>
  );
}
