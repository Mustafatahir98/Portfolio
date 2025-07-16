import React, { useState, useMemo, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

// Mock images for demonstration
const mockImages = {
  proj1: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
  proj3: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
  proj5: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
  proj6: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop',
  proj8: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
  proj9: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
  proj10: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  proj11: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
  proj12: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop',
  proj13: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop',
  proj14: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
  proj15: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=600&fit=crop',
  proj16: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
  proj17: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
  proj18: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
  proj19: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop',
  proj20: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
  proj21: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
  proj22: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop'
};

// Memoized project card component
const ProjectCard = React.memo(({ project, index }) => (
  <div className="flex-shrink-0 w-full md:w-80 lg:w-96 mx-2">
    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl border border-gray-800">
      <div className="relative h-48 sm:h-56 md:h-64 group overflow-hidden">
        <img 
          src={mockImages[`proj${index + 1}`] || mockImages.proj1} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading={index > 3 ? "lazy" : "eager"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 font-semibold shadow-lg"
            >
              <ExternalLink size={16} />
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
));

ProjectCard.displayName = 'ProjectCard';

const Work = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Categorized projects
  const projects = useMemo(() => ({
    wordpress: [
      {
        title: "Personal Drivers",
        frameworks: "WordPress",
        description: "Professional driving service website with booking features and secure payment integration.",
        link: "https://www.personaldrivers.com/"
      },
      {
        title: "Lotus Psychiatry and Wellness",
        frameworks: "WordPress",
        description: "A clean and elegant psychiatry & wellness clinic site with appointment booking.",
        link: "https://lotuspsychiatryandwellness.com/"
      },
      {
        title: "Soho Tech Services",
        frameworks: "WordPress",
        description: "Technology services company website with sleek design and service showcases.",
        link: "https://sohotechservices.com/"
      },
      {
        title: "Soho Ad Labs",
        frameworks: "WordPress",
        description: "Advertising and marketing solutions website with portfolio showcase.",
        link: "https://sohoadlabs.com/"
      },
      {
        title: "Lotus Laboratories",
        frameworks: "WordPress",
        description: "Medical lab services platform with lab info & contact forms.",
        link: "https://lotus-laboratories.com/"
      },
      {
        title: "Marovis",
        frameworks: "WordPress",
        description: "Product-based site showcasing innovative IPTV streaming tools.",
        link: "https://marovis.com/"
      },
      {
        title: "Professional Drivers",
        frameworks: "WordPress",
        description: "Another domain for driver booking services with enhanced features.",
        link: "https://www.professionaldrivers.com/"
      }
    ],
    backend: [
      {
        title: "Toll & Gas Calculator",
        frameworks: "PHP Core",
        description: "A toll and gas calculator to estimate costs for road trips using TollGuru and Mapbox APIs."
      },
      {
        title: "Entity Extractor",
        frameworks: "PHP Core",
        description: "A tool to extract and analyze entities from text using TextRazor and Google Search API."
      },
      {
        title: "Performance Reporting System",
        frameworks: "PHP Core, Node JS",
        description: "A performance reporting system that integrates PageSpeed API for comprehensive reporting."
      },
      {
        title: "Image Meta Content Generator",
        frameworks: "Python, Flask",
        description: "A tool for generating image metadata using the OpenAI API and other Python libraries."
      },
      {
        title: "NearBy Amtrak Stations Search",
        frameworks: "PHP",
        description: "A search tool for finding nearby Amtrak stations with easy access to station details."
      },
      {
        title: "Visitor Device Info",
        frameworks: "PHP Core",
        description: "A tool that collects and displays device information for visitors on the site."
      },
      {
        title: "Scraping Meta Content Tool",
        frameworks: "Node JS",
        description: "A content scraping tool that gathers meta-information from web pages for analysis."
      },
      {
        title: "CF7 SalesMessage SMS Integration",
        frameworks: "PHP Core",
        description: "An integration tool that sends SMS messages upon form submission using SalesMessage API."
      }
    ],
    react: [
      {
        title: "Virtual Reality Frontend APP",
        frameworks: "React JS",
        description: "A VR frontend application built with React JS for immersive virtual reality experiences.",
        link: "https://virtualreality-nine.vercel.app/"
      },
      {
        title: "MERN Medicare Booking App",
        frameworks: "React JS, Node JS, Express JS",
        description: "A complete Medicare booking application integrated with Stripe for secure payments.",
        link: "https://medicare-booking-frontend.vercel.app/"
      },
      {
        title: "Educational Website",
        frameworks: "React JS, Web3Forms",
        description: "An educational website built with React JS and Web3Forms for handling user submissions.",
        link: "https://edusity-nu.vercel.app/"
      },
      {
        title: "Netflix Clone",
        frameworks: "React JS, Firebase",
        description: "A Netflix clone using Firebase for authentication and TMDB API for movie data.",
        link: "https://netflix-clone-psi-three-66.vercel.app/"
      }
    ],
    nextjs: [
      // Add Next.js projects here when available
    ]
  }), []);

  const categories = [
    { id: 'all', label: 'All Projects', count: Object.values(projects).flat().length },
    { id: 'wordpress', label: 'WordPress', count: projects.wordpress.length },
    { id: 'backend', label: 'Backend', count: projects.backend.length },
    { id: 'react', label: 'React JS', count: projects.react.length },
    { id: 'nextjs', label: 'Next JS', count: projects.nextjs.length }
  ];

  const currentProjects = useMemo(() => {
    if (activeCategory === 'all') {
      return Object.values(projects).flat();
    }
    return projects[activeCategory] || [];
  }, [activeCategory, projects]);

  const itemsPerSlide = 3;
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

  const visibleProjects = useMemo(() => {
    const start = currentIndex * itemsPerSlide;
    return currentProjects.slice(start, start + itemsPerSlide);
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
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110'
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Projects Grid/Slider */}
        <div className='overflow-hidden mx-12'>
          <div 
            className='flex transition-transform duration-500 ease-in-out'
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${totalSlides * 100}%`
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className='w-full flex justify-center gap-6'>
                {currentProjects
                  .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                  .map((project, index) => (
                    <ProjectCard 
                      key={`${slideIndex}-${index}`} 
                      project={project} 
                      index={slideIndex * itemsPerSlide + index} 
                    />
                  ))}
              </div>
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
