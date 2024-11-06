import React, { useMemo, useState } from "react";
import icons from "../../assets/Icons";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import { Frequentlyasked as Freqarr } from "../../assets/UsedArr";
import { Link } from "react-router-dom";
export default function Faq() {
  const Freqarr_Content = useMemo(() => Freqarr, []);
  // Function to handle expanded Block
  const [Collapse, SetCollapse] = useState("");
  const Handel_Expanded_Block = (index) => {
    SetCollapse(index == Collapse ? null : index);
  };
  return (
    <div>
      <Navbar />
      <div className="  container py-10 border-t border-solid border-neutral-100 flex flex-col items-center justify-center">
        {Freqarr_Content.map((qusetion_Block, index) => (
          <div
            className={`mb-[15px] first:border-none border-t border-solid border-neutral-300  
                p-[16px]    transition-all duration-800 ease-in-out overflow-hidden w-[300px] lg:w-[700px] ${
                  index === Collapse
                    ? "max-h-[380px] opacity-100"
                    : " max-h-16  "
                }`}
            key={index}
          >
            {/* Your content here */}

            <div className="flex flex-row items-center justify-between gap-2 text-[#343435]">
              <h3 className="font-semibold  text-[13px] md:text-[17px]  leading-[20px] text-secondary">
                {qusetion_Block.Title}
              </h3>
              <span
                className={`cursor-pointer transition-transform duration-400 ease-in-out transform ${
                  index === Collapse ? "rotate-45" : "rotate-0"
                }`}
              >
                <icons.FaPlus
                  className="text-lg hover:text-primary"
                  onClick={() => Handel_Expanded_Block(index)}
                />
              </span>
            </div>
            {index === Collapse && (
              <div>
                <p
                  className="pl-2 pt-3 text-[15px] leading-relaxed text-[#55565e] font-medium   "
                  dangerouslySetInnerHTML={{ __html: qusetion_Block.Answer }}
                ></p>
              </div>
            )}
          </div>
        ))}

        <h2 className="md:text-3xl text-2xl font-bold mt-10 py-2">
          Still have questions?
        </h2>
        <p className="text-textcolor py-2 text-center">
        We’re here to help! If you have any lingering doubts or need more information, don’t hesitate to reach out. <br/>Our team is ready to provide the answers you need to make the best decision for your business.
        </p>
        <Link
          to="/Contact"
          className="p-4 bg-[#E2E3EC] text-secondary font-semibold rounded-md hover:text-white hover:bg-secondary transition-Transiton"
        >
          Ask any question
        </Link>
      </div>
      <Footer />
    </div>
  );
}
