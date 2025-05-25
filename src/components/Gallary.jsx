import  useEmblaCarousel  from 'embla-carousel-react';
import { useCallback } from 'react';
// import './Gallery.css';

const images = [
  'https://source.unsplash.com/800x500/?fitness,training',
  'https://source.unsplash.com/800x500/?gym,workout',
  'https://source.unsplash.com/800x500/?yoga,exercise',
  'https://source.unsplash.com/800x500/?personal,trainer',
];

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Client Progress Gallery</h2>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((src, index) => (
              <div key={index} className="min-w-full px-2">
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="rounded-lg shadow-md w-full object-cover h-[400px]"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-6">
          <button onClick={scrollPrev} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Prev</button>
          <button onClick={scrollNext} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Next</button>
        </div>
      </div>
    </section>
  );
}