import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      text: "Amazing results in just 3 months! The personalized approach really made the difference. I've never felt stronger or more confident.",
      rating: 5,
      image: "/api/placeholder/80/80", // Placeholder - replace with actual images
      title: "Lost 30lbs, Gained Confidence",
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      text: "Professional, knowledgeable, and motivating. Couldn't ask for a better trainer! The nutrition guidance was game-changing.",
      rating: 5,
      image: "/api/placeholder/80/80",
      title: "Transformed My Lifestyle",
    },
    {
      id: 3,
      name: "Emily Chen",
      text: "The nutrition guidance along with training helped me achieve my dream body. The support system here is incredible!",
      rating: 5,
      image: "/api/placeholder/80/80",
      title: "Achieved Dream Body",
    },
    {
      id: 4,
      name: "David Thompson",
      text: "After years of struggling with consistency, this program finally clicked. The trainers understand how to keep you motivated.",
      rating: 5,
      image: "/api/placeholder/80/80",
      title: "Finally Found Consistency",
    },
    {
      id: 5,
      name: "Lisa Martinez",
      text: "Not just physical transformation, but mental too. I've learned so much about proper form and nutrition that I'll carry forever.",
      rating: 5,
      image: "/api/placeholder/80/80",
      title: "Complete Life Change",
    },
    {
      id: 6,
      name: "James Wilson",
      text: "The group training sessions are fantastic! Great energy, competitive spirit, and amazing results. Highly recommend!",
      rating: 5,
      image: "/api/placeholder/80/80",
      title: "Group Training Success",
    },
  ];

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, i) => (
      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about their transformation journey with Miami Personal
            Training.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 relative"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-secondary opacity-20 absolute top-4 right-4" />

              {/* Rating */}
              <div className="flex mb-4">{renderStars(testimonial.rating)}</div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their lives
            with our proven training methods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">Start Your Transformation</button>
            <button className="btn-secondary">
              Schedule Free Consultation
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
