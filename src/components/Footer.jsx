import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-normal mb-2">Horizon Aviation Adventure</h3>
            <p className="font-light text-gray-300 mb-4">
              Your premier destination for professional drone training and aviation education.
            </p>
            <div className="font-extralight text-gray-400 text-sm space-y-2">
              <p>📍 KSD Business Park | Opp CITAM Church Embakasi</p>
              <p>📞 +254 793 259 697</p>
              <p>✉️ info@horizonadventure.co.ke</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-normal mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="font-light text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/training" className="font-light text-gray-300 hover:text-white transition-colors">
                  Drone Training
                </Link>
              </li>
              <li>
                <Link to="/about" className="font-light text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-md font-normal mb-3">Our Services</h4>
            <ul className="space-y-2 text-gray-300 text-sm font-light">
              <li>Holiday Drone Program</li>
              <li>Advanced Drone Program</li>
              <li>Hobbyist Licence</li>
              <li>Remote Pilot Licence (Multi-Rotor Rating)</li>
              <li>Remote Pilot Licence (Fixed Wing Rating)</li>
              <li>Specialized Training - Agriculture Rating</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 mt-8">
          <div className="text-center">
            <p className="font-light text-gray-400 text-sm">
              © {currentYear} Horizon Aviation Adventure. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
