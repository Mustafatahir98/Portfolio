import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import logo from '../assets/favicon.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const scrollToSection = (event, sectionId) => {
    event.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      if (nav) setNav(false)
    }
  }

  return (
    <div className="bg-black text-gray-400 max-w-[1200px] h-[70px] mx-auto flex justify-between items-center fixed top-0 left-0 right-0 z-50 border-b border-white">
      <a href="/">
        <div className="flex items-center">
          <img src={logo} alt="" width={40} height={30} />
          <h1 className="text-2xl font-bold primary-color ml-2">
           Mustafa Tahir
          </h1>
        </div>
      </a>
      <ul className="hidden md:flex text-[20px]">
        <li className="p-5 text-gradient-hover">
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>
            About
          </a>
        </li>
        <li className="p-5 text-gradient-hover">
          <a href="#work" onClick={(e) => scrollToSection(e, 'work')}>
            Work
          </a>
        </li>
        <li className="p-5 text-gradient-hover">
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
            Contact
          </a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden mr-6">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <div
        className={
          nav
            ? 'z-10 fixed h-full left-0 top-0 w-[70%] bg-[#202121] ease-in-out duration-500'
            : 'fixed left-[-100%]'
        }
      >
        <ul className="text-center justify-center text-[20px] mt-4">
          <li className="p-2 text-gradient-hover">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>
              Home
            </a>
          </li>
          <li className="p-2 text-gradient-hover">
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>
              About
            </a>
          </li>
          <li className="p-2 text-gradient-hover">
            <a href="#work" onClick={(e) => scrollToSection(e, 'work')}>
              Work
            </a>
          </li>
          <li className="p-2 text-gradient-hover">
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
