import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";


const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative text-white h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=1080&fit=crop')`
        }}
      >
        {/* Gradient overlay only at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/50 to-transparent"></div>

        {/* Content positioned at bottom with better contrast */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col justify-end h-full pb-20">
            <div className="text-center">
              {/* Text with shadow for better readability */}
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
                Welcome to Horizon Drone Academy
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-lg">
                Master the skies with professional drone training and aviation education
              </p>

              {/* Enhanced CTA with better styling */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/training"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-xl hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
                >
                  Start Your Training
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Us
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Horizon Drone Academy is a pioneering institution in unmanned aerial systems, recognized as one of the most trusted names in the drone and aviation training industry. With over a decade of experience, we’ve equipped thousands of students with the skills and certifications needed to excel in the rapidly growing drone sector.
              </p>
              <p className="text-lg text-gray-600">
                Backed by state-of-the-art technology and a commitment to safety and excellence, we empower individuals and organizations to harness the full potential of drone technology confidently and effectively.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop"
                alt="Drone training session with instructor and student"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-blue-900 text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Students Trained</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive training programs designed for all skill levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <img
                src="https://images.pexels.com/photos/34310168/pexels-photo-34310168.jpeg"
                alt="Drone pilot training session"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Drone Pilot Training
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn to operate drones safely and professionally with our comprehensive training programs. Master flight controls, navigation, and emergency procedures.
                </p>
                <Link
                  to="/training#pilot-training"
                  className="text-blue-900 font-semibold hover:text-blue-700 transition-colors text-sm"
                >
                  View Training Program →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop"
                alt="Drone photography session"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Drone Photography
                </h3>
                <p className="text-gray-600 mb-4">
                  Master aerial photography techniques and capture stunning images from above. Learn composition, lighting, and camera settings for professional results.
                </p>
                <Link
                  to="/training#photography"
                  className="text-blue-900 font-semibold hover:text-blue-700 transition-colors text-sm"
                >
                  View Training Program →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2100075/pexels-photo-2100075.jpeg"
                alt="Aerial videography production"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Aerial Videography
                </h3>
                <p className="text-gray-600 mb-4">
                  Create professional aerial videos with advanced filming and editing techniques. Learn cinematic movements, storytelling, and post-production workflows.
                </p>
                <Link
                  to="/training#videography"
                  className="text-blue-900 font-semibold hover:text-blue-700 transition-colors text-sm"
                >
                  View Training Program →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <img
                src="https://images.pexels.com/photos/19895780/pexels-photo-19895780.jpeg"
                alt="Drone assembly workshop"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Drone Assembly
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn to build and customize drones from components to finished aircraft. Understand electronics, motors, flight controllers, and frame construction.
                </p>
                <Link
                  to="/training#assembly"
                  className="text-blue-900 font-semibold hover:text-blue-700 transition-colors text-sm"
                >
                  View Training Program →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <img
                src="https://images.pexels.com/photos/810493/pexels-photo-810493.jpeg"
                alt="Drone maintenance workshop"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Drone Maintenance
                </h3>
                <p className="text-gray-600 mb-4">
                  Master drone maintenance and repair techniques to keep your equipment in top condition. Learn troubleshooting, component replacement, and preventive care.
                </p>
                <Link
                  to="/training#maintenance"
                  className="text-blue-900 font-semibold hover:text-blue-700 transition-colors text-sm"
                >
                  View Training Program →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <img
                src="https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg"
                alt="Flight safety training"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Flight Safety Training
                </h3>
                <p className="text-gray-600 mb-4">
                  Essential safety protocols and emergency procedures for safe drone operations. Learn weather assessment, airspace regulations, and risk management.
                </p>
                <Link
                  to="/training#safety"
                  className="text-blue-900 font-semibold hover:text-blue-700 transition-colors text-sm"
                >
                  View Training Program →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get in Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Phone */}
          <div>
            <div className="flex justify-center mb-2 text-blue-800 text-3xl">📞</div>
            <h3 className="font-semibold text-gray-800 mb-1">Call Us</h3>
            <a
              href="tel:+254700000000"
              className="text-blue-700 hover:text-blue-900 font-medium"
            >
              +254 700 000 000
            </a>
          </div>

          {/* Email */}
          <div>
            <div className="flex justify-center mb-2 text-blue-800 text-3xl">✉️</div>
            <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
            <a
              href="mailto:info@skytechaviation.co.ke"
              className="text-blue-700 hover:text-blue-900 font-medium"
            >
              info@skytechaviation.co.ke
            </a>
          </div>

          {/* Location */}
          <div>
            <div className="flex justify-center mb-2 text-blue-800 text-3xl">📍</div>
            <h3 className="font-semibold text-gray-800 mb-1">Visit Us</h3>
            <a
              href="https://maps.google.com/?q=Wilson+Airport+Nairobi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 font-medium"
            >
              Wilson Airport, Nairobi
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-200"></div>

        {/* Social Links */}
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-gray-800 mb-3">Follow Us</h3>
          <div className="flex space-x-6 text-2xl text-blue-700">
            <a
              href="https://facebook.com/skytechaviation"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-900 transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/skytechaviation"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-900 transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/skytechaviation"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-900 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-900 transition-colors"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
