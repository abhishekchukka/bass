import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut", delay: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut", delay: 0.4 },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // More concise viewport setting
      variants={sectionVariants}
      className="py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-green-600 mb-4 relative inline-block">
            <span className="relative z-10">About Us</span>
            <div className="absolute -bottom-2 left-1/3 right-1/3 h-1.5 bg-gradient-to-r from-green-500 to-teal-500 rounded-full -z-10" />
          </h2>
          <p className="text-gray-700 text-lg mt-6 max-w-3xl mx-auto leading-relaxed font-light">
            Founded in 1978, Bharath Abhyudaya Seva Samithi (BASS) is dedicated
            to empowering marginalized communities.
          </p>
        </div>

        <div className="md:flex items-center gap-12">
          <motion.div
            variants={imageVariants}
            className="md:w-1/2 mb-12 md:mb-0 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="relative rounded-lg overflow-hidden">
              <div className="absolute -left-6 -top-6 w-20 h-20 bg-green-100 rounded-lg -z-10 opacity-70" />
              <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-green-300 rounded-lg -z-10 opacity-70" />
              <img
                src="cover.jpg"
                alt="BASS community outreach program"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </motion.div>

          <motion.div variants={textVariants} className="md:w-1/2 space-y-6">
            <h3 className="font-serif text-3xl font-bold text-green-600">
              Bharath Abhyudaya Seva Samithi (BASS)
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg font-light">
              BASS was established by Chuka Peter Paul, and continues its legacy
              under the leadership of Mrs. Garnepudi Prasanthi.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <span className="font-semibold text-green-500">Our Focus:</span>{" "}
                Social, educational, healthcare, and emergency relief.
              </li>
              <li>
                <span className="font-semibold text-green-500">
                  Special Emphasis:
                </span>{" "}
                Improving children lives through education.
              </li>
              <li>
                <span className="font-semibold text-green-500">Regions:</span>{" "}
                Andhra Pradesh and Telangana, India.
              </li>
            </ul>
            <div className="pt-6">
              <a
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-full font-semibold transition-all duration-300 hover:bg-green-600 hover:shadow-lg hover:scale-105"
              >
                Learn More About Our Journey
                <ArrowRight className="ml-3 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
