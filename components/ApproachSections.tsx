import React from "react";
import { motion } from "framer-motion";

const VisionMissionApproachSection = () => {
  const cardVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="mt-20 space-y-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Vision Section */}
        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden rounded-xl shadow-md group"
        >
          <img
            src="slider/vision.jpg"
            alt="Our Vision"
            className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/70 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white text-center p-4">
              <h4 className="font-serif text-2xl font-semibold mb-2 text-green-400">
                Our Vision
              </h4>
              <p className="text-lg font-medium">
                To improve the quality of life for children, women, elderly, and
                families...
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden rounded-xl shadow-md group"
        >
          <img
            src="slider/mission.jpg"
            alt="Our Mission"
            className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/70 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white text-center p-4">
              <h4 className="font-serif text-2xl font-semibold mb-2 text-teal-400">
                Our Mission
              </h4>
              <p className="text-lg font-medium">
                To educate and empower around 3,000 children and 20,000
                families...
              </p>
            </div>
          </div>
        </motion.div>

        {/* Approach Section */}
        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden rounded-xl shadow-md group"
        >
          <img
            src="slider/approach.jpg"
            alt="Our Approach"
            className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/70 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white text-center p-4">
              <h4 className="font-serif text-2xl font-semibold mb-2 text-blue-400">
                Our Approach
              </h4>
              <p className="text-lg font-medium">
                People-centered development with a bottom-up approach...
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VisionMissionApproachSection;
