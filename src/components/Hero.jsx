import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          
          {/* Text Section */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Transform Your <span className="text-amber-500">Fitness Journey</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Personalized training plans, expert guidance, and motivation to help you get stronger, healthier, and more confident.
            </p>
            
            {/* Stats */}
            <div className="flex justify-center md:justify-start gap-6 mt-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-500">500+</div>
                <div className="text-sm text-gray-400">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-500">10+</div>
                <div className="text-sm text-gray-400">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-500">98%</div>
                <div className="text-sm text-gray-400">Success</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-amber-500 text-amber-500 rounded-lg hover:bg-amber-500 hover:text-white transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
              alt="Personal trainer working with client"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}