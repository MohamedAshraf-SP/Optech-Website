import { Link } from "react-router-dom";

export default function Dont_lose_customers() {
  return (
    <>
      <div className="bg-[#1b2943] py-14">
        <div className="container py-4 grid grid-cols-12 gap-6">
          <div className="border-t-2 mt-2 border-solid border-primary lg:col-span-5 col-span-12 py-4">
            <h3 className="text-[36px] font-medium text-white leading-10">
              Don’t lose customers to&nbsp;
              <span className="text text-ButtonColor ">
                AI & <br /> Call Answering Services
              </span>
            </h3>
          </div>
          <div className="lg:col-span-7 col-span-12">
            <p className=" text-white text-md mb-8">
              Don’t Settle for Generic Answers! An answering service can’t match
              the personal touch your customers deserve. With MyBudgetStaff
              Virtual Receptionists, you get unmatched service, reliability, and
              availability—all at a competitive price. Elevate your customer
              experience with the quality and consistency that
              only we can provide!
            </p>
            <Link
              to="/book-call"
              className="text-white mainButton p-4 rounded-md font-semibold text-[16px] transition duration-300 ease-in-out transform hover:shadow-lg hover:bg-white    "
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
