import React, { useState, useMemo, useCallback } from 'react';
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

// Memoized project card component
const ProjectCard = React.memo(({ project, index }) => (
  <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[250px] sm:h-[300px] md:h-[400px] bg-cover relative">
    {project.img ? (
      <img 
        src={project.img} 
        alt={project.title}
        className="w-full h-full object-cover"
        loading={index > 3 ? "lazy" : "eager"}
      />
    ) : (
      <div className='bg-gray-900 w-full h-full flex items-center justify-center text-white text-xl font-semibold'>
        {project.title}
      </div>
    )}
    <div className="opacity-0 group-hover:opacity-100 bg-black/90 absolute inset-0 flex flex-col justify-center items-center duration-500 ease-in-out transform translate-y-full translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 p-4 md:px-6 shadow-lg m-2 md:m-6 rounded-md">
      <span className="text-lg md:text-2xl font-bold primary-color tracking-wider text-center text-white mb-2 md:mb-4">
        {project.title}
      </span>
      <ul className="text-sm md:text-base lg:text-lg list-none">
        <li className="mb-2 text-white pl-6 md:pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-600 before:text-[24px] md:before:text-[36px]">
          <span className='mr-2 font-bold text-orange-600'>Frameworks:</span>{project.frameworks}
        </li>
        <li className="mb-2 text-white pl-6 md:pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-600 before:text-[24px] md:before:text-[36px]">
          <span className='mr-2 font-bold text-orange-600'>Description:</span>{project.description}
        </li>
      </ul>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors duration-200"
        >
          Visit Site
        </a>
      )}
    </div>
  </div>
));

ProjectCard.displayName = 'ProjectCard';

const Work = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);
  
  // Memoize projects array to prevent recreation on every render
  const projects = useMemo(() => [
    {
      img: proj16,
      title: "Personal Drivers",
      frameworks: "WordPress",
      description: "Professional driving service website with booking features.",
      link: "https://www.personaldrivers.com/ "
    },
    {
      img: proj17,
      title: "Lotus Psychiatry and Wellness",
      frameworks: "WordPress",
      description: "A clean and elegant psychiatry & wellness clinic site.",
      link: "https://lotuspsychiatryandwellness.com/ "
    },
    {
      img: proj18,
      title: "Soho Tech Services",
      frameworks: "WordPress",
      description: "Technology services company website with sleek design.",
      link: "https://sohotechservices.com/ "
    },
    {
      img: proj19,
      title: "Soho Ad Labs",
      frameworks: "WordPress",
      description: "Advertising and marketing solutions website.",
      link: "https://sohoadlabs.com/ "
    },
    {
      img: proj20,
      title: "Lotus Laboratories",
      frameworks: "WordPress",
      description: "Medical lab services platform with lab info & contact forms.",
      link: "https://lotus-laboratories.com/ "
    },
    {
      img: proj21,
      title: "Marovis",
      frameworks: "WordPress",
      description: "Product-based site showcasing innovative tools.",
      link: "https://marovis.com/ "
    },
    {
      img: proj22,
      title: "Professional Drivers",
      frameworks: "WordPress",
      description: "Another domain for driver booking services.",
      link: "https://www.professionaldrivers.com/ "
    },
    {
      img: proj1,
      title: "Virtual Reality Frontend APP",
      frameworks: "React JS",
      description: "A VR frontend application built with React JS for immersive experiences.",
      link: "https://virtualreality-nine.vercel.app/ "
    },
    {
      img: proj3,
      title: "MERN Medicare Booking App with Stripe Payment",
      frameworks: "React JS, Node JS, Express JS",
      description: "A complete Medicare booking application integrated with Stripe for payments.",
      link: "https://medicare-booking-frontend.vercel.app/ "
    },
    {
      img: proj5,
      title: "React Js Educational Website",
      frameworks: "React JS, Web3Forms",
      description: "An educational website built with React JS and Web3Forms for handling user submissions.",
      link: "https://edusity-nu.vercel.app/ "
    },
    {
      img: proj6,
      title: "Netflix Clone With Firebase Authentication",
      frameworks: "React JS, Firebase",
      description: "A Netflix clone using Firebase for authentication and TMDB API for movie data.",
      link: "https://netflix-clone-psi-three-66.vercel.app/ "
    },
    {
      img: proj8,
      title: "Toll & Gas Calculator",
      frameworks: "PHP Core",
      description: "A toll and gas calculator to estimate costs for road trips using TollGuru and Mapbox APIs.",
      link: "https://www.personaldrivers.com/road-trip/tools/gas-calculator/ "
    },
    {
      img: proj9,
      title: "Entity Extractor",
      frameworks: "PHP Core",
      description: "A tool to extract and analyze entities from text using TextRazor and Google Search API.",
      link: ""
    },
    {
      img: proj10,
      title: "Performance Reporting System",
      frameworks: "PHP Core & Node JS",
      description: "A performance reporting system that integrates PageSpeed API for reporting.",
      link: ""
    },
    {
      img: proj11,
      title: "Image Meta Content Generator",
      frameworks: "Python (Flask)",
      description: "A tool for generating image metadata using the OpenAI API and other Python libraries.",
      link: ""
    },
    {
      img: proj12,
      title: "NearBy Amtrak Stations Search",
      frameworks: "PHP",
      description: "A search tool for finding nearby Amtrak stations with easy access to station details.",
      link: ""
    },
    {
      img: proj13,
      title: "Visitor Device Info",
      frameworks: "PHP Core",
      description: "A tool that collects and displays device information for visitors on the site.",
      link: ""
    },
    {
      img: proj14,
      title: "Scraping Meta Content Tool",
      frameworks: "Node JS",
      description: "A content scraping tool that gathers meta-information from web pages for analysis.",
      link: ""
    },
    {
      img: proj15,
      title: "CF7 SalesMessage Send SMS on form submission",
      frameworks: "PHP Core",
      description: "An integration tool that sends SMS messages upon form submission using SalesMessage API.",
      link: ""
    }
  ], []);

  // Memoize visible projects to prevent unnecessary slicing
  const visibleProjectsData = useMemo(() => 
    projects.slice(0, visibleProjects), 
    [projects, visibleProjects]
  );

  // Memoize load more function
  const loadMoreProjects = useCallback(() => {
    setVisibleProjects(prev => Math.min(prev + 4, projects.length));
  }, [projects.length]);

  const hasMoreProjects = visibleProjects < projects.length;

  return (
    <div className='max-w-[1200px] mx-auto p-5' id='work'>
      <div className='pb-8 text-center'>
        <h2 className='primary-color text-4xl mb-3 font-bold'>Work</h2>
        <p className='text-white sm:text-lg lg:text-xl'>Check out some of my recent work</p>
        <div className='mt-4'>
          <p className='text-orange-600 font-bold text-lg'>"Hover to get details about work"</p>
        </div>
      </div>

      <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-6'>
        {visibleProjectsData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      {hasMoreProjects && (
        <div className="text-center mt-8">
          <button 
            onClick={loadMoreProjects} 
            className="px-4 py-2 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-full transition-transform duration-200 hover:scale-105"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Work;

