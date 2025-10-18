import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // lightweight icons

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
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
              {[
                { to: "/", label: "Home" },
                { to: "/training", label: "Drone Training" },
                { to: "/profile", label: "Profile" },
              ].map(({ to, label }) => (
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
            </div>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-800 px-4 pb-3 space-y-2">
          {[
            { to: "/", label: "Home" },
            { to: "/training", label: "Drone Training" },
            { to: "/profile", label: "Profile" },
          ].map(({ to, label }) => (
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
