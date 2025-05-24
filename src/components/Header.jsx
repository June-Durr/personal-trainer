import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "#home", label: "HOME" },
    { href: "#about", label: "ABOUT" },
    { href: "#services", label: "SERVICES" },
    { href: "#testimonials", label: "TESTIMONIALS" },
    { href: "#contact", label: "CONTACT" },
  ];

  // Handle scroll effects and active section detection
  useEffect(() => {
    const handleScroll = () => {
      // Header background on scroll
      setIsScrolled(window.scrollY > 50);

      // Active section detection
      const sections = navLinks.map((link) => link.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* SEO-optimized structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Miami Personal Training",
            description:
              "Professional personal training services in Miami. Transform your body with customized workout plans and expert guidance.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Fitness Street",
              addressLocality: "Miami",
              addressRegion: "FL",
              postalCode: "33101",
              addressCountry: "US",
            },
            telephone: "877-392-4370",
            url: "https://miamipersonaltraining.com",
            sameAs: [
              "https://www.facebook.com/miamipersonaltraining",
              "https://www.instagram.com/miamipersonaltraining",
            ],
            serviceArea: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 25.7617,
                longitude: -80.1918,
              },
              geoRadius: 50000,
            },
          }),
        }}
      />

      <header
        className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100/50"
            : "bg-transparent backdrop-blur-none"
        }`}
        role="banner"
      >
        <nav
          className="container mx-auto px-6 lg:px-12"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="flex justify-between items-center h-16 lg:h-18">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-lg flex items-center justify-center shadow-sm">
                <div className="w-4 h-4 lg:w-5 lg:h-5 bg-white rounded-sm"></div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-sm lg:text-lg xl:text-xl font-bold text-gray-900 tracking-tight leading-none">
                  PERSONAL TRAINING
                </h1>
                <p className="text-xs lg:text-sm text-gray-600 font-medium tracking-widest uppercase leading-none hidden sm:block">
                  The Luxury of Fitness
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative text-xs xl:text-sm font-medium tracking-wider transition-all duration-300 py-2 px-1 group ${
                    activeSection === link.href.slice(1)
                      ? "text-yellow-600"
                      : `${
                          isScrolled ? "text-gray-700" : "text-gray-800"
                        } hover:text-yellow-600`
                  }`}
                  aria-current={
                    activeSection === link.href.slice(1) ? "page" : undefined
                  }
                >
                  {link.label}
                  {/* Dynamic underline */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 transform transition-all duration-300 ${
                      activeSection === link.href.slice(1)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
              <a
                href="tel:877-392-4370"
                className={`flex items-center space-x-2 font-medium transition-colors duration-300 text-xs xl:text-sm ${
                  isScrolled
                    ? "text-yellow-600 hover:text-yellow-700"
                    : "text-yellow-700 hover:text-yellow-800"
                }`}
                aria-label="Call Miami Personal Training"
              >
                <Phone className="w-3 h-3 xl:w-4 xl:h-4" />
                <span>877.392.4370</span>
              </a>
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-medium px-4 xl:px-6 py-2 xl:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-xs xl:text-sm">
                Schedule Assessment
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative w-8 h-8 bg-gray-100/80 hover:bg-gray-200/80 rounded-lg flex items-center justify-center transition-colors duration-300"
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-5 h-5">
                <span
                  className={`absolute top-0 left-0 w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 top-2" : ""
                  }`}
                />
                <span
                  className={`absolute top-2 left-0 w-5 h-0.5 bg-gray-700 transition-opacity duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute top-4 left-0 w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 top-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 border-t border-gray-100/50 bg-white/95 backdrop-blur-lg rounded-b-xl mx-4">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-left text-sm font-medium tracking-wider transition-colors duration-300 py-2 px-4 rounded-lg ${
                      activeSection === link.href.slice(1)
                        ? "text-yellow-600 bg-yellow-50"
                        : "text-gray-700 hover:text-yellow-600 hover:bg-yellow-50"
                    }`}
                    aria-current={
                      activeSection === link.href.slice(1) ? "page" : undefined
                    }
                  >
                    {link.label}
                  </button>
                ))}

                {/* Mobile CTA Buttons */}
                <div className="pt-3 border-t border-gray-100 space-y-3 px-4">
                  <a
                    href="tel:877-392-4370"
                    className="flex items-center space-x-3 text-yellow-600 font-medium text-sm"
                    aria-label="Call Miami Personal Training"
                  >
                    <Phone className="w-4 h-4" />
                    <span>877.392.4370</span>
                  </a>
                  <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-medium py-3 rounded-full transition-all duration-300 shadow-md text-sm">
                    Schedule Assessment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-16 lg:h-18" />
    </>
  );
};

export default Header;
