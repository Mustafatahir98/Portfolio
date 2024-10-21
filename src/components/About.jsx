import React from 'react'
import aboutImg from '../assets/about-4.jpg'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
      <div className="grid md:grid-cols-2 sm:py-16">
        <div className="text-left flex flex-col h-full justify-start py-3 md:py-0"> 
          <div className="mx-6">
            <h2 className="font-bold mb-6 primary-color text-[30px]">About Me</h2>
            <ul className="text-base lg:text-lg list-none">
            <li className="mb-2 pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-500 before:text-[36px]">Proficient in WordPress, PHP, C++, Python, and the MERN Stack.</li>
<li className="mb-2 pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-500 before:text-[36px]">Skilled in using Monday.com for task management, including creating and assigning tasks to ensure efficient project execution.</li>
<li className="mb-2 pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-500 before:text-[36px]">Experienced in setting up and managing CI/CD workflows, including creating pipelines and using GitHub Actions for automation.</li>
<li className="mb-2 pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-500 before:text-[36px]">Proficient in backend development using Node.js and Python Flask.</li>
<li className="mb-2 pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-500 before:text-[36px]">Expert in WordPress speed optimization, resolving accessibility issues, and creating custom plugins and themes tailored to specific requirements.</li>
<li className="mb-2 pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-500 before:text-[36px]">Experienced in implementing OAuth 2.0 for third-party API integrations and setting up cron jobs for task automation.</li>
            </ul>
          </div>
        </div>
        <img className="mx-auto rounded-lg py-8 md:py-0" src={aboutImg} width={450} height={450} alt='' />
      </div>
    </div>
  )
}

export default About