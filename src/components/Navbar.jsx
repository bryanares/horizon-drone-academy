import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isActive = (path) => location.pathname === path;
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="bg-sky-900 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              to="/"
              onClick={closeMenu}
              className="text-xl font-bold tracking-wide"
            >
              Horizon Drone Academy
            </Link>

            {/* Hamburger button (mobile only) */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-blue-100 hover:text-white focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {[{ to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/training", label: "Drone Training" }].map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(to)
                      ? "bg-blue-800 text-white"
                      : "text-blue-100 hover:bg-blue-700 hover:text-white"
                      }`}
                  >
                    {label}
                  </Link>
                ))}

                {/* Contact Us button (opens modal instead of routing) */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-blue-100 hover:bg-blue-700 hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isOpen && (
          <div className="md:hidden bg-blue-800 px-4 pb-3 space-y-2">
            {[{ to: "/", label: "Home" },
            { to: "/training", label: "Drone Training" }].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={closeMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive(to)
                  ? "bg-blue-700 text-white"
                  : "text-blue-100 hover:bg-blue-600 hover:text-white"
                  }`}
              >
                {label}
              </Link>
            ))}

            {/* Mobile Contact Us button */}
            <button
              onClick={() => {
                setIsModalOpen(true);
                closeMenu();
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:bg-blue-600 hover:text-white transition-colors"
            >
              Contact Us
            </button>
          </div>
        )}
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-[9999]">

          <div className="bg-white rounded-xl p-6 w-full max-w-md relative shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Callback Request
            </h2>
            <form className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Your First Name *"
                  className="border rounded-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="text"
                  placeholder="Your Last Name *"
                  className="border rounded-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="email"
                  placeholder="Your Email *"
                  className="border rounded-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="text"
                  placeholder="Your Phone *"
                  className="border rounded-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <input
                type="text"
                placeholder="Your Message"
                className="border rounded-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <p className="text-xs text-gray-500">
                By submitting this form, I agree to the{" "}
                <a href="#" className="text-indigo-600 hover:underline">
                  privacy policy
                </a>
                .
              </p>
              <button
                type="submit"
                className="bg-indigo-900 text-white rounded-full py-2 px-6 mt-2 hover:bg-indigo-800 transition-all"
              >
                Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
