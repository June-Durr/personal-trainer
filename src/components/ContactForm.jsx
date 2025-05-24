import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  ChevronRight,
  Dumbbell,
  Target,
  Users,
  Award,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const services = [
    {
      title: "Personal Training",
      description:
        "One-on-one customized workout sessions tailored to your fitness goals",
      icon: <Target className="w-8 h-8" />,
    },
    {
      title: "Group Training",
      description:
        "Small group sessions for motivation and cost-effective training",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Nutrition Coaching",
      description:
        "Comprehensive nutrition plans to complement your fitness journey",
      icon: <Award className="w-8 h-8" />,
    },
    {
      title: "Strength Training",
      description:
        "Build muscle, increase strength, and improve overall performance",
      icon: <Dumbbell className="w-8 h-8" />,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Amazing results in just 3 months! The personalized approach really made the difference.",
      rating: 5,
    },
    {
      name: "Mike Rodriguez",
      text: "Professional, knowledgeable, and motivating. Couldn't ask for a better trainer!",
      rating: 5,
    },
    {
      name: "Emily Chen",
      text: "The nutrition guidance along with training helped me achieve my dream body.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary text-white shadow-lg fixed w-full top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Dumbbell className="w-8 h-8 text-secondary" />
              <h1 className="text-2xl font-bold">Miami Personal Training</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="hover:text-secondary transition duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-secondary transition duration-300"
              >
                About
              </a>
              <a
                href="#services"
                className="hover:text-secondary transition duration-300"
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="hover:text-secondary transition duration-300"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="hover:text-secondary transition duration-300"
              >
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                <a
                  href="#home"
                  className="hover:text-secondary transition duration-300 py-2"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="hover:text-secondary transition duration-300 py-2"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="hover:text-secondary transition duration-300 py-2"
                >
                  Services
                </a>
                <a
                  href="#testimonials"
                  className="hover:text-secondary transition duration-300 py-2"
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  className="hover:text-secondary transition duration-300 py-2"
                >
                  Contact
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 bg-gradient-to-br from-primary to-gray-800 text-white"
      >
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                Transform Your Body, Transform Your Life
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Professional personal training in Miami. Get the results you've
                always wanted with customized workout plans and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary">Start Your Journey</button>
                <button className="btn-secondary">Free Consultation</button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-secondary/20 rounded-full p-8 backdrop-blur-sm">
                <Dumbbell className="w-64 h-64 text-secondary mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              About Miami Personal Training
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over 10 years of experience, we're dedicated to helping you
              achieve your fitness goals through personalized training programs
              and unwavering support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-secondary rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                Certified Trainers
              </h3>
              <p className="text-gray-600">
                All our trainers are certified professionals with extensive
                experience in fitness and nutrition.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                Personalized Plans
              </h3>
              <p className="text-gray-600">
                Every workout and nutrition plan is tailored specifically to
                your goals and fitness level.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                Community Support
              </h3>
              <p className="text-gray-600">
                Join a supportive community of like-minded individuals on their
                fitness journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of fitness services to help you
              reach your goals, no matter where you're starting from.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-secondary"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-secondary">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <button className="text-secondary font-semibold flex items-center hover:text-yellow-500 transition duration-300">
                      Learn More <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients
              have to say about their transformation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-secondary fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-bold text-primary">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Simplified */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Get Started Today
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your life? Contact us today for a free
              consultation and let's discuss your fitness goals.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                Contact Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-secondary" />
                  <span className="text-gray-700">(305) 555-0123</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-secondary" />
                  <span className="text-gray-700">
                    info@miamipersonaltraining.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-secondary" />
                  <span className="text-gray-700">
                    123 Fitness Street, Miami, FL 33101
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-secondary" />
                  <span className="text-gray-700">
                    Mon-Fri: 6AM-10PM, Sat-Sun: 8AM-8PM
                  </span>
                </div>
              </div>
              <div className="text-center mt-8">
                <button className="btn-primary">Contact Us Today</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Dumbbell className="w-6 h-6 text-secondary" />
                <h3 className="text-xl font-bold">Miami Personal Training</h3>
              </div>
              <p className="text-gray-300">
                Transform your body and life with professional personal training
                in Miami.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a
                    href="#home"
                    className="hover:text-secondary transition duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-secondary transition duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-secondary transition duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-secondary transition duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Personal Training</li>
                <li>Group Training</li>
                <li>Nutrition Coaching</li>
                <li>Strength Training</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>(305) 555-0123</p>
                <p>info@miamipersonaltraining.com</p>
                <p>
                  123 Fitness Street
                  <br />
                  Miami, FL 33101
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Miami Personal Training. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
