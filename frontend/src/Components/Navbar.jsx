import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { FaBlog, FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";



const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [activeElem, setActiveElement] = useState(0)
  


    // toggle Menu 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false)
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);
        }
    }, [])


    const navItems = [
        {
            linkElem: "Home",
            pathElem: "/"
        },
        {
            linkElem: "About",
            pathElem: "/about"
        },
        {
            linkElem: "Shop",
            pathElem: "/shop"
        },
        {
            linkElem: "Dashboard",
            pathElem: "/admin/dashboard"
        },
    ]

    const handleActiveElem = (index) => {
        setActiveElement(index)
    }


    return (
        <>
            <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 z-30'>
                <nav className={`py-4 lg:px-24 px-4 ${isSticky ? 'sticky top-0 left-0 right-0 bg-blue-300': ''}`}>
                    <div className='flex justify-between items-center text-base gap-8'>
                        <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2' ><FaBlog className='inline-block' />Books</Link>




                        <ul className='md:flex space-x-12 hidden '>
                            {
                                navItems.map((element, key) => (
                                    <Link to={element.pathElem} key={key} className={`block text-base uppercase cursor-pointer hover:text-blue-700 ${key === activeElem? "text-blue-700" : "text-black"}`} onClick={() => handleActiveElem(key)}>{element.linkElem}</Link>
                                ))
                            }
                        </ul>



                        {/* btn for lg devices */}


                        {/* <div className='space-x-12 hidden lg:flex items-centerm'> */}
                            {/* <button><FaBars className='w-5 hover:text-blue-700' /></button> */}
                            {/* {
                                user ? `${user.email}`: ""
                            } */}
                        {/* </div> */}



                        {/* menu btn for mobile devices  */}

                        <div className='md:hidden'>
                            <button onClick={toggleMenu} className='text-black focus:outline-none'>
                                {
                                    isMenuOpen ? <>
                                        <FaXmark className='h-5 w-5 text-black' />
                                    </> : <>
                                        <FaBars className='h-5 w-5 text-black' />
                                    </>
                                }
                            </button>
                        </div>
                    </div>


                    {/* nav items for sm  devices  */}


                    <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen? 'block fixed top-0 right-0 left-0': 'hidden'}`}>
                        {
                            navItems.map((element, key) => (
                                <Link to={element.pathElem} key={key} className='block text-base text-white uppercase cursor-pointer '>{element.linkElem}</Link>
                            ))
                        }
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
