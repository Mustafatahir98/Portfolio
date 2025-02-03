import React from 'react'
import heroImg from '../assets/Image.jfif'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx-auto py-8 bg-black mt-20' id='home'>
     <div className='mx-auto my-auto w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-gradient-to-r from-orange-400 to-red-600 p-2 shadow-xl rounded-full flex justify-center items-center overflow-hidden'>
      <img src={heroImg} alt='heroImg' className='w-full h-full object-cover rounded-full'/>
      </div>
      <div className='col-span-2 px-5 py-auto'>
        <h1 className='text-white text-3xl sm:text-5xl lg:text-7xl font-extrabold'>
          <span className='primary-color'>I'm a</span> <br/>
          <TypeAnimation sequence={[
            'Wordpress Dev',
            1000,
            'PHP Developer',
            1000,
            'MERN Stack Dev',
            1000,
          ]}
          wrapper='span'
          speed={50}
          repeat={Infinity}
          />
        </h1>
        <p className='text-white sm:text-lg my-8 lg:text-xl'>
        My name is Mustafa Tahir. I have over 3 years of experience in WordPress, more than 2 years in React.js and the MERN stack, and about 1 year of experience with Python. I also have experience managing WHM servers and handling clients directly.
        </p>
        <div className='my-8'>
        <a href='https://drive.google.com/file/d/1ke9JYe_oFKXzc91tAEv70zoKrvKp0ta3/view?usp=sharing' download className='px-6 py-3 w-full rounded-xl mr-4 
    bg-gradient-to-br from-orange-500 to-red-500 text-white'>
    Download CV
</a>


          
          <a href='#contact' className='px-8 py-3 w-full rounded-xl mr-4 border border-gray-400 
          hover:bg-gradient-to-br from-orange-500 to-red-500 text-white hover:border-none'>
            Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Hero
