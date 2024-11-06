import Images from "../assets/images";
import icons from "../assets/Icons";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

import { Industries, services } from "../assets/UsedArr";
import { Link } from "react-router-dom";

export default function Footer() {
  const WhatsappURL = import.meta.env.VITE_WHATS_APP_URL_Hossam_Num;
  const todayDate = new Date();
  const specifiedYear = todayDate.getFullYear();
  return (
    <div className="bg-[#040D43] lg:pt-[80px] pt-[40px]">
      <div className="container">
        <div className="grid grid-cols-12 pt-6 pb-20 md:gap-4 ">
          <div className="flex flex-col items-start gap-3 lg:col-span-4 md:col-span-12  col-span-12 ">
            <div className="max-w-[200px] h-14">
              <img src={Images.whiteLogo  } alt="navLogo" loading="lazy" className="h-full w-full"/>
            </div>
            <div className="flex flex-col items-start  gap-4 mt-2 ">
              <p className="text-[#ced0df] text-[16px] font-medium leading-[1.6] mb-4 text-left">
                Find a virtual professional that meets your unique business
                needs and save up to 70%
                on hiring costs today.
              </p>
              <div className="flex flex-row items-center gap-2 text-white text-sm ">
                <span>
                  <icons.BsFillTelephoneFill />
                </span>
                <a
                  href="tel:+44 7907716282"
                  className="hover:text-primary font-medium hover:underline transition-all ease-in-out duration-300"
                >
                  +44 7907716282
                </a>
              </div>

              <div className="flex flex-row items-center gap-2 text-white text-[14px]  ">
                <span>
                  <icons.IoMdMail />
                </span>
                <a
                  href="mailto:team@mybudgetstaff.com"
                  className=" hover:text-primary font-medium transition-all ease-in-out duration-300"
                >
                  team@mybudgetstaff.com
                </a>
              </div>
              <div className="flex flex-row items-start gap-2 font-medium text-white text-[14px]">
                <icons.FaLocationDot />
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=St+George+Chambers+74+George+Street+Luton+LU12BD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-600 hover:underline transition-all duration-300 ease-in-out"
                >
                  St George Chambers - 74 George Street
                  <br /> - Luton - LU12BD
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start  gap-2 justify-start lg:col-span-3 md:col-span-6 col-span-12">
            <h3 className="font-medium text-[20px] leading-[30px] mb-[4px] text-white tracking-[1px]">
              Services
            </h3>
            <div className="flex flex-col items-start gap-2">
              <ul>
                {services.map((item, index) => (
                  <li
                    key={index}
                    className="capitalize text-[#ced0df] text-[15px] font-medium my-2 w-fit hover:text-white transition-all ease-in-out duration-400 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.2px] after:w-0 after:bg-[#ced0df] after:transition-all after:ease-in-out after:duration-200 hover:after:w-full"
                  >
                    <Link to={`/${item.path}`}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-start  gap-2 justify-start lg:col-span-3 md:col-span-6 col-span-12">
            <h3 className="font-semibold text-[20px] leading-[30px] mb-[4px] text-white">
              Industries
            </h3>
            <div className="flex flex-col items-start gap-2">
              <ul>
                {Industries.map((item, index) => (
                  <li
                    key={index}
                    className="capitalize text-[#ced0df] text-[15px] font-medium my-2 w-fit hover:text-white transition-all ease-in-out duration-400 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.2px] after:w-0 after:bg-[#ced0df] after:transition-all after:ease-in-out after:duration-200 hover:after:w-full"
                  >
                    <Link to={`${item.path}`}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-start   gap-2 justify-start lg:col-span-2 md:col-span-6 col-span-12">
            <h3
              className="font-semibold text-[20px] leading-[30px]
             mb-[4px] text-white"
            >
              Information
            </h3>
            <div className="flex flex-col items-start gap-2">
              <ul>
                <li className="text-[#ced0df] text-[15px] font-medium my-2 w-fit hover:text-white transition-all ease-in-out duration-400 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.2px] after:w-0 after:bg-[#ced0df] after:transition-all after:ease-in-out after:duration-200 hover:after:w-full">
                  <Link to="/book-call">Book Strategy Call</Link>
                </li>
                <li className="text-[#ced0df] text-[15px] font-medium my-2 w-fit hover:text-white transition-all ease-in-out duration-400 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.2px] after:w-0 after:bg-[#ced0df] after:transition-all after:ease-in-out after:duration-200 hover:after:w-full">
                  <Link to="/Learn/Faq">Faq</Link>
                </li>
                <li className="text-[#ced0df] text-[15px] font-medium my-2 w-fit hover:text-white transition-all ease-in-out duration-400 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.2px] after:w-0 after:bg-[#ced0df] after:transition-all after:ease-in-out after:duration-200 hover:after:w-full">
                  <Link to="/Learn/Reviews">Reviews</Link>
                </li>
                <li className="text-[#ced0df] text-[15px] font-medium my-2 w-fit hover:text-white transition-all ease-in-out duration-400 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.2px] after:w-0 after:bg-[#ced0df] after:transition-all after:ease-in-out after:duration-200 hover:after:w-full">
                  <Link to="/Contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* bottom footer */}
        <div className="py-8 border-t border-solid border-[#ced0df33]">
          <div className="flex lg:flex-row flex-col items-center justify-between gap-3">
            <p className="lg:text-left text-center text-[#ced0df] leading-[30px] font-thim">
            {` Copyright © ${specifiedYear} `}
<a href={WhatsappURL} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline hover:text-sky-400 transition all ease-in-out duration-300">
  MyBudgetStaff Team
</a>
{` . All rights reserved.`}
            </p>
            <ul className="flex flex-row items-center gap-2 px-8">
              <li>
                <a
                  href="#"
                  className="w-[44px] h-[44px] flex text-[18px] rounded-[6px] items-center [transition:all_.4s] justify-center bg-[#1e2656] hover:bg-[#2B4DFF]  text-white"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="w-[44px] h-[44px] flex text-[18px] rounded-[6px] items-center [transition:all_.4s] justify-center bg-[#1e2656] hover:bg-[#2B4DFF]  text-white"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="w-[44px] h-[44px] flex text-[18px] rounded-[6px] items-center [transition:all_.4s] justify-center bg-[#1e2656] hover:bg-[#2B4DFF]  text-white"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="w-[44px] h-[44px] flex text-[18px] rounded-[6px] items-center [transition:all_.4s] justify-center bg-[#1e2656] hover:bg-[#2B4DFF]  text-white"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
