import { useState, useRef } from "react";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    setTimeout(() => {
      setStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours!",
      });
      setFormData({
        user_name: "",
        user_email: "",
        user_phone: "",
        subject: "",
        message: "",
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Get Started Today
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your life? Contact us today for a free
            consultation and let's discuss your fitness goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information - Ultra Sleek */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-8 tracking-wide">
                Contact Information
              </h3>

              <div className="space-y-5">
                <a
                  href="tel:877-392-4370"
                  className="group flex items-center space-x-4 hover:bg-yellow-50/30 py-2 px-3 rounded-md transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-yellow-400/20 border border-yellow-400/30 rounded-full flex items-center justify-center group-hover:bg-yellow-400/30 transition-colors duration-300">
                    <Phone className="w-3.5 h-3.5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-0.5">
                      PHONE
                    </p>
                    <p className="text-base font-medium text-gray-900 group-hover:text-yellow-600 transition-colors">
                      877.392.4370
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@miamipersonaltraining.com"
                  className="group flex items-center space-x-4 hover:bg-yellow-50/30 py-2 px-3 rounded-md transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-yellow-400/20 border border-yellow-400/30 rounded-full flex items-center justify-center group-hover:bg-yellow-400/30 transition-colors duration-300">
                    <Mail className="w-3.5 h-3.5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-0.5">
                      EMAIL
                    </p>
                    <p className="text-base font-medium text-gray-900 group-hover:text-yellow-600 transition-colors">
                      info@miamipersonaltraining.com
                    </p>
                  </div>
                </a>

                <div className="group flex items-center space-x-4 hover:bg-yellow-50/30 py-2 px-3 rounded-md transition-all duration-300">
                  <div className="w-8 h-8 bg-yellow-400/20 border border-yellow-400/30 rounded-full flex items-center justify-center">
                    <MapPin className="w-3.5 h-3.5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-0.5">
                      LOCATION
                    </p>
                    <p className="text-base font-medium text-gray-900">
                      123 Fitness Street
                      <br />
                      Miami, FL 33101
                    </p>
                  </div>
                </div>

                <div className="group flex items-center space-x-4 hover:bg-yellow-50/30 py-2 px-3 rounded-md transition-all duration-300">
                  <div className="w-8 h-8 bg-yellow-400/20 border border-yellow-400/30 rounded-full flex items-center justify-center">
                    <Clock className="w-3.5 h-3.5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-0.5">
                      HOURS
                    </p>
                    <p className="text-base font-medium text-gray-900">
                      Mon-Fri: 6AM-10PM
                      <br />
                      Sat-Sun: 8AM-8PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ultra Minimal CTA */}
            <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-5 mt-8">
              <h4 className="text-lg font-medium mb-2 text-gray-900">
                Ready to Start?
              </h4>
              <p className="text-gray-600 text-sm mb-4 font-light">
                Book your free consultation today and take the first step
                towards your transformation.
              </p>
              <button className="bg-yellow-400/20 border border-yellow-400/30 text-yellow-700 font-medium px-4 py-2 rounded-full hover:bg-yellow-400/30 hover:border-yellow-400/40 transition-all duration-300 text-sm">
                Schedule Now
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 lg:p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Send us a Message
            </h3>
            <p className="text-gray-600 mb-6">
              Tell us about your fitness goals and we'll create a personalized
              plan for you.
            </p>

            {status.message && (
              <div
                className={`mb-6 p-4 rounded-xl flex items-start space-x-3 ${
                  status.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                )}
                <p className="text-sm font-medium">{status.message}</p>
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="user_name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="user_email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="user_phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="user_phone"
                    name="user_phone"
                    value={formData.user_phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="Personal Training Inquiry">
                      Personal Training Inquiry
                    </option>
                    <option value="Group Training">Group Training</option>
                    <option value="Nutrition Coaching">
                      Nutrition Coaching
                    </option>
                    <option value="Free Consultation">Free Consultation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 resize-vertical bg-gray-50 hover:bg-white"
                  placeholder="Tell us about your fitness goals, current fitness level, and any questions you have..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:transform-none"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
