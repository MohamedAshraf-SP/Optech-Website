import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
export default function Level_Up_OutDesk({ img, description, Title }) {
 
  return (
    <>
      <div className="relative container py-14">
        <div className="grid grid-cols-12 gap-10">
          <div className="lg:col-span-7 col-span-12 ">
            <h2 className="text-2xl md:text-3xl text-left font-semibold pb-4 text-secondary ">
              {Title}
            </h2>
            <p
              className="text-textcolor "
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
          <div className="lg:col-span-5 col-span-12   mt-4   rounded-lg overflow-hidden h-[400px] w-full max-w-[600px] ">
            <img
              src={img}
              alt="business-development"
              className="w-full h-full  object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </div>
      </div>
    </>
  );
}
