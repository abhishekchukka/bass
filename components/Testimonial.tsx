// Fixed Testimonials Section
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Your testimonials data
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

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-16 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Stories of Growth</h2>
          <div className="w-24 h-1 bg-amber-300 mx-auto mt-4"></div>
        </div>

        <div className="relative max-w-3xl mx-auto h-64 sm:h-56">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentTestimonial ? 1 : 0,
                zIndex: index === currentTestimonial ? 10 : 0,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
              style={{
                display: index === currentTestimonial ? "block" : "none",
              }}
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
            </motion.div>
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
    </motion.section>
  );
}
