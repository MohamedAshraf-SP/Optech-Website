import { useState } from "react";
import icons from "../assets/Icons";
import FrequentlyaskedImg from "/images/Frequently asked/bg14-1.webp";
import { Link } from "react-router-dom";
import capitalizeSentences from "../Hooks/Capitalize_Sentence";
export default function FrequentlyAsked({ questionsArr }) {
  // Function to handle expanded Block
  const [Collapse, SetCollapse] = useState(null);
  const Handel_Expanded_Block = (index) => {
    SetCollapse(index == Collapse ? null : index);
  };
  return (
    <div
      className="bg-[center_center] bg-no-repeat bg-contain bg-[#f6f9fd] mt-8"
      style={{ backgroundImage: `url(${FrequentlyaskedImg})` }}
    >
      <div className="container py-20">
        <h2 className="mainTitle">Frequently asked questions</h2>
        <hr className="w-40 h-1 mx-auto bg-primary rounded-xl " />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 py-12 ">
          {questionsArr?.slice(0, 8).map((questions, index) => (
            <div
              className={`mb-[15px] border border-solid border-[#e1e5ee] rounded-[10px] [box-shadow:1px_1px_15px_-5px_rgba(68,_71,_82,_.24)] 
                p-[16px]  bg-[#fdfdfd] transition-all duration-800 ease-in-out overflow-hidden ${
                  index === Collapse
                    ? "max-h-[380px] opacity-100"
                    : " max-h-16  "
                }`}
              key={index}
            >
              {/* Your content here */}

              <div className="flex flex-row items-center justify-between gap-2 text-[#343435]">
                <h3 className="font-semibold  text-[13px] md:text-[16px]  leading-[20px] text-primary">
                  {questions.Title}
                </h3>
                <span
                  className={`cursor-pointer transition-transform duration-400 ease-in-out transform ${
                    index === Collapse ? "rotate-45" : "rotate-0"
                  }`}
                >
                  <icons.FaPlus
                    className="text-lg"
                    onClick={() => Handel_Expanded_Block(index)}
                  />
                </span>
              </div>
            {index === Collapse && (
                <div>
                  <p
                    className="pl-2 pt-3 text-[14px]   text-[#55565e] font-medium   "
                    dangerouslySetInnerHTML={{
                      __html: capitalizeSentences(questions.Answer),
                    }}
                  ></p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mx-auto">
          <Link to="/book-call" className="mainButton ">
            Book a Strategy Call
          </Link>
        </div>
      </div>
    </div>
  );
}
