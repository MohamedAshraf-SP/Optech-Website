import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Images from "../assets/images";
import icons from "../assets/Icons";
import { Industries, Learn, services } from "../assets/UsedArr";
export default function Navbar({ cusotm }) {
  const Navigate = useNavigate();
  const [scrolling, setScrolling] = useState(false);
  const [sideBar, setsideBar] = useState(false);
  const [submenu, setsubmenu] = useState(false);
  const [sucess_Login, setSucessLogin] = useState(false);
  const handleScrolling = () => {
    if (window.scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  //  show side navbar while click
  const showsideBar = () => {
    setsideBar(!sideBar);
  };

  // show submenu
  const showsubmenu = (index) => {
    setsubmenu(index === submenu ? null : index);
  };

  // handle log out function
  const LogOut = () => {
    localStorage.clear();
    Navigate("/");
  };

  // handle show Dashboard and log out icon
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      setSucessLogin(true);
    } else {
      setSucessLogin(false);
    }
  }, [sucess_Login]);
  useEffect(() => {
    window.addEventListener("scroll", handleScrolling);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScrolling);
    };
  }, []);

  return (
    <>
      {/* upper navbar */}
      <div className="relative">
        <nav
          className={`text-[14px]   font-medium py-4 hidden md:block ${
            cusotm ? "bg-[#09155E] text-white" : "bg-[#F5F6F7] text-secondary"
          }`}
        >
          <div className="container">
            <div
              className="hidden
            md:flex flex-row items-center justify-between"
            >
              <div className="flex row gap-1 items-center ">
                <icons.FaLocationDot />
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=St+George+Chambers+74+George+Street+Luton+LU12BD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="  hover:text-blue-600 hover:underline transition-all duration-300 ease-in-out"
                >
                  St George Chambers - 74 George Street - Luton - LU12BD
                </a>
              </div>
              <div className="flexrow justify-between  gap-6">
                <div className="flexrow gap-1">
                  <icons.BsFillTelephoneFill />
                  <a
                    href="tel:+44 7907716282"
                    className="hover:text-primary hover:underline transition-all ease-in-out duration-300"
                  >
                    +44 7907716282
                  </a>
                </div>
                <div className="flexrow gap-1">
                  <icons.MdEmail />
                  <a
                    href="mailto:team@mybudgetstaff.com "
                    className="hover:text-primary hover:underline transition-all ease-in-out duration-300"
                  >
                    team@mybudgetstaff.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/*end  upper navbar */}
        <div className={` ${cusotm ? "bg-secondary" : "bg-white"}`}>
          <nav
            className={` bg-white rounded-lg top-0 left-0 w-full transition-all duration-500 z-40 mb-10${
              scrolling
                ? "bg-gray-800 shadow-lg fixed rounded-none"
                : "bg-transparent sticky md:container"
            }   ${cusotm ? "" : "rounded-none "}`}
          >
            <div className="px-2  sm:px-6 lg:px-4 py-2 ">
              <div className="flex h-16 items-center justify-between ">
                <div className="md:flex md:items-center  ">
                  <Link
                    className="block text-teal-600  w-[140px]  lg:w-[190px] lg:h-14"
                    to="/"
                  >
                    <img
                      src={Images.darklogo}
                      alt="navLogo"
                      loading="lazy"
                      className="w-full h-full"
                    />
                  </Link>
                </div>
                {/* large screen navbarr */}
                <div className="hidden md:block">
                  <nav aria-label="Global">
                    <ul className="flex items-center gap-6 text-md ">
                      <li
                        className="
                      
                      relative flex flex-row items-center gap-3 cursor-pointer group hover:text-gray-500 transition text-[16px] capitalize font-medium   leading-[18px] py-5  "
                      >
                        <span>Services</span>
                        <div>
                          <icons.IoIosArrowDown className="group-hover:rotate-180 transition .3s transform  ease-in-out" />
                        </div>
                        <ul className="absolute top-full left-0 bg-white text-secondary rounded-md grid grid-cols-2 gap-4 shadow-lg w-[440px] px-4 py-8 group-hover:opacity-100 group-hover:visible opacity-0 invisible transition-opacity duration-300 ease-out transform group-hover:translate-y-2 group-hover:animate-fadeinbounceup">
                          {services?.map((link) => (
                            <li
                              key={link.name}
                              className="outline-none relative py-2 w-fit rounded-md   hover:text-primary transition-all duration-500 ease-in-out after:absolute after:bottom-[0] after:left-[0] after:right-auto after:h-[2px] after:w-[0] after:bg-[#1a2e9e] after:[transition:all_.3s_ease] hover:after:w-full"
                            >
                              <Link
                                to={`/${link.path}`}
                                className="px-2 py-1 block"
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li
                        className="
                                        relative flex flex-row items-center gap-3 cursor-pointer group hover:text-gray-500 transition text-[16px] capitalize font-medium  leading-[18px] py-5  "
                      >
                        <span>Industries</span>
                        <div>
                          <icons.IoIosArrowDown className="group-hover:rotate-180 transition .3s transform  ease-in-out" />
                        </div>
                        <ul className="absolute top-full left-0 bg-white text-secondary rounded-md grid grid-cols-2 gap-4 shadow-lg w-[440px] px-4 py-8 group-hover:opacity-100 group-hover:visible opacity-0 invisible transition-opacity duration-300 ease-out transform group-hover:translate-y-2 group-hover:animate-fadeinbounceup">
                          {Industries?.map((link) => (
                            <li
                              key={link.name}
                              className="outline-none relative   w-fit rounded-md hover:text-primary transition-all duration-500 ease-in-out after:absolute after:bottom-[0] after:left-[0] after:right-auto after:h-[2px] after:w-[0] after:bg-[#1a2e9e] after:[transition:all_.3s_ease] hover:after:w-full"
                            >
                              <Link to={link.path} className="px-2 py-1 block">
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>

                      <li
                        className="
                                        relative flex flex-row items-center gap-3 cursor-pointer group hover:text-gray-500 transition text-[16px] capitalize font-medium  leading-[18px] py-5  "
                      >
                        <span>Learn</span>
                        <div>
                          <icons.IoIosArrowDown className="group-hover:rotate-180 transition .3s transform  ease-in-out" />
                        </div>
                        <ul className="absolute top-full left-0 bg-white text-secondary rounded-md grid grid-cols-1 gap-4 shadow-lg w-[140px] px-4 py-4 group-hover:opacity-100 group-hover:visible opacity-0 invisible transition-opacity duration-300 ease-out transform group-hover:translate-y-2 group-hover:animate-fadeinbounceup">
                          {Learn?.map((link) => (
                            <li
                              key={link.name}
                              className="outline-none relative  w-fit rounded-md hover:text-primary transition-all duration-500 ease-in-out after:absolute after:bottom-[0] after:left-[0] after:right-auto after:h-[2px] after:w-[0] after:bg-[#1a2e9e] after:[transition:all_.3s_ease] hover:after:w-full"
                            >
                              <Link
                                to={link.path}
                                className="block text-[16px] font-medium px-2"
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>

                      <li className="py-3">
                        <Link
                          className="relative flex flex-row items-center gap-3 cursor-pointer group hover:text-gray-500 transition text-[16px] capitalize font-medium  leading-[18px] py-5  "
                          to="/Contact"
                        >
                          contact
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className="flex items-center md:gap-4">
                  <div className="sm:flex sm:gap-2 ">
                    <Link
                      className="mainButton rounded-md font-semibold"
                      to="/book-call"
                    >
                      Book a Strategy Call
                    </Link>
                    {sucess_Login && (
                      <Link
                        to="/Dashboard"
                        className="rounded-md hidden lg:flex px-4 py-2 text-white cursor-pointer  gradient_button hover:bg-primary bg-ButtonColor font-semibold"
                      >
                        Dashboard
                      </Link>
                    )}
                    {sucess_Login && (
                      <span
                        className="text-2xl flex items-center justify-center cursor-pointer hover:text-primary transition Transition"
                        onClick={LogOut}
                      >
                        <icons.MdLogout />
                      </span>
                    )}
                  </div>

                  <div className="block md:hidden">
                    <button
                      className="rounded text-2xl  p-2 outline-none  transition hover:text-gray-600/75"
                      onClick={showsideBar}
                    >
                      <icons.LuMenu />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          {/* start Mobile screen navbar */}
          <nav
            className={`fixed lg:hidden top-0 left-0 h-screen w-[calc(100vw-60px)] bg-white shadow-lg z-40 p-5 pt-8 overflow-y-scroll transition-transform duration-300 ease-in-out custom-scrollbar 
      ${sideBar ? "translate-x-0" : "-translate-x-full"}`}
          >
            <div className="flex justify-between items-center">
              <Link to="/" className="w-[140px]">
                <img
                  src={Images.darklogo}
                  alt="Navigation Logo"
                  loading="lazy"
                />
              </Link>
              <span
                className="text-2xl text-gray-400 hover:text-secondary cursor-pointer transition ease-in-out"
                onClick={showsideBar}
              >
                <icons.IoClose />
              </span>
            </div>

            <div className="py-10">
              <ul className="flex flex-col gap-4">
                <li className="w-full">
                  <Link
                    to="/"
                    className="flex items-center h-[50px] w-full px-3 py-[20px] rounded-md hover:bg-gray-100 transition"
                  >
                    Home
                  </Link>
                </li>

                <li className="relative w-full">
                  <div
                    className="flex items-center justify-between w-full cursor-pointer px-3 py-[14px] rounded-md hover:bg-gray-100 transition"
                    onClick={() => showsubmenu(1)}
                  >
                    <span>Services</span>
                    <icons.IoIosArrowForward />
                  </div>

                  <ul
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      submenu === 1
                        ? "max-h-[400px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {services?.map((link) => (
                      <li key={link.name} className="w-full ">
                        <Link
                          to={`/${link.path}`}
                          className="w-full px-8 py-3 block rounded-md hover:bg-gray-100 transition"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="relative w-full">
                  <div
                    className="flex items-center justify-between w-full cursor-pointer px-3 py-[14px] rounded-md hover:bg-gray-100 transition"
                    onClick={() => showsubmenu(2)}
                  >
                    <span>Industries</span>
                    <icons.IoIosArrowForward />
                  </div>

                  <ul
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      submenu === 2
                        ? "max-h-[380px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {Industries?.map((link) => (
                      <li key={link.name} className="w-full  ">
                        <Link
                          to={`${link.path}`}
                          className="  w-full px-8 py-3 block rounded-md hover:bg-gray-100 transition"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="relative w-full">
                  <div
                    className="flex items-center justify-between w-full cursor-pointer px-3 py-[14px] rounded-md hover:bg-gray-100 transition"
                    onClick={() => showsubmenu(3)}
                  >
                    <span>Learn</span>
                    <icons.IoIosArrowForward />
                  </div>

                  <ul
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      submenu === 3
                        ? "max-h-[400px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {Learn?.map((link) => (
                      <li key={link.name} className="w-full ">
                        <Link
                          to={`${link.path}`}
                          className="w-full px-8 py-3 block rounded-md hover:bg-gray-100 transition"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="w-full">
                  <Link
                    to="/contact"
                    className="flex items-center h-[50px] w-full px-3 py-[20px] rounded-md hover:bg-gray-100 transition"
                  >
                    Contact
                  </Link>
                </li>

                {/* <li>
                    <Link
                      to="/Dashboard"
                      className="  rounded-md block text-center   lg:flex px-4 py-2 text-white cursor-pointer  hover:text-secondary hover:bg-primary  bg-ButtonColor font-semibold"
                      href="#"
                    >
                      Dashboard
                    </Link>
                  </li> */}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
