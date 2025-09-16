import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Building2, Mail } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Block scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navigation = [
    { name: "Inicio", href: "/" },
    {
      name: "Servicios",
      href: "/servicios",
      dropdown: [
        {
          name: "Pavimento Industrial",
          href: "/servicios/pavimento-industrial",
        },
        { name: "Pavimento Deportivo", href: "/servicios/pavimento-deportivo" },
        {
          name: "Revestimientos Decorativos",
          href: "/servicios/revestimientos-decorativos",
        },
      ],
    },
    { name: "Proyectos", href: "/proyectos" },
    { name: "I+D+I", href: "/innovacion" },
    { name: "Nosotros", href: "/sobre-nosotros" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Building2
                className={`h-8 w-8 transition-colors ${
                  isScrolled ? "text-blue-700" : "text-white"
                }`}
              />
              <span
                className={`text-2xl font-bold transition-colors ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                GESPAVI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative group">
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-1 px-2 lg:px-3 py-2 rounded-md text-xs lg:text-lg font-medium transition-colors ${
                        isActive(item.href)
                          ? isScrolled
                            ? "text-blue-700"
                            : "text-blue-300"
                          : isScrolled
                          ? "text-gray-700 hover:text-blue-700"
                          : "text-white hover:text-blue-300"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
                    </Link>
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="py-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-2 lg:px-3 py-2 rounded-md text-lg font-medium transition-colors ${
                      isActive(item.href)
                        ? isScrolled
                          ? "text-blue-700"
                          : "text-blue-300"
                        : isScrolled
                        ? "text-gray-700 hover:text-blue-700"
                        : "text-white hover:text-blue-300"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contacto"
              className="bg-orange-500 hover:bg-orange-600 text-white px-3 lg:px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 lg:space-x-2"
            >
              <Mail className="h-4 w-4" />
              <span>Contacto</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`focus:outline-none p-2 transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-700"
                  : "text-white hover:text-blue-300"
              }`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto h-screen">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="space-y-1">
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="w-full text-left flex items-center justify-between px-4 py-3 rounded-lg text-lg font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isServicesOpen && (
                        <div className="pl-6 space-y-1 bg-gray-50 rounded-lg py-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block px-4 py-2 rounded-md text-base text-gray-600 hover:text-blue-700 hover:bg-white transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                        isActive(item.href)
                          ? "text-blue-700 bg-blue-50"
                          : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/contacto"
                className="block w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-lg text-center text-lg font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Solicitar Presupuesto
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
