"use client";
import { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  // ChevronRight,
} from "lucide-react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import AboutSection from "@/components/About";
import ProgramsSection from "@/components/Programs";

// Testimonial data
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

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

export default function NGOWebsite() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [scrolled, setScrolled] = useState(false);

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

  const testimonialRef = useRef(null);
  // const testimonialInView = useInView(testimonialRef, { threshold: 0.1 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-teal-50 text-gray-800 overflow-x-hidden">
      <Navbar />
      <Hero />

      <AboutSection />

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

      <ProgramsSection />

      {/* Testimonials */}
      <motion.section
        ref={testimonialRef}
        variants={sectionVariants}
        initial="hidden"
        className="py-16 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Stories of Growth</h2>
            <div className="w-24 h-1 bg-amber-300 mx-auto mt-4"></div>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="overflow-hidden rounded-xl relative h-64">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-500 ease-in-out absolute inset-0 ${
                    index === currentTestimonial ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl h-full border border-white/20 shadow-lg">
                    <div className="text-3xl mb-6 text-amber-300">&ldquo;</div>
                    <p className="text-xl mb-6">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center mr-4 text-emerald-800 font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-amber-200">{testimonial.relation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-amber-300 scale-125"
                      : "bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl overflow-hidden shadow-xl md:flex">
            <div className="md:w-1/2 p-12 flex items-center justify-center">
              <img
                src="slider/home for girls.jpg"
                alt="Children playing in a lush environment"
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 2C6.477 2 2 6.477 2 12a10 10 0 005.293 8.708L12 22l4.707-1.292A10 10 0 0022 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
                <span className="text-lg font-bold">GreenHope</span>
              </div>
              <p className="text-gray-400">
                Empowering children growth through education, care, and love.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    Aims and Objectives
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 text-amber-400 mr-2" />
                  <span className="text-gray-400">
                    123 Garden Path, Green City
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-amber-400 mr-2" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-amber-400 mr-2" />
                  <span className="text-gray-400">grow@greenhope.org</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">
                Newsletter
              </h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  type="button"
                  onClick={() => console.log("Subscribing to newsletter")}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors"
                >
                  Subscribe
                </button>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-bold mb-3">Follow Our Growth</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
            <p>© {new Date().getFullYear()} GreenHope. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
