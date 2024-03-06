import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillDashboard } from "react-icons/ai";
import { FaHome, FaCloudUploadAlt } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { IoBookSharp, IoLogOut } from "react-icons/io5";
import userLogo from "../assets/profile.jpg"

const liElements = [
    {
        elementName: "Dashboard",
        elementSymbol: <AiFillDashboard />,
        elementLink: "/admin/dashboard"
    },
    {
        elementName: "Upload Book",
        elementSymbol: <FaCloudUploadAlt />,
        elementLink: "/admin/dashboard/upload"
    },
    {
        elementName: "Manage Books",
        elementSymbol: <MdManageAccounts />,
        elementLink: "/admin/dashboard/manage"
    },
    {
        elementName: "All Books",
        elementSymbol: <IoBookSharp />,
        elementLink: "/shop"
    },
    {
        elementName: "Logout",
        elementSymbol: <IoLogOut />,
        elementLink: "logout"
    },
   ]

const DashboardSidebar = () => {
    return (
        <div>
            <div className="md:fixed flex flex-col bg-clip-border rounded-xl bg-white text-black max-w-full min-w-[16rem] p-4 shadow-xl shadow-blue-gray-900/5">
                <div className="mb-2 p-4 flex items-center gap-3">
                    <img src={userLogo} alt='error-user-icon' className='h-8 w-8 rounded-full'/>
                    <h5 className="block antialiased tracking-wide font-sans text-2xl uppercase font-bold leading-snug text-blue-700">Dashboard</h5>
                </div>
                <nav className="flex flex-col gap-1 w-11/12 p-2 font-sans text-base font-normal text-black/90 md:h-screen ">
                    {
                        liElements.map((element, key) => (
                            <Link to={element.elementLink} className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-700 hover:bg-opacity-80 focus:bg-blue-700 focus:bg-opacity-80 active:bg-blue-700 active:bg-opacity-80 hover:text-white focus:text-white active:text-white outline-none" key={key}>
                                <div className="grid place-items-center mr-4">
                                    {element.elementSymbol}
                                </div>
                                {element.elementName}
                            </Link>
                        ))
                    }
                </nav>
            </div>
        </div>
    )
}

export default DashboardSidebar
