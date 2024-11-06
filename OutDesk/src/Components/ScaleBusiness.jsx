import React, { useMemo, useRef } from "react";
import icons from "../assets/Icons";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ScaleBusinessArr as sacalBusiness } from "../assets/UsedArr";
export default function ScaleBusiness() {
  const ScaleBusiness = useMemo(() => sacalBusiness, []);
  return (
    <div className="py-[80px] bg-[top_center] bg-no-repeat [background-size:100%_auto] bg-[#F5F6F7]">
      <div className=" container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-10">
        {ScaleBusiness.map((scaleblock, index) => {
          const ref = useRef(null); // Create a ref for each motion.div
          const isInView = useInView(ref, { margin: "-100px", once: true });
          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 50 }} // Start state: invisible and slightly below
              animate={isInView ? { opacity: 1, y: 0 } : {}} // End state: visible and in original position
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-full flex flex-col items-start justify-between px-[40px] py-10 mb-[24px] rounded-[18px] bg-white"
            >
              <div className=" bg-[#EEF1FF] rounded-md p-2 w-40 h-40 mb-4">
                <img
                  className="w-full h-full"
                  src={scaleblock.img}
                  alt="SaveMoneyImg"
                />
              </div>
              <div className="flex flex-col flex-grow items-start justify-between gap-2  rounded-[18px]">
                <h3 className="text-[22px] tracking-[-.02em] font-semibold text-secondary">
                  {scaleblock.title}
                </h3>
                <p className="text-textcolor flex-grow">
                  {scaleblock.pargraph}
                </p>
                <Link
                  to="/All-services"
                  className="flex flex-row items-center gap-2 mt-auto font-semibold text-primary hover:translate-x-2 transition-transform duration-300 ease-in-out"
                >
                  Learn More
                  <icons.FaArrowRight />
                </Link>
              </div>
            </motion.div>
          );
        })}
        {/* <div className="flex flex-row items-start gap-3">
          <div className=" bg-[#EEF1FF] rounded-md p-6  ">
            <img src={Images.expertTeam} alt="expertTeam" loading="lazy" />
          </div>
          <div className="flex flex-col items-start  gap-2">
            <h3 className="text-lg font-semibold leading-4 text-secondary">
              Highly Expert Team
            </h3>
            <p className="text-textcolor ">
              Longest-running virtual assistant service company
            </p>
          </div>
        </div>
        <div className="flex flex-row items-start gap-3">
          <div className=" bg-[#EEF1FF] rounded-md p-6  ">
            <img src={Images.CustomerService} alt="expertTeam" loading="lazy" />
          </div>
          <div className="flex flex-col items-start  gap-2">
            <h3 className="text-lg font-semibold leading-4 text-secondary">
              24/7 Customer Service
            </h3>
            <p className="text-textcolor ">
              Serving 7500+ clients with 800+ verified 5-star business reviews
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}


 