import { Link } from "react-router-dom";
import Images from "../assets/images";

export default function TryOptech() {
  return (
    <div className="container my-12">
      <div
        className="rounded-xl md:px-[50px] px-[20px]  
        bg-[#f7fafc] flex md:flex-row flex-col items-center justify-between gap-8 shadow-md"
      >
        {/* Text Section */}
        <div className="flex flex-col items-start justify-center gap-6 max-w-lg">
          <p className="text-[#0e1418] md:text-[42px] text-[28px] font-medium leading-[48px]">
            Ready to achieve more?
          </p>
          <h2 className="text-[#1c3faa] md:text-[42px] text-[28px] font-semibold leading-[48px]">
            Try MyBudgetStaff!
          </h2>
          <Link to="/book-call" className="mainButton">
            Book a Strategy Call
          </Link>
        </div>

        {/* Image Section */}
        <div className="lg:w-[350px] lg:h-[350px] w-full h-full overflow-hidden rounded-md  ">
          <img
            src={Images.TryOPtechImg}
            alt="Try Optech"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
