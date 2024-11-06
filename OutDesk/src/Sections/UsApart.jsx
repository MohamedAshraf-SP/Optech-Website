import React, { useRef } from "react";
 import UsApartBlock from "../Components/Us ApartBlock";
 
import { UsApartarr } from "../assets/UsedArr";
import { motion, useInView } from "framer-motion";

export default function UsApart() {
  return (
    <div className="md:py-14 bg-[center_center] bg-no-repeat bg-contain">
      <h2 className="text-3xl md:text-4xl font-semibold text-secondary text-center py-4 md:py-2 mx-auto lg:w-[500px]">
        What Sets Us Apart
        <hr className="w-40 h-1 mx-auto my-2 bg-primary rounded-xl" />
      </h2>
      <div className="container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:py-10 py-4 md:gap-10 gap-4">
        {UsApartarr.map((part, index) => {
          const ref = useRef(null); // Create a ref for each motion.div
          const isInView = useInView(ref, { margin: "-100px", once: true }); // Trigger animation 100px before entering

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 10 }} // Start state
              animate={isInView ? { opacity: 1, y: 0 } : {}} // End state
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <UsApartBlock
                title={part.title}
                description={part.description}
                image={part.image}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
