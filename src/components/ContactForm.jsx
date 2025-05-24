import { useState, useRef } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

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

    // Simulate form submission for now
    setTimeout(() => {
      setStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully. We'll get back to you soon!",
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
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-primary mb-6">
        Send us a Message
      </h3>

      {status.message && (
        <div
          className={`mb-6 p-4 rounded-lg flex items-start space-x-3 ${
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
          <p className="text-sm">{status.message}</p>
        </div>
      )}

      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="user_name"
              className="block text-sm font-medium text-gray-700 mb-2"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition duration-300"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label
              htmlFor="user_email"
              className="block text-sm font-medium text-gray-700 mb-2"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition duration-300"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="user_phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="user_phone"
              name="user_phone"
              value={formData.user_phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition duration-300"
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Subject *
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition duration-300"
            >
              <option value="">Select a subject</option>
              <option value="Personal Training Inquiry">
                Personal Training Inquiry
              </option>
              <option value="Group Training">Group Training</option>
              <option value="Nutrition Coaching">Nutrition Coaching</option>
              <option value="Free Consultation">Free Consultation</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition duration-300 resize-vertical"
            placeholder="Tell us about your fitness goals, current fitness level, and any questions you have..."
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-secondary hover:bg-yellow-500 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-lg transition duration-300 flex items-center justify-center space-x-2"
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
  );
};

export default ContactForm;
