import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import node from '../assets/node.png'

const Skills = () => {
  return (
    <div
      className="text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-4 items-center
    md:flex md:justify-between md:items-center border border-white p-6 mt-6"
    >
      <h2 className="text-white text-2xl md:text-4xl font-bold m-4 glow-text ">
        My Tech Stack
      </h2>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] ">
        <img src={html} alt="" width={100} height={100} />
        <p className="mt-2">HTML</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={css} alt="" width={100} height={100} />
        <p className="mt-2">CSS</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={javascript} alt="" width={100} height={100} />
        <p className="mt-2">Javascript</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={react} alt="" width={100} height={100} />
        <p className="mt-2">React Js</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={node} alt="" width={100} height={100} />
        <p className="mt-2">Node Js</p>
      </div>
    </div>
  )
}

export default Skills
