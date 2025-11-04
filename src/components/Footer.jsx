import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-2">Horizon Drone Academy</h3>
            <p className="text-gray-300 mb-4">
              Your premier destination for professional drone training and aviation education.
            </p>
            <div className="text-gray-400 text-sm">
              <p>📍 Wilson Airport, Nairobi</p>
              <p>📞 +254 700 000 000</p>
              <p>✉️ info@skytechaviation.co.ke</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/training" className="text-gray-300 hover:text-white transition-colors">
                  Drone Training
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-md font-semibold mb-3">Our Services</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Drone Pilot Training</li>
              <li>Drone Photography</li>
              <li>Aerial Videography</li>
              <li>Drone Assembly</li>
              <li>Drone Maintenance</li>
              <li>Flight Safety Training</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 mt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Horizon Drone Academy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
