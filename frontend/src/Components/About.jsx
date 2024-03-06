import React from 'react'
import { Link } from "react-router-dom"
import aboutIcon from "../assets/about.png"
import developerIcon from "../assets/developer.jpeg"
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialMedia = [
  {
    elementIcon: <FaLinkedin />,
    elementLink: "https://www.linkedin.com/in/vatsal-chauhan024/"
  },
  {
    elementIcon: <FaGithub/>,
    elementLink: "https://github.com/Vatsal-Chauhan024"
  }
]

const handleContact = () => {
  window.location = "mailto: adarsh.vc24@gmail.com"
}

const About = () => {
  return (
    <div className='bg-teal-100 min-h-screen pt-32'>
      <div className='px-4 lg:px-24'>
        <h1 className='text-black font-bold text-5xl leading-snug max-w-xl'>Know More About <span className='text-blue-700'>Owners</span></h1>
        <div className='mt-16 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0'>
          <div className="flex flex-col gap-8">
            <p className='text-base font-normal leading-snug tracking-normal text-black/65 text-justify  md:max-w-md  lg:max-w-lg xl:max-w-3xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae culpa ullam odio ipsum eaque at tenetur officiis amet, doloremque, assumenda natus maiores, dignissimos enim rerum soluta deleniti nihil. At, ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum consectetur ab ipsa officia excepturi magnam, blanditiis ipsum expedita autem repudiandae in quisquam cupiditate enim voluptatum maiores tempora, aliquam quo harum ratione. Maiores dignissimos neque exercitationem pariatur optio atque praesentium tempore harum! Veniam fugit vitae aliquid illo fuga, sequi non ad!</p>
            <button className='py-2 px-8 rounded bg-blue-700 text-white flex justify-center items-center hover:bg-black transition-all duration-300 w-fit'>Know More</button>
          </div>
          <div>
            <img src={aboutIcon} alt="error-about-icon" className='w-96 h-96' />
          </div>
        </div>
        <hr className='my-8 border border-solid border-black/30 rounded' />
        <h1 className='text-black font-bold text-5xl leading-snug max-w-xl mt-20'>Know More About <span className='text-blue-700'>Developer</span></h1>
        <div className='mt-16 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 pb-16'>
          <div className="flex flex-col gap-8">
            <p className='text-base font-normal leading-snug tracking-normal text-black/65 text-justify xl:max-w-3xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae culpa ullam odio ipsum eaque at tenetur officiis amet, doloremque, assumenda natus maiores, dignissimos enim rerum soluta deleniti nihil. At, ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum consectetur ab ipsa officia excepturi magnam, blanditiis ipsum expedita autem repudiandae in quisquam cupiditate enim voluptatum maiores tempora, aliquam quo harum ratione. Maiores dignissimos neque exercitationem pariatur optio atque praesentium tempore harum! Veniam fugit vitae aliquid illo fuga, sequi non ad!</p>
            <button className='py-2 px-8 rounded bg-blue-700 text-white flex justify-center items-center hover:bg-black transition-all duration-300 w-fit' onClick={handleContact}>Contact Me</button>
          </div>
          <div>
            <div className="bg-black/65 h-fit pt-4 pb-0.5 max-w-96 rounded">
              <div className='w-full overflow-hidden'>
                <img src={developerIcon} alt="error-developerIcon-icon" className='w-40 h-40 rounded-full mx-auto' />
              </div>
              <div className='w-full px-6 my-6 flex flex-col gap-8'>
                <p className='text-base font-normal leading-snug tracking-normal text-white text-justify'>
                  Hard-working individual with proficiency in Web Developer as well as ability to communicate effectively in a team setting, and possessing a strong willingness to learn about entrepreneurship and business , willingness to learn and adopt new technologies.Also, dynamic and creative software developer withover 1 years of experience in producing robust code for high- volume companies. Eager to support the dev team at CDE Inc. with top-notch coding skills.
                </p>
                <div className='flex gap-8 *:text-blue-500  *:text-3xl rounded justify-center'>
                  {socialMedia.map((element, key) => (
                    <Link to={element.elementLink} key={key} className='hover:text-blue-300' target='_blank'>{element.elementIcon}</Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

              <p className='w-full text-center font-medium tracking-wide text-black/80 text-lg leading-snug  pb-1'>CopyRights Reserved &copy; 2024</p>      

      </div>
    </div>
  )
}

export default About
