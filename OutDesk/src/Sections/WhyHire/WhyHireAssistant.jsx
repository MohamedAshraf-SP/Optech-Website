import React, { useState } from "react";

function WhyHireAssistant({ title, ArrAnswer }) {
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  return (
    <div className="container py-10 mb-4">
      <h2 className="text-3xl md:text-4xl font-semibold text-secondary text-center py-6 mx-auto lg:w-[500px]">
        {title}
        <hr className="w-40 h-1 mx-auto my-2 bg-primary rounded-xl" />
      </h2>
      <div className="grid grid-cols-12 gap-6">
        <div className="lg:col-span-3 col-span-12">
          <ul className="flex flex-col items-start">
            {ArrAnswer.map((question, index) => (
              <li
                key={index}
                className={`font-semibold text-[16px] cursor-pointer px-2 py-2 hover:bg-primary/10 transition-all ease-in-out rounded-md my-2 ${
                  selectedQuestion === index
                    ? "text-primary bg-primary/5 border-l-4 border-primary"
                    : "text-secondary"
                }`}
                onClick={() => setSelectedQuestion(index)}
              >
                {question.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Answer Block */}
        <div className="lg:col-span-9 col-span-12 p-6 rounded-xl bg-[#EEF1FF] text-textcolor text-[16px] leading-[28px] shadow-lg transition-all ease-in-out duration-200 border border-primary  ">
          <div className="text-left mb-4">
            <h3 className="text-xl font-semibold text-primary mb-2">
              {ArrAnswer[selectedQuestion].title}
            </h3>
          </div>
          <div className="flex justify-start items-center">
            <div className="text-[16px]   text-left font-medium ">
              {ArrAnswer[selectedQuestion].Answer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(WhyHireAssistant);
