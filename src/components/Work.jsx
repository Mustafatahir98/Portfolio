import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import proj1 from '../assets/proj1.jpg';
import proj3 from '../assets/proj3.jpg';
import proj5 from '../assets/proj5.jpg';
import proj6 from '../assets/proj6.jpg';
import proj8 from '../assets/proj8.PNG';
import proj9 from '../assets/entity.png';
import proj10 from '../assets/proj9.jpg';
import proj11 from '../assets/proj11.jpg';
import proj12 from '../assets/proj12.png';
import proj13 from '../assets/proj13.jpg';
import proj14 from '../assets/proj14.jpg';
import proj15 from '../assets/proj15.jpg';
import proj16 from '../assets/proj16.PNG';
import proj17 from '../assets/proj17.PNG';
import proj18 from '../assets/proj18.PNG';
import proj19 from '../assets/proj19.PNG';
import proj20 from '../assets/proj20.PNG';
import proj21 from '../assets/proj21.PNG';
import proj22 from '../assets/proj22.PNG';
import proj23 from '../assets/proj23.png';
import proj24 from '../assets/proj24.png';
import proj25 from '../assets/proj25.png';
import proj26 from '../assets/proj26.png';
import proj27 from '../assets/proj27.png';
import proj28 from '../assets/proj28.png';
import proj29 from '../assets/proj29.png';
import proj30 from '../assets/proj30.png';

// Lazy Image Component with Intersection Observer
const LazyImage = React.memo(({ src, alt, className, priority = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (priority) return; // Skip intersection observer for priority images

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px', // Load images 50px before they enter viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoaded(true);
  }, []);

  return (
    <div ref={imgRef} className={`${className} relative overflow-hidden`}>
      {/* Placeholder while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-400">
          <div className="text-center">
            <div className="text-2xl mb-2">📷</div>
            <div className="text-sm">Image not available</div>
          </div>
        </div>
      )}
      
      {/* Actual image */}
      {(isInView || priority) && (
        <img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      )}
    </div>
  );
});

LazyImage.displayName = 'LazyImage';

// Optimized Project Card Component
const ProjectCard = React.memo(({ project, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Only render if visible (for virtual scrolling effect)
  if (!isVisible) {
    return (
      <div className="flex-shrink-0 w-full">
        <div className="bg-gray-900 rounded-2xl h-96 animate-pulse"></div>
      </div>
    );
  }

  return (
    <div 
      className="flex-shrink-0 w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl border border-gray-800">
        <div className="relative h-48 sm:h-56 md:h-64 group overflow-hidden">
          {project.img ? (
            <LazyImage
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              priority={index < 3} // First 3 images load immediately
            />
          ) : (
            <div className='bg-gray-800 w-full h-full flex items-center justify-center text-white text-xl font-semibold'>
              {project.title}
            </div>
          )}
          
          {/* Hover overlay with better performance */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}></div>
          
          {/* Action button */}
          <div className={`absolute bottom-4 left-4 right-4 transform transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 font-semibold shadow-lg"
              >
                →
                Visit Site
              </a>
            )}
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{project.title}</h3>
          
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {project.frameworks.split(', ').map((framework, idx) => (
                <span key={idx} className="px-3 py-1 bg-orange-600/20 text-orange-400 rounded-full text-sm font-medium border border-orange-600/30">
                  {framework}
                </span>
              ))}
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

const Work = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  // Debounced resize handler
  const resizeTimeoutRef = useRef(null);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      
      resizeTimeoutRef.current = setTimeout(() => {
        if (window.innerWidth < 768) {
          setItemsPerSlide(1);
        } else if (window.innerWidth < 1024) {
          setItemsPerSlide(2);
        } else {
          setItemsPerSlide(3);
        }
      }, 150);
    };

    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => {
      window.removeEventListener('resize', updateItemsPerSlide);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, []);

  // Memoized and optimized projects data
  const projects = useMemo(() => ({
    wordpress: [
      {
        img: proj23,
        title: "Japanos Dubai",
        frameworks: "WordPress",
        description: "Japanos Dubai is a modern Japanese fusion restaurant offering a unique blend of traditional flavors and contemporary dining in the heart of Dubai. Experience sushi, ramen, and street-style dishes with a creative twist.",
        link: "https://japanosdubai.com/"
      },
      {
        img: proj24,
        title: "Bike Box MT",
        frameworks: "WordPress",
        description: "Bike Box MT offers premium bike storage solutions, parts, and gear for cycling enthusiasts, ensuring protection and convenience for riders across Montana.",
        link: "https://bikeboxmt.com/"
      },
      {
        img: proj25,
        title: "Taskerz",
        frameworks: "WordPress",
        description: "Taskerz is a digital agency specializing in smart solutions for web development, branding, and growth marketing tailored for modern businesses.",
        link: "https://taskerz.com/"
      },
      {
        img: proj26,
        title: "Taskerz Fiberglass",
        frameworks: "WordPress",
        description: "Taskerz Fiberglass provides high-quality fiberglass fabrication services for industrial, commercial, and residential applications with durability and precision.",
        link: "https://fiberglass.taskerz.com/"
      },
      {
        img: proj27,
        title: "Make Customers for Life",
        frameworks: "WordPress",
        description: "Make Customers for Life is a business coaching platform focused on helping entrepreneurs build lasting relationships, grow sales, and scale sustainably.",
        link: "https://www.makecustomersforlife.com/"
      },
      {
        img: proj28,
        title: "Delawalla Biz",
        frameworks: "WordPress",
        description: "Delawalla Biz offers strategic consulting and business development services to help entrepreneurs launch, grow, and optimize their ventures successfully.",
        link: "https://www.delawallabiz.com/"
      },
      {
        img: proj29,
        title: "The Perfect Lawn",
        frameworks: "WordPress",
        description: "The Perfect Lawn provides professional lawn care, landscaping, and maintenance services, delivering lush, healthy lawns and beautiful outdoor spaces.",
        link: "https://theperfectlawn1.com/"
      },
      {
  img: proj30,
  title: "Best Biz Tech",
  frameworks: "WordPress",
  description: "Best Biz Tech is a tech-focused business consulting firm offering innovative solutions in IT, automation, and digital transformation for small to mid-sized enterprises.",
  link: "https://www.bestbiztech.com/"
}
,
      {
        img: proj16,
        title: "Personal Drivers",
        frameworks: "WordPress",
        description: "Professional driving service website with booking features and secure payment integration.",
        link: "https://www.personaldrivers.com/"
      },
      {
        img: proj17,
        title: "Lotus Psychiatry and Wellness",
        frameworks: "WordPress",
        description: "A clean and elegant psychiatry & wellness clinic site with appointment booking.",
        link: "https://lotuspsychiatryandwellness.com/"
      },
      {
        img: proj18,
        title: "Soho Tech Services",
        frameworks: "WordPress",
        description: "Technology services company website with sleek design and service showcases.",
        link: "https://sohotechservices.com/"
      },
      {
        img: proj19,
        title: "Soho Ad Labs",
        frameworks: "WordPress",
        description: "Advertising and marketing solutions website with portfolio showcase.",
        link: "https://sohoadlabs.com/"
      },
      {
        img: proj20,
        title: "Lotus Laboratories",
        frameworks: "WordPress",
        description: "Medical lab services platform with lab info & contact forms.",
        link: "https://lotus-laboratories.com/"
      },
      {
        img: proj21,
        title: "Marovis",
        frameworks: "WordPress",
        description: "Product-based site showcasing innovative IPTV streaming tools.",
        link: "https://marovis.com/"
      },
      {
        img: proj22,
        title: "Professional Drivers",
        frameworks: "WordPress",
        description: "Another domain for driver booking services with enhanced features.",
        link: "https://www.professionaldrivers.com/"
      }
    ],
    backend: [
      {
        img: proj8,
        title: "Toll & Gas Calculator",
        frameworks: "PHP Core",
        description: "A toll and gas calculator to estimate costs for road trips using TollGuru and Mapbox APIs.",
        link: "https://www.personaldrivers.com/road-trip/tools/gas-calculator/"
      },
      {
        img: proj9,
        title: "Entity Extractor",
        frameworks: "PHP Core",
        description: "A tool to extract and analyze entities from text using TextRazor and Google Search API."
      },
      {
        img: proj10,
        title: "Performance Reporting System",
        frameworks: "PHP Core, Node JS",
        description: "A performance reporting system that integrates PageSpeed API for comprehensive reporting."
      },
      {
        img: proj11,
        title: "Image Meta Content Generator",
        frameworks: "Python, Flask",
        description: "A tool for generating image metadata using the OpenAI API and other Python libraries."
      },
      {
        img: proj12,
        title: "NearBy Amtrak Stations Search",
        frameworks: "PHP",
        description: "A search tool for finding nearby Amtrak stations with easy access to station details."
      },
      {
        img: proj13,
        title: "Visitor Device Info",
        frameworks: "PHP Core",
        description: "A tool that collects and displays device information for visitors on the site."
      },
      {
        img: proj14,
        title: "Scraping Meta Content Tool",
        frameworks: "Node JS",
        description: "A content scraping tool that gathers meta-information from web pages for analysis."
      },
      {
        img: proj15,
        title: "CF7 SalesMessage SMS Integration",
        frameworks: "PHP Core",
        description: "An integration tool that sends SMS messages upon form submission using SalesMessage API."
      }
    ],
    react: [
      {
        img: proj1,
        title: "Virtual Reality Frontend APP",
        frameworks: "React JS",
        description: "A VR frontend application built with React JS for immersive virtual reality experiences.",
        link: "https://virtualreality-nine.vercel.app/"
      },
      {
        img: proj3,
        title: "MERN Medicare Booking App",
        frameworks: "React JS, Node JS, Express JS",
        description: "A complete Medicare booking application integrated with Stripe for secure payments.",
        link: "https://medicare-booking-frontend.vercel.app/"
      },
      {
        img: proj5,
        title: "Educational Website",
        frameworks: "React JS, Web3Forms",
        description: "An educational website built with React JS and Web3Forms for handling user submissions.",
        link: "https://edusity-nu.vercel.app/"
      },
      {
        img: proj6,
        title: "Netflix Clone",
        frameworks: "React JS, Firebase",
        description: "A Netflix clone using Firebase for authentication and TMDB API for movie data.",
        link: "https://netflix-clone-psi-three-66.vercel.app/"
      }
    ],
    nextjs: []
  }), []);

  const categories = useMemo(() => [
    { id: 'all', label: 'All Projects', count: Object.values(projects).flat().length },
    { id: 'wordpress', label: 'WordPress', count: projects.wordpress.length },
    { id: 'backend', label: 'Backend', count: projects.backend.length },
    { id: 'react', label: 'React JS', count: projects.react.length },
    { id: 'nextjs', label: 'Next JS', count: projects.nextjs.length }
  ], [projects]);

  const currentProjects = useMemo(() => {
    if (activeCategory === 'all') {
      return Object.values(projects).flat();
    }
    return projects[activeCategory] || [];
  }, [activeCategory, projects]);

  const totalSlides = Math.ceil(currentProjects.length / itemsPerSlide);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const handleCategoryChange = useCallback((category) => {
    setActiveCategory(category);
    setCurrentIndex(0);
  }, []);

  // Get visible projects for current slide
  const visibleProjects = useMemo(() => {
    const startIndex = currentIndex * itemsPerSlide;
    const endIndex = startIndex + itemsPerSlide;
    return currentProjects.slice(startIndex, endIndex);
  }, [currentProjects, currentIndex, itemsPerSlide]);

  return (
    <div className='max-w-7xl mx-auto p-5 bg-gray-950 min-h-screen' id='work'>
      <div className='pb-12 text-center'>
        <h2 className='bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent text-5xl mb-4 font-bold'>
          Portfolio
        </h2>
        <p className='text-gray-300 text-lg lg:text-xl mb-8'>
          Explore my work across different technologies and platforms
        </p>
        
        {/* Category Tabs */}
        <div className='flex flex-wrap justify-center gap-2 mb-8'>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm sm:text-base ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category.label}
              <span className='ml-2 px-2 py-1 bg-gray-700 text-xs rounded-full'>
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Slider Container */}
      <div className='relative'>
        {/* Navigation Buttons */}
        {totalSlides > 1 && (
          <>
            <button
              onClick={prevSlide}
              className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110'
              aria-label="Previous slide"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110'
              aria-label="Next slide"
            >
              →
            </button>
          </>
        )}

        {/* Projects Grid */}
        <div className='px-12'>
          <div className={`grid gap-6 ${
            itemsPerSlide === 1 ? 'grid-cols-1' : 
            itemsPerSlide === 2 ? 'grid-cols-2' : 
            'grid-cols-3'
          }`}>
            {visibleProjects.map((project, index) => (
              <ProjectCard 
                key={`${activeCategory}-${currentIndex}-${index}`}
                project={project} 
                index={currentIndex * itemsPerSlide + index}
                isVisible={true}
              />
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        {totalSlides > 1 && (
          <div className='flex justify-center mt-8 space-x-2'>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Empty State */}
      {currentProjects.length === 0 && (
        <div className='text-center py-20'>
          <p className='text-gray-400 text-lg'>No projects found in this category.</p>
          <p className='text-gray-500 text-sm mt-2'>More projects coming soon!</p>
        </div>
      )}
    </div>
  );
};

export default Work;
