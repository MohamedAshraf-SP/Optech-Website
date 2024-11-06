import React, { useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
// import images
import images from "./Services_img";
import {
  // Frequentlyasked as FAQData,
  // Leader_in_Virtual as LeaderData,
  // Level_With_MyOutDesk as LevelWithMyOutDesk,
  OurServices as OurServices_arr,
  Fixed_Header_arr as FixedHeaderData,
  Level_With_MyOutDesk as LevelWithMyOutDesk,
  Leader_in_Virtual as LeaderinvirtualData,
  How_it_work_arr as HowWork_Arr,
} from "./Services_arr";
import UseDocumnetTitle from "../../Hooks/UseDocumnetTitle";
import FixedHeader from "../../Components/FixedHeader";
import ScaleBusiness from "../../Components/ScaleBusiness";
import ServiceBlock from "../../Components/ServiceBlock";
import Level_Up_OutDesk from "../../Components/Level_Up_OutDesk";
import LeaderinVirtual from "../../Components/LeaderinVirtual";
import UsApart from "../../Sections/UsApart";
import TestemonilesSection from "../../Sections/TestemonilesSection";
 import TryOptech from "../../Sections/TryOptech";
import Footer from "../../Components/Footer";

export default function Services() {
  // set title to page
  UseDocumnetTitle("Services");
  // ------------Memoize static data to avoid unnecessary recalculations
  const fixedHeaderContent = useMemo(() => FixedHeaderData, []);
  const OurServicesContent = useMemo(() => OurServices_arr, []);
  const LevelWithMyOutDeskContent = useMemo(() => LevelWithMyOutDesk, []);
  const leaderContent = useMemo(() => LeaderinvirtualData, []);
  const How_It_Work = useMemo(() => HowWork_Arr, []);
  return (
    <>
      <FixedHeader
        bgImg={images.fixedHeaderImg}
        title={fixedHeaderContent.title}
        description={fixedHeaderContent.description}
      />
      <ScaleBusiness />
      {/* start our services sections */}
      <div className="container py-10">
        <div className="my-4">
          <h2 className="mainTitle ">Explore Our Services</h2>
          <hr className="w-40 h-1 mx-auto   bg-primary rounded-xl " />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
          {OurServicesContent.map((item, index) => {
            const ref = useRef(null); // Create a ref for each motion.div
            const isInView = useInView(ref, { margin: "-100px", once: true }); // Trigger animation 100px before entering

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 50 }} // Start state: invisible and slightly below
                animate={isInView ? { opacity: 1, y: 0 } : {}} // End state: visible and in original position
                transition={{ duration: 0.3, ease: "easeInOut" }} // Ease-out transition for smooth finish
              >
                <div key={index}>
                  <ServiceBlock
                    icon={item.icon}
                    title={item.title}
                    text={item.text}
                    path={item.path}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      {/* end our servises */}
      <Level_Up_OutDesk
        Title={LevelWithMyOutDeskContent.title}
        img={images.levelOutImg}
        description={LevelWithMyOutDeskContent.description}
      />

      {/* start Hire a Virtual Assistant with MyOutDesk */}
     
 
      <LeaderinVirtual
        image2={images.LeaderinVirtualImageone}
        title={leaderContent.title}
        pargraph={leaderContent.pargraph}
      />
           <UsApart />
      {/* start How it work sectio */}
      <div className="container py-10">
        <div className="my-10">
          <h2 className="mainTitle">How It Works</h2>
          <p className="text-textcolor mx-auto font-medium flex flex-row justify-center">
            Our process is built on years of onboarding and supporting
            businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="overflow-hidden w-full h-full flex justify-center items-center">
            <img src={images.HowItWorks} alt="how it work" />
          </div>
          <div>
            {How_It_Work.map((How_work_block, index) => (
              <div className="my-10" key={index}>
                <h3 className="font-semibold text-2xl py-1">
                  {How_work_block.title}
                </h3>
                <p className="text-textcolor">{How_work_block.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* end How it work sectio */}

      <TestemonilesSection />
       <TryOptech />
      <Footer />
    </>
  );
}
