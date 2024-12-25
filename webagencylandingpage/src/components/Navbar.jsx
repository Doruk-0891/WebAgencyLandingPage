import Logo from "./Logo";
import { GoArrowUpRight, GoArrowDownRight } from "react-icons/go";
import { CiMenuFries } from "react-icons/ci";
import { NavLink, useLocation } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { PrimaryButton } from "./Button";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const { pathname } = location;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const checkActiveMenuTab = (givenTab) => {
        const tab = '/' + givenTab.toLowerCase();
        if (pathname !== tab) return false;
        return true;
    }

    return (
        <>
            <header className="w-full flex justify-between items-center p-4 h-[50px]">
                <Logo />
                <div className="flex justify-end">
                    <button onClick={toggleMenu} className="rounded-full p-2 hover:bg-gray-300 md:hidden">
                        {
                            !isMenuOpen ? <CiMenuFries /> : <IoMdClose />
                        }
                    </button>
                    <nav className="hidden w-full justify-between gap-4 md:flex">
                        <NavLink to='/services' className={`uppercase flex justify-center items-center gap-1 
                        ${!checkActiveMenuTab('services') && 'opacity-60'}`}>
                            Services
                            {
                                checkActiveMenuTab('services') ? <GoArrowDownRight color="red" /> : <GoArrowUpRight />
                            }
                        </NavLink>

                        <NavLink to='/work' className={`uppercase flex justify-center items-center gap-1 
                        ${!checkActiveMenuTab('work') && 'opacity-60'}`}>
                            Work {checkActiveMenuTab('work') ? <GoArrowDownRight color="red" /> : <GoArrowUpRight />}
                        </NavLink>

                        <NavLink to='/about' className={`uppercase flex justify-center items-center gap-1 
                        ${!checkActiveMenuTab('about') && 'opacity-60'}`}>
                            About {checkActiveMenuTab('about') ? <GoArrowDownRight color="red" /> : <GoArrowUpRight />}
                        </NavLink>
                        <PrimaryButton>
                            Get Started
                        </PrimaryButton>
                    </nav>
                </div>
            </header>
            <nav className={`w-full flex flex-col bg-black-400 absolute
            top-[50px] left-0 transition-all ease-in-out duration-200 md:hidden ${isMenuOpen ? 'h-4/6 p-2' : 'h-0 p-0'}`} onClick={toggleMenu}>
                <NavLink to='/services' className={`uppercase text-2xl text-center text-white hover:text-red-400 transition ease-in duration-200 ${isMenuOpen ? 'py-6' : 'invisible '}`}>Services</NavLink>

                <NavLink to='/work' className={`uppercase text-2xl text-center text-white hover:text-red-400 transition ease-in duration-200 ${isMenuOpen ? 'py-6' : 'invisible '}`}>Work</NavLink>

                <NavLink to='/about' className={`uppercase text-2xl text-center text-white hover:text-red-400 transition ease-in duration-200 ${isMenuOpen ? 'py-6' : 'invisible'}`}>About</NavLink>
                <div className={!isMenuOpen ? 'invisible' : 'm-auto'}>
                    <PrimaryButton>
                        Get Started
                    </PrimaryButton>
                </div>
            </nav>
        </>
    )
}

export default Navbar