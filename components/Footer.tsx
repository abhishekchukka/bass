import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative text-white py-16">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/bg-white.jpg')",
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          backgroundBlendMode: "overlay",
        }}
      />

      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center rounded-t-xl"
        style={{
          opacity: 0.8,
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Vision and Logo */}
          <div>
            <div className="flex items-center mb-6">
              <Image src="/logo1.png" alt="Logo" width={100} height={100} />
            </div>

            <h3 className="text-xl font-bold mb-4 text-emerald-400">
              Our Vision
            </h3>
            <p className="text-gray-200 mb-6">
              We envision a more healthier and peaceful environment for people
              to live a good life.
            </p>

            <h4 className="text-lg font-semibold mb-4 text-emerald-400">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-emerald-600 text-white p-2 rounded-full hover:bg-emerald-500 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-emerald-600 text-white p-2 rounded-full hover:bg-emerald-500 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-emerald-600 text-white p-2 rounded-full hover:bg-emerald-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-emerald-600 text-white p-2 rounded-full hover:bg-emerald-500 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-emerald-400 border-b border-emerald-600 pb-2">
              Quick Links
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              <a
                href="#"
                className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center"
              >
                <span className="text-emerald-400 mr-2">•</span>Home
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center"
              >
                <span className="text-emerald-400 mr-2">•</span>About Us
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center"
              >
                <span className="text-emerald-400 mr-2">•</span>Programs
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center"
              >
                <span className="text-emerald-400 mr-2">•</span>Gallery
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center"
              >
                <span className="text-emerald-400 mr-2">•</span>Donate
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center"
              >
                <span className="text-emerald-400 mr-2">•</span>Volunteer
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center"
              >
                <span className="text-emerald-400 mr-2">•</span>Success Stories
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center"
              >
                <span className="text-emerald-400 mr-2">•</span>Contact
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-emerald-400 border-b border-emerald-600 pb-2">
              Contact Details
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-emerald-400 mr-2 mt-1 flex-shrink-0" />
                <span>
                  The Bharath Abhyudaya Seva Samithi, 12th lane,
                  Srinivasaraothota Guntur-522 004 Andhra Pradesh, India.
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-400 mr-2 flex-shrink-0" />
                <span>Support: +91 99858 87047</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-400 mr-2 flex-shrink-0" />
                <span>Support: +0863-2357736</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-400 mr-2 flex-shrink-0" />
                <span>Support: +91 93907 36466</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-400 mr-2 flex-shrink-0" />
                <span>Email: bassindia78@yahoo.com</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-400 mr-2 flex-shrink-0" />
                <span>Email: bassindia78@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-400 mr-2 flex-shrink-0" />
                <span>Email: bass1978@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-emerald-800 mt-12 pt-6 text-center">
          <p className="text-emerald-200">
            © {new Date().getFullYear()} The Bharath Abhyudaya Seva Samithi
            (BASS). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
