import { FaCheckDouble } from "react-icons/fa6";

export default function Modelsaves() {
  return (
    <div className="container grid md:grid-cols-2 grid-cols-1 gap-4 py-14 bg-[#EEF1FF] lg:rounded-xl ">
      <div className="md:px-5">
        <hr className="border-ButtonColor" />
        <h2 className="mainTitle !text-left !text-4xl  ">
          Our model saves our clients
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-blue-950 bg-clip-text text-transparent text-5xl md:text-6xl font-bold mx-1 block my-2">
            Up to 70%
          </span>        
      
          in traditional hiring costs.
        </h2>
      </div>
      <div>
        <h3 className="text-xl pb-4 font-medium">
          We provide competitive compensation to our virtual assistants, as well
          as handle:
        </h3>
        <ul className="list-disc list-inside flex flex-col gap-2">
          <li className="flex flex-row items-center gap-2 ">
            <FaCheckDouble className="text-secondary text-[18px]" />
            <span>Human resource concerns</span>
          </li>
          <li className="flex flex-row items-center gap-2 ">
            <FaCheckDouble className="text-secondary text-[18px]" />
            <span>Paid time-off</span>
          </li>
          <li className="flex flex-row items-center gap-2 ">
            <FaCheckDouble className="text-secondary text-[18px]" />
            <span>Benefits</span>
          </li>
          <li className="flex flex-row items-center gap-2 ">
            <FaCheckDouble className="text-secondary text-[18px]" />
            <span>Insurance</span>
          </li>
          <li className="flex flex-row items-center gap-2 ">
            <FaCheckDouble className="text-secondary text-[18px]" />
            <span>Equipment</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
