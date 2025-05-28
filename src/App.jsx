import { useEffect } from "react";
import {
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
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"


function App() {
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

  useEffect(() => {
    // SEO Meta tags
    document.title =
      "Miami Personal Training | Professional Fitness Coaching in Miami, FL";

    const metaDescription =
      document.querySelector('meta[name="description"]') ||
      document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Transform your body with Miami's premier personal training services. Customized workout plans, nutrition coaching, and expert guidance. Call 877-392-4370 for a free consultation.";
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }

    const metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content =
      "Miami personal trainer, fitness coaching Miami, weight loss Miami, strength training, nutrition coaching, personal training near me";
    document.head.appendChild(metaKeywords);

    return () => {
      if (document.head.contains(metaKeywords)) {
        document.head.removeChild(metaKeywords);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero section will be built separately */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About Miami Personal Training
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over 10 years of experience, we're dedicated to helping you
              achieve your fitness goals through personalized training programs
              and unwavering support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-amber-500 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Certified Trainers
              </h3>
              <p className="text-gray-600">
                All our trainers are certified professionals with extensive
                experience in fitness and nutrition.
              </p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-amber-500 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Personalized Plans
              </h3>
              <p className="text-gray-600">
                Every workout and nutrition plan is tailored specifically to
                your goals and fitness level.
              </p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-amber-500 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
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
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
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
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-amber-500 group hover:transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-amber-500 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <button className="text-amber-600 font-semibold flex items-center hover:text-amber-700 transition duration-300 group">
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients
              have to say about their transformation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-bold text-gray-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <Gallery /> */}
      <Gallery />
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get Started Today
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your life? Contact us today for a free
              consultation and let's discuss your fitness goals.
            </p>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </section>

      {/* Footer component will be added by your brother */}
      <Footer />
    </div>
  );
}

export default App;
