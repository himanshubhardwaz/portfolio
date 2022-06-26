import Link from 'next/link'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(curr => !curr);
    }

    const stopPropagation = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
    }

    return (
        <div className="w-full py-8 lg:py-12 fixed">
            <div className="flex justify-between items-center w-full h-full px-2 xl:px-16">
                <Link href="/">
                    <a className="text-primary underlined focus:outline-none block whitespace-nowrap text-2xl font-medium transition">
                        <h1>
                            theHB
                        </h1>
                    </a>
                </Link>
                <nav>
                    <ul className="hidden md:flex">
                        <li className="ml-10 text-sm uppercase hover:border-b">
                            <Link href="/">
                                <a><h1>
                                    Home
                                </h1></a>
                            </Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b">
                            <Link href="/skills">
                                <a><h1>
                                    Skills
                                </h1></a>
                            </Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b">
                            <Link href="/projects">
                                <a><h1>
                                    Projects
                                </h1></a>
                            </Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b">
                            <Link href="/about">
                                <a><h1>
                                    About
                                </h1></a>
                            </Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b">
                            <Link href="/contact">
                                <a><h1>
                                    Contact
                                </h1></a>
                            </Link>
                        </li>
                    </ul>
                    <div className="md:hidden">
                        <MenuIcon className="text-white h-8" onClick={toggleMenu} />
                    </div>
                </nav>
            </div>
            <div className={isMenuOpen ? "fixed left-0 top-0 w-full h-screen bg-gray-800/60" : ""} onClick={toggleMenu}>
                <div className={isMenuOpen ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-myGray p-10 ease-in duration-500" :
                    "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-myGray p-10 ease-in duration-500"} onClick={stopPropagation}>
                    <div className="flex w-full items-center justify-between">
                        <Link href="/">
                            <a className="text-primary underlined focus:outline-none block whitespace-nowrap text-2xl font-medium transition">
                                <h1>
                                    Himanshu Bhardwaz
                                </h1>
                            </a>
                        </Link>
                        <XIcon className="h-6 text-white cursor-pointer" onClick={toggleMenu} />
                    </div>
                    <div className="border-b border-gray-300 my-4">
                        <p className="w-[85%] md:w-[90%] py-4">Lets build something legendary together</p>
                    </div>

                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            <li className="py-4 text-sm">
                                <Link href="/">
                                    <a><h1>
                                        Home
                                    </h1></a>
                                </Link>
                            </li>
                            <li className="py-4 text-sm">
                                <Link href="/skills">
                                    <a><h1>
                                        Skills
                                    </h1></a>
                                </Link>
                            </li>
                            <li className="py-4 text-sm">
                                <Link href="/projects">
                                    <a><h1>
                                        Projects
                                    </h1></a>
                                </Link>
                            </li>
                            <li className="py-4 text-sm">
                                <Link href="/about">
                                    <a><h1>
                                        About
                                    </h1></a>
                                </Link>
                            </li>
                            <li className="py-4 text-sm">
                                <Link href="/contact">
                                    <a><h1>
                                        Contact
                                    </h1></a>
                                </Link>
                            </li>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest">Lets connect</p>
                            <div className="flex items-center justify-between my-4 w-full sm:[w-80%]">
                                <div>
                                    <FaLinkedin size={28} />
                                </div>
                                <div>
                                    <FaGithub size={28} />
                                </div>
                                <div>
                                    <AiOutlineMail size={28} />
                                </div>
                                <div>
                                    <FaInstagram size={28} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}