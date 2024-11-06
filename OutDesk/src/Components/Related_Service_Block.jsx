import { Link } from "react-router-dom";

import icons from "../assets/Icons";
export default function Related_Service_Block({
  image,
  Title,
  description,
  Route,
}) {
  return (
    <div className="px-4 py-6 flex flex-col items-center justify-between overflow-hidden rounded-lg [box-shadow:rgba(99,_99,_99,_0.2)_0px_2px_8px_0px] h-full">
      <div className="overflow-hidden rounded-lg">
        <img src={image} alt="Related Service" className="w-full h-full" />
      </div>
      <div className="flex flex-col items-start justify-between flex-grow">
        <h3 className="text-neutral-800 mt-4 text-xl font-medium capitalize">
          {Title}
        </h3>
        <p className="text-textcolor py-6 flex-grow">
          {description}
        </p>
        <div className="mt-auto">
          <Link
            to={`/${Route}`}
            className="flex flex-row items-center gap-2 font-semibold text-primary hover:translate-x-2 transition-transform duration-300 ease-in-out"
          >
            Learn More
            <icons.FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
