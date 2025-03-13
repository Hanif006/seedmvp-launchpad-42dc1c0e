
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <span className="text-2xl font-bold text-seedmvp-blue">
              Seed<span className="text-seedmvp-accent">MVP</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-base font-medium ${
                  isActive
                    ? "text-seedmvp-blue"
                    : "text-gray-700 hover:text-seedmvp-blue transition-colors"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-base font-medium ${
                  isActive
                    ? "text-seedmvp-blue"
                    : "text-gray-700 hover:text-seedmvp-blue transition-colors"
                }`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-base font-medium ${
                  isActive
                    ? "text-seedmvp-blue"
                    : "text-gray-700 hover:text-seedmvp-blue transition-colors"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-base font-medium ${
                  isActive
                    ? "text-seedmvp-blue"
                    : "text-gray-700 hover:text-seedmvp-blue transition-colors"
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          <div className="hidden md:block">
            <Button asChild>
              <Link to="/submit-idea">Submit Your Idea</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-seedmvp-blue focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-base font-medium py-2 ${
                  isActive
                    ? "text-seedmvp-blue"
                    : "text-gray-700 hover:text-seedmvp-blue"
                }`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-base font-medium py-2 ${
                  isActive
                    ? "text-seedmvp-blue"
                    : "text-gray-700 hover:text-seedmvp-blue"
                }`
              }
              onClick={closeMenu}
            >
              Services
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-base font-medium py-2 ${
                  isActive
                    ? "text-seedmvp-blue"
                    : "text-gray-700 hover:text-seedmvp-blue"
                }`
              }
              onClick={closeMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-base font-medium py-2 ${
                  isActive
                    ? "text-seedmvp-blue"
                    : "text-gray-700 hover:text-seedmvp-blue"
                }`
              }
              onClick={closeMenu}
            >
              Contact
            </NavLink>
            <Button asChild className="w-full mt-2">
              <Link to="/submit-idea" onClick={closeMenu}>
                Submit Your Idea
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
