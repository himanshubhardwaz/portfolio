import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { useState } from "react";
import { useRouter } from "next/router";
import { Switch } from "@headlessui/react";
import { useDarkTheme } from "@/store";

const navLinks = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/skills",
    name: "Skills",
  },
  {
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/resume",
    name: "Resume",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isDarkThemeEnabled, toggleDarkTheme } = useDarkTheme();

  const toggleMenu = () => {
    setIsMenuOpen((curr) => !curr);
  };

  const stopPropagation = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };

  return (
    <div className='w-full py-8 lg:py-10 fixed z-50'>
      <div className='flex justify-between items-center w-full h-full px-2 xl:px-16'>
        <Link href='/'>
          <a className='text-primary underlined focus:outline-none block whitespace-nowrap text-2xl font-medium transition'>
            <h1>theHB</h1>
          </a>
        </Link>
        <nav>
          <ul className='hidden md:flex'>
            {navLinks.map((link) => {
              return (
                <li
                  key={link.path}
                  className={`ml-10 text-sm uppercase ${
                    router.pathname === link.path
                      ? ""
                      : "border-black hover:border-b"
                  }`}
                >
                  <Link href={link.path}>
                    <a>
                      <h1
                        className={
                          router.pathname === link.path
                            ? "border-b border-black"
                            : ""
                        }
                      >
                        {link.name}
                      </h1>
                    </a>
                  </Link>
                </li>
              );
            })}
            <li className='ml-10'>
              <Switch
                checked={isDarkThemeEnabled}
                onChange={toggleDarkTheme}
                className={`${
                  isDarkThemeEnabled ? "bg-gray-500" : "bg-gray-500"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className='sr-only'>Enable Dark Theme</span>
                <span
                  className={`${
                    isDarkThemeEnabled ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
            </li>
          </ul>
          <div className='md:hidden'>
            <MenuIcon className='h-8 cursor-pointer' onClick={toggleMenu} />
          </div>
        </nav>
      </div>
      <div
        className={
          isMenuOpen ? "fixed left-0 top-0 w-full h-screen bg-gray-800/60" : ""
        }
        onClick={toggleMenu}
      >
        <div
          className={
            isMenuOpen
              ? `fixed left-0 top-0 w-[100%] h-screen ${
                  isDarkThemeEnabled ? "bg-myGray" : "bg-white"
                }  p-10 ease-in duration-500`
              : `fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen ${
                  isDarkThemeEnabled ? "bg-myGray" : "bg-white"
                }  p-10 ease-in duration-500`
          }
          onClick={stopPropagation}
        >
          <div className='flex w-full items-center justify-between'>
            <Link href='/'>
              <a className='text-primary underlined focus:outline-none block whitespace-nowrap text-2xl font-medium transition'>
                <h1>Himanshu Bhardwaz</h1>
              </a>
            </Link>
            <XIcon
              className={`h-6 ${
                isDarkThemeEnabled ? "text-white" : "text-black"
              } cursor-pointer`}
              onClick={toggleMenu}
            />
          </div>
          <div className='border-b border-gray-300 my-4'>
            <p className='w-[85%] md:w-[90%] py-4'>
              Lets build something legendary together
            </p>
          </div>

          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.path}
                    className='py-4 text-sm'
                    onClick={toggleMenu}
                  >
                    <Link href={link.path}>
                      <a>
                        <h1
                          className={
                            router.pathname === link.path ? "underline" : ""
                          }
                        >
                          {link.name}
                        </h1>
                      </a>
                    </Link>
                  </li>
                );
              })}
              <li>
                <Switch
                  checked={isDarkThemeEnabled}
                  onChange={toggleDarkTheme}
                  className={`${
                    isDarkThemeEnabled ? "bg-gray-500" : "bg-gray-500"
                  } relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span className='sr-only'>Enable Dark Theme</span>
                  <span
                    className={`${
                      isDarkThemeEnabled ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                  />
                </Switch>
              </li>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest'>Lets connect</p>
              <div className='flex items-center justify-between my-4 w-full sm:[w-80%]'>
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
  );
}
