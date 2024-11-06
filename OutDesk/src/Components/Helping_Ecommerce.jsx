import React from "react";

export default function Helping_Ecommerce({
  HelpingEcommerce,
  maintitle,
  description,
}) {
  return (
    <>
      <div className="container py-14">
        <h2 className="mainTitle">{maintitle}</h2>
        <p className="text-textcolor text-center text-md ">{description}</p>
        <div className="flex md:flex-row flex-col items-center  justify-center mt-6 gap-6 py-14">
          {HelpingEcommerce.map((virtual, index) => (
            <div
              className="flex flex-col items-center justify-center last:border-none lg:border-r border-solid border-neutral-400  px-16 "
              key={index}
            >
              <div className="  overflow-hidden  ">
                <img src={virtual.image} alt={virtual.image} loading="lazy" />
              </div>
              <h3 className="my-[2px]  text-[18px] font-medium text-primary ">
                {virtual.Title}
              </h3>
              <p className="text-textcolor mx-auto text-center">
                {virtual.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
