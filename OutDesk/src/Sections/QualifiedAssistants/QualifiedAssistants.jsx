import { useState, useRef } from "react";
import {
  Optech_Services,
  Optech_Services_imgs,
} from "./QualifiedAssistantsarr";
import { motion, useInView } from "framer-motion";

export default function QualifiedAssistants() {
  const [ActiveBox, setActiveBox] = useState("e-commerce");
  const ref = useRef(null); // Create a reference for the target div
  const isInView = useInView(ref, { once: true });

  return (
    <div className="py-4 container">
      <h2 className="text-3xl md:text-4xl font-semibold text-secondary text-center py-2 mx-auto lg:w-[500px]">
        MyBudgetStaff Services
        <hr className="w-40 h-1 mx-auto my-4 bg-primary rounded-xl " />
      </h2>
      <p className="text-[#8a8989] mx-auto lg:w-[900px] text-center w-full text-[16px] font-normal">
        We offer full-time and part-time business assistants in administration,
        marketing, sales, customer support and operations. We can help you hire
        just one assistant, or an end-to-end team that takes over an entire
        department or business function. <br/>Need help choosing the right plan? <strong>Book
        a call with our team.</strong>
      </p>

      <div className="flex flex-row md:flex-col justify-between gap-8 md:gap-1">
        <div className="flex md:flex-row flex-wrap flex-col items-center justify-center py-8">
          {Optech_Services?.map((Box, index) => (
            <div
              key={index}
              className={`px-[9px] md:py-[25px] py-2 m-[6px] !rounded-[20px] md:max-w-[170px] w-full flex items-center justify-start gap-3 cursor-pointer transition-all duration-300 ease-in-out overflow-hidden ${
                ActiveBox === Box.Title ? "bg-[#289EFD]" : "bg-[#EEF1FF]"
              }`}
              onClick={() => setActiveBox(Box.Title)}
            >
              <img
                src={Box.Image}
                alt={Box.Image}
                className={`h-[60px] w-[60px] pb-[10px] ${
                  ActiveBox === Box.Title ? "!filter brightness-0 invert" : ""
                }`}
                loading="lazy"
              />
              <p
                className={`text-center mb-0 text-[13px] font-semibold ${
                  ActiveBox === Box.Title ? "text-white" : "text-black"
                }`}
              >
                {Box.Title}
              </p>
            </div>
          ))}
        </div>

        {/* Image Section with Fade-in/out effect */}
        <motion.div
          className="relative grid grid-cols-1 md:grid-cols-4 gap-6 py-8"
          key={ActiveBox} // Ensures the animation runs when ActiveBox changes
          initial={{ opacity: 0 }} // Start state: invisible
          animate={{ opacity: 1 }} // End state: fully visible
          exit={{ opacity: 0 }} // Fade out when component unmounts
          transition={{ duration: 0.9, ease: "easeIn" }} // Transition settings
          style={{ minHeight: "400px" }} // Set a minimum height to prevent layout shift
        >
          {Optech_Services_imgs[ActiveBox]?.map((block, index) => (
            <div
              className={`md:w-[170px] lg:w-[230px] xl:w-[290px] w-[100px] overflow-hidden flex flex-col items-center`}
              key={index}
            >
              <img src={block.img} alt={block} loading="lazy" />
              <p className="text-[10px] lg:text-lg text-center font-semibold capitalize text-slate-700">
                {block.title}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
//----------- e-commerce
// ecommerce Assistant
// marketing assistant
// Admin assistant
// Dataentry  Assistant
// -----------finace
// account assistant
// financial assistant
// admin assiattan
// bookeeper
// move doctor picture to health care
// ----------Healthcare
// care coordrianto
// isurance assistant
// admin assistant
// healthcare asssistant

// -------real state
// sales assistant
// marketing assistat
// admin assiatnt
// property management

// insurance
// insurance assiatny
// admin assistant
// marketing assiattn
// sales assiatant

// ------humman resourse
// tech assistant
// hr assistant
// admin assistnt
// recruitment assistant
