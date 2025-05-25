export default function Hero() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Achieve Your <span className="text-blue-500">Fitness Goals</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Personalized training plans, expert guidance, and motivation to help you get stronger, healthier, and more confident.
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <a href="#contact" className="px-6 py-3 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition">
              Get Started
            </a>
            <a href="#services" className="px-6 py-3 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition">
              Learn More
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1599058917212-d750089bc07c?auto=format&fit=crop&w=800&q=80"
            alt="Personal trainer"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}