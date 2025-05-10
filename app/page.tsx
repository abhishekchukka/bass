"use client";
import { useState, useEffect } from "react";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
// import { motion } from "framer-motion";
import AboutSection from "@/components/About";
import ProgramsSection from "@/components/Programs";
// import VisionMissionApproachSection from "@/components/ApproachSections";
import Footer from "@/components/Footer";
import Image from "next/image";
import TestimonialsSection from "@/components/Testimonial";

const testimonials = [
  {
    id: 1,
    quote:
      "The support my daughter received nurtured her growth like a young sapling. She's now blossoming in school and full of confidence.",
    name: "Sarah M.",
    relation: "Parent",
  },
  {
    id: 2,
    quote:
      "After joining the nature program, my son's enthusiasm for learning grew exponentially. I'm forever grateful for this community.",
    name: "Michael L.",
    relation: "Parent",
  },
  {
    id: 3,
    quote:
      "The dedicated staff truly care about nurturing each child. It's not just education—it's cultivating the whole child's potential.",
    name: "Priya K.",
    relation: "Volunteer",
  },
];

export default function NGOWebsite() {
  const [scrolled, setScrolled] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  console.log(currentTestimonial);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    const handleScroll = () => {
      // Check if we've scrolled past the hero section
      const isScrolled = window.scrollY > window.innerHeight - 80;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // const impactRef = useRef(null);
  // const impactInView = useInView(impactRef, { threshold: 0.1 });

  // const servicesRef = useRef(null);
  // const servicesInView = useInView(servicesRef, { threshold: 0.1 });

  // const testimonialRef = useRef(null);
  // const testimonialInView = useInView(testimonialRef, { threshold: 0.1 });

  return (
    <div className="min-h-screen  text-gray-800 overflow-x-hidden">
      <Navbar />
      <Hero />
      {/* <div className="py-16 bg-gradient-to-r from-teal-50 to-green"> */}
      <AboutSection />
      <ProgramsSection />
      {/* </div> */}

      {/* <motion.section
        ref={impactRef}
        variants={sectionVariants}
        initial="hidden"
        animate={impactInView ? "visible" : "hidden"}
        className="py-16 bg-gradient-to-r from-teal-50 to-green-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Growing Impact
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactMetrics.map((metric) => (
              <motion.div
                key={metric.id}
                variants={cardVariants}
                initial="hidden"
                animate={impactInView ? "visible" : "hidden"}
                className="bg-gradient-to-br from-white to-green-50 p-8 rounded-xl shadow-lg border border-emerald-100 hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-4xl font-bold text-emerald-600 mb-2">
                  {metric.number}
                </h3>
                <p className="text-gray-700">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section> */}

      <TestimonialsSection />
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl overflow-hidden shadow-xl md:flex">
            <div className="md:w-1/2 p-12 flex items-center justify-center">
              <Image
                src="/slider/home for girls.jpg"
                alt="Children playing in a lush environment"
                width={500}
                height={500}
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="md:w-1/2 p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">
                Help us cultivate a brighter future
              </h2>
              <p className="mb-8 text-lg">
                Your contribution can help us provide the essential resources
                for children to grow and thrive. Join us in making a lasting
                impact.
              </p>
              <a
                href="#"
                className="inline-block px-8 py-4 bg-amber-400 text-emerald-800 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-md"
              >
                Sow a Seed Today
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
