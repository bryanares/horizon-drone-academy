import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import droneTrainingImg from '../assets/images/instructor1.jpg';
import dronePhotographyImg from '../assets/images/photography-2.jpg';
import droneMainenanceImg from '../assets/images/maintenance-2.jpg';

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
              <h1 className="text-4xl md:text-6xl font-normal mb-6 text-white drop-shadow-2xl">
                Welcome to Horizon Aviation Adventure
              </h1>
              <p className="font-light text-xl md:text-2xl mb-8 text-white drop-shadow-lg">
                Master the skies with professional drone training and aviation education
              </p>

              {/* Enhanced CTA with better styling */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/training"
                  className="bg-white text-blue-900 px-8 py-4 rounded-full font-normal text-xl hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
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
              <h2 className="text-xl md:text-2xl font-normal text-sky-600 mb-6">
                About Us
              </h2>
              <p className="text-lg font-light text-gray-600 mb-6">
                Horizon Aviation Adventure is a pioneering institution in unmanned aerial systems, recognized as one of the most trusted names in the drone and aviation training industry. With over a decade of experience, we’ve equipped thousands of students with the skills and certifications needed to excel in the rapidly growing drone sector.
              </p>
              <p className="text-lg font-light text-gray-600 mb-6">
                Backed by state-of-the-art technology and a commitment to safety and excellence, we empower individuals and organizations to harness the full potential of drone technology confidently and effectively.
              </p>

              {/* Read More Link */}
              <Link
                to="/about"
                className="inline-block text-sky-600 font-semibold hover:text-sky-400 transition-colors text-sm"
              >
                Read More →
              </Link>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop"
                alt="Drone training session with instructor and student"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-normal text-sky-600 mb-6">
              Our Services
            </h2>
            <p className="font-light text-lg text-gray-600">
              Take your holiday to new heights with our expert drone services.

            </p>
            <p className="font-light text-lg text-gray-600">

              Join our 5-week drone adventure program packed with hands-on training, thrilling flights, innovation and unforgettable experiences.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <img
                src={droneTrainingImg}
                alt="Drone pilot training session"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-normal text-gray-900 mb-2">
                  Remote Pilot Training
                </h3>
                <p className="font-light text-gray-600 mb-4">
                  Learn to operate drones safely and professionally with our comprehensive training programs. Master flight controls, navigation, and emergency procedures.
                </p>
                <Link
                  to="/training#pilot-training"
                  className="text-sky-600 font-semibold hover:text-sky-400 transition-colors text-sm"
                >
                  View Training Program →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <img
                src={dronePhotographyImg}
                alt="Drone photography session"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-normal text-gray-900 mb-2">
                  Holiday Drone Program
                </h3>
                <p className="font-light text-gray-600 mb-4">
                  Take your aviation journey to the next level with our Holiday Drone Training program. Join our 5-week drone adventure program packed with hands-on training, thrilling flights, innovation and unforgettable experiences.
                </p>
                <Link
                  to="/training#photography"
                  className="text-sky-600 font-semibold hover:text-sky-400 transition-colors text-sm"
                >
                  View Training Program →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <img
                src={droneMainenanceImg}
                alt="Drone maintenance workshop"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-normal text-gray-900 mb-2">
                  Drone Maintenance
                </h3>
                <p className="font-light text-gray-600 mb-4">
                  Master drone maintenance and repair techniques to keep your equipment in top condition. Learn troubleshooting, component replacement, and preventive care.
                </p>
                <Link
                  to="/training#maintenance"
                  className="text-sky-600 font-semibold hover:text-sky-400 transition-colors text-sm"
                >
                  View Training Program →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
