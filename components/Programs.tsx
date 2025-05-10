import React from "react";
import { motion } from "framer-motion";
import {
  // BookOpen,
  Users,
  Heart,
  School,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
// import Image from "next/image";

// Fixed image URLs
const featuredPrograms = [
  {
    id: 1,
    title: "Child Education Initiatives",
    description:
      "Our education programs provide primary education, vocational training, and support to vulnerable children across multiple communities.",
    icon: <School className="w-10 h-10 text-blue-600" />,
    link: "/programs#education",
    image: "impact/childeducation.JPG", // Direct Download URL
  },
  {
    id: 2,
    title: "Healthcare & Medical Relief",
    description:
      "We operate health awareness camps and community-based wellness centers with free checkups and medicine distribution.",
    icon: <Heart className="w-10 h-10 text-red-600" />,
    link: "/programs#health",
    image: "impact/healthcare.jpg", // Direct Download URL
  },
  {
    id: 3,
    title: "Community Support Programs",
    description:
      "Working to transform marginalized communities by building confidence and promoting positive leadership development.",
    icon: <Users className="w-10 h-10 text-yellow-600" />,
    link: "/programs#community",
    image: "impact/communitu.JPG", // Direct Download URL
  },
  {
    id: 4,
    title: "Emergency Relief Services",
    description:
      "Providing immediate and long-term assistance to victims of natural disasters with food, shelter, and rebuilding support.",
    icon: <AlertTriangle className="w-10 h-10 text-orange-600" />,
    link: "/programs#emergency",
    image: "impact/emergency.JPG", // Direct Download URL
  },
];

const ProgramsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-green-600 mb-4 relative inline-block">
            <span className="relative z-10">Our Impact Areas</span>
            <div className="absolute -bottom-2 left-1/3 right-1/3 h-1.5 bg-gradient-to-r from-green-500 to-teal-500 rounded-full -z-10"></div>
          </h2>
          <p className="text-gray-700 mt-4 max-w-3xl mx-auto text-lg leading-relaxed font-light">
            Discover how we are making a difference through strategic programs
            focused on education, healthcare, community development, and
            emergency relief.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featuredPrograms.map((program) => (
            <motion.div
              key={program.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.01] flex flex-col"
            >
              <div className="relative">
                <img
                  src={program.image} // Using the modified URL here
                  alt={program.title}
                  className="w-full h-64  object-cover rounded-t-xl"
                />
                <div className="absolute inset-0 bg-black/20 rounded-t-xl"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-white rounded-full p-3 shadow-md">
                    {program.icon}
                  </div>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col items-start">
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
                  {program.description}
                </p>
                <a
                  href={program.link}
                  className="inline-flex items-center text-green-600 font-medium text-sm hover:text-green-700 transition-colors group"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <a
            href="/programs"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-full shadow-md hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
          >
            Explore All Programs
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
