import React from "react";
import Images from "../assets/images";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div
        className="h-full bg-cover bg-center py-8 "
        style={{ backgroundImage: `url(${Images.HeaderbgImg})` }}
      >
        <div className="container ">
          <div className="grid lg:grid-cols-2 grid-cols-1 h-full py-8 lg:py-2">
            <div className="flex items-center justify-start lg:order-1 py-8 lg:py-2">
              <div className="lg:text-start text-center">
                {/* <span
                  className="text-gray-200 font-medium md:text-[24px] text-[16px] leading-[1.6]   
                "
                >
                  We Help You  Grow
                </span> */}
                <h1 className="text-white font-bold md:text-[60px] text-[30px] leading-[1.3] lg:leading-[1.1]">
                  Grow your business with{" "}
                  <span className="bg-gradient-to-r from-[#f99f22] to-[#ffc700] bg-clip-text text-transparent">
                    MyBudgetStaff<br/>
                  </span>
                  from just £4.99
                </h1>
                <p className="text-white text-[17px]  py-5 mb-8 font-semibold">
                  Cut costs, not quality. Outsource with us to access skilled
                  overseas talent and boost your business.
                </p>
                <div className="flex flex-row lg:justify-start items-center justify-center gap-3  ">
                  <Link to="/book-call" className="mainButton ">
                    Book a Strategy Call
                  </Link>
                  <Link
                    to="/All-services"
                    className="text-secondary bg-white lg:px-8 px-4 py-[10px] rounded-md font-bold text-[16px] transition-all duration-300 ease-in-out   hover:text-white  hover:bg-[rgb(20,39,144)] hover:bg-[linear-gradient(90deg,_rgba(20,39,144,1)_0%,_rgba(35,64,218,1)_0%)]"
                  >
                    View Services
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center lg:order-2 py-4">
              <div className="text-center w-[500px] ">
                <img src={Images.HeaderImg} alt="HeaderImg" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
