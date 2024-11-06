import React, { useRef } from "react";
import ServiceBlock from "../Components/ServiceBlock";
import { OurServices } from "../assets/UsedArr";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

export default function Services() {
  return (
    <div className="bg-white py-14">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-semibold text-secondary text-center py-6 md:py-8 mx-auto lg:w-[500px]">
          Our awesome services to give you success
          <hr className="w-40 h-1 mx-auto my-4 bg-primary rounded-xl" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
          {OurServices.map((item, index) => {
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

        <Link
          to="/ALL-Services"
          className="flex justify-center text-lg font-semibold text-white py-2 mx-auto w-[200px]  gradient_button rounded-md transition-all ease-out duration-300"
        >
          View All Services
        </Link>
      </div>
    </div>
  );
} 
