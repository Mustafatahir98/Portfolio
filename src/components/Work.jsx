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
    { img: proj1, title: "Virtual Reality Frontend APP", link: "https://virtualreality-nine.vercel.app/" },
    { img: proj3, title: "MERN Medicare Booking App with Stripe Payment", link: "https://medicare-booking-frontend.vercel.app/" },
    { img: proj5, title: "React Js Educational Website", link: "https://edusity-nu.vercel.app/" },
    { img: proj6, title: "Netflix Clone With Firebase Authentication", link: "https://netflix-clone-psi-three-66.vercel.app/" },
    { img: proj8, title: "Toll & Gas Calculator", link: "https://www.personaldrivers.com/road-trip/tools/gas-calculator/" },
    { img: proj9, title: "Entity Extractor", link: "https://www.personaldrivers.com/entity-extractor/" },
    { img: proj10, title: "Performance Reporting System", link: "https://www.personaldrivers.com/" },
    { img: proj11, title: "Image Meta Content Generator", link: "https://www.personaldrivers.com/" },
    { img: proj12, title: "NearBy Amtrak Stations Search", link: "https://www.personaldrivers.com/" },
    { img: proj13, title: "Visitor Device Info", link: "https://www.personaldrivers.com/visitor-device-info/" },
    { img: proj14, title: "Scraping Meta Content Tool", link: "https://www.personaldrivers.com/" },
    { img: proj15, title: "CF7 SalesMessage Send SMS on form submission", link: "https://www.personaldrivers.com/" },
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
              <div className="pt-4 md:pt-6 text-center">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className='px-2 py-2 md:px-6 md:py-3 w-full rounded-xl mr-0 md:mr-4 bg-gradient-to-br from-orange-500 to-red-500 text-white'>
                  Live Link
                </a>
              </div>
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
