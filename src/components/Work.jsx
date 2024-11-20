import React, { useState } from 'react';
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

const Work = () => {
  const [visibleProjects, setVisibleProjects] = useState(4); // Initially show 4 projects
  const projects = [
    {
      img: proj1,
      title: "Virtual Reality Frontend APP",
      frameworks: "React JS",
      styling: "Tailwind CSS",
      tools: "Visual Studio Code",
      description: "A VR frontend application built with React JS for immersive experiences.",
    },
    {
      img: proj3,
      title: "MERN Medicare Booking App with Stripe Payment",
      frameworks: "React JS, Node JS, Express JS",
      styling: "Tailwind CSS",
      tools: "Visual Studio Code, Postman",
      description: "A complete Medicare booking application integrated with Stripe for payments.",
    },
    {
      img: proj5,
      title: "React Js Educational Website",
      frameworks: "React JS, Web3Forms",
      styling: "CSS3",
      tools: "Visual Studio Code",
      description: "An educational website built with React JS and Web3Forms for handling user submissions.",
    },
    {
      img: proj6,
      title: "Netflix Clone With Firebase Authentication",
      frameworks: "React JS, Firebase",
      styling: "CSS3",
      tools: "Visual Studio Code",
      description: "A Netflix clone using Firebase for authentication and TMDB API for movie data.",
    },
    {
      img: proj8,
      title: "Toll & Gas Calculator",
      frameworks: "PHP Core",
      styling: "CSS & Bootstrap",
      tools: "Visual Studio Code",
      description: "A toll and gas calculator to estimate costs for road trips using TollGuru and Mapbox APIs.",
    },
    {
      img: proj9,
      title: "Entity Extractor",
      frameworks: "PHP Core",
      styling: "CSS & Bootstrap",
      tools: "Visual Studio Code",
      description: "A tool to extract and analyze entities from text using TextRazor and Google Search API.",
    },
    {
      img: proj10,
      title: "Performance Reporting System",
      frameworks: "PHP Core & Node JS",
      styling: "CSS & Bootstrap",
      tools: "Visual Studio Code",
      description: "A performance reporting system that integrates PageSpeed API for reporting.",
    },
    {
      img: proj11,
      title: "Image Meta Content Generator",
      frameworks: "Python (Flask)",
      styling: "CSS & Bootstrap",
      tools: "Visual Studio Code",
      description: "A tool for generating image metadata using the OpenAI API and other Python libraries.",
    },
    {
      img: proj12,
      title: "NearBy Amtrak Stations Search",
      frameworks: "PHP",
      styling: "CSS & Bootstrap",
      tools: "Visual Studio Code",
      description: "A search tool for finding nearby Amtrak stations with easy access to station details.",
    },
    {
      img: proj13,
      title: "Visitor Device Info",
      frameworks: "PHP Core",
      styling: "CSS & Bootstrap",
      tools: "Visual Studio Code",
      description: "A tool that collects and displays device information for visitors on the site.",
    },
    {
      img: proj14,
      title: "Scraping Meta Content Tool",
      frameworks: "Node JS",
      styling: "CSS & Bootstrap",
      tools: "Visual Studio Code",
      description: "A content scraping tool that gathers meta-information from web pages for analysis.",
    },
    {
      img: proj15,
      title: "CF7 SalesMessage Send SMS on form submission",
      frameworks: "PHP Core",
      styling: "CSS & Bootstrap",
      tools: "Visual Studio Code",
      description: "An integration tool that sends SMS messages upon form submission using SalesMessage API.",
    },
  ];

  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + 4); // Increase the number of visible projects by 4
  };

  return (
    <div className='max-w-[1200px] mx-auto p-5' id='work'>
      <div className='pb-8 text-center'>
        <h2 className='primary-color text-4xl mb-3 font-bold'>Work</h2>
        <p className='text-white sm:text-lg lg:text-xl'>
          Check out some of my recent work
        </p>
        <div className='mt-4'>
          <p className='text-orange-600 font-bold text-lg'>
            “Hover to get details about work”
          </p>
        </div>
      </div>

      <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-6'>
        {projects.slice(0, visibleProjects).map((project, index) => (
          <div key={index} className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[250px] sm:h-[300px] md:h-[400px] bg-cover relative">
            <img src={project.img} alt="Project Screenshot" className="w-full h-full object-cover" />
            <div className="opacity-0 group-hover:opacity-100 bg-black/90 absolute inset-0 flex flex-col justify-center items-center duration-500 ease-in-out transform translate-y-full translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 p-4 md:px-6 shadow-lg m-2 md:m-6 rounded-md">
              <span className="text-lg md:text-2xl font-bold primary-color tracking-wider text-center text-white">{project.title}</span>
              <ul className="text-sm md:text-base lg:text-lg list-none mt-1 md:mt-4">
                <li className="mb-2 text-white pl-6 md:pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-600 before:text-[24px] md:before:text-[36px]">
                  <span className='mr-2 font-bold text-orange-600'>Frameworks & Libraries:</span>{project.frameworks}
                </li>
                <li className="mb-2 text-white pl-6 md:pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-600 before:text-[24px] md:before:text-[36px]">
                  <span className='mr-2 font-bold text-orange-600'>CSS Styling:</span>{project.styling}
                </li>
                <li className="mb-2 text-white pl-6 md:pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-600 before:text-[24px] md:before:text-[36px]">
                  <span className='mr-2 font-bold text-orange-600'>Software & Tools:</span>{project.tools}
                </li>
                <li className="mb-2 text-white pl-6 md:pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-600 before:text-[24px] md:before:text-[36px]">
                  <span className='mr-2 font-bold text-orange-600'>Description:</span>{project.description}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      {visibleProjects < projects.length && (
        <div className="text-center mt-8">
          <button onClick={loadMoreProjects} className="px-4 py-2 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-full">
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default Work;
