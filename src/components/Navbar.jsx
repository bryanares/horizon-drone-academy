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
      <nav className="bg-gray-50 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              to="/"
              onClick={closeMenu}
              className="text-xl text-gray-600 font-bold tracking-wide"
            >
              Horizon Aviation Adventure
            </Link>

            {/* Hamburger button (mobile only) */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-sky-600 focus:outline-none"
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
                      ? "bg-gray-50 text-gray-600"
                      : "text-gray-600 hover: hover:text-sky-600"
                      }`}
                  >
                    {label}
                  </Link>
                ))}

                {/* Contact Us button (opens modal instead of routing) */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover: hover:text-sky-600 transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-50 px-4 pb-3 space-y-2">
            {[{ to: "/", label: "Home" },
            { to: "/about", label: "About us" },
            { to: "/training", label: "Drone Training" }].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={closeMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive(to)
                  ? "text-gray-600"
                  : "text-gray-600 hover:text-sky-600"
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
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-sky-600 transition-colors"
            >
              Contact Us
            </button>
          </div>
        )}
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-[9999]">

          <div className="bg-gray-50 rounded-xl p-6 w-full max-w-md relative shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-sky-600"
            >
              ✕
            </button>
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Talk to Us
            </h2>
            <form className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Your First Name"
                  className="border rounded-full px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-sky-600 text-sm"
                />
                <input
                  type="text"
                  placeholder="Your Last Name"
                  className="border rounded-full px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-sky-600 text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border rounded-full px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-sky-600 text-sm"
                />
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="border rounded-full px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-sky-600 text-sm"
                />
              </div>
              <input
                type="text"
                placeholder="Your Message"
                className="border rounded-full px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-sky-600 text-sm"
              />
              <p className="px-1 text-xs text-gray-500">
                By submitting this form, I agree to the{" "}
                <a href="#" className="text-sky-600 hover:underline">
                  privacy policy
                </a>
                .
              </p>
              <button
                type="submit"
                className="text-sm bg-sky-700 text-white rounded-full py-2 px-6 mt-2 hover:bg-sky-600 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
