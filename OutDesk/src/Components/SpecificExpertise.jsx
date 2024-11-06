import { Link } from "react-router-dom";

export default function SpecificExpertise({ title, description, Links, img }) {
  return (
    <div className="bg-[#19243B] py-14">
      <div className="container  grid grid-cols-12 border-b border-solid border-[#305dbd] py-8 lg:gap-14">
        <div className=" overflow-hidden lg:col-span-4 col-span-12 rounded-lg lg:h-[600px] h-full w-full">
          <img src={img} alt="Specific Expertise" className="w-full h-full" />
        </div>
        <div className="flex flex-col items-start lg:col-span-8 col-span-12">
          <h2 className="leading-10  font-bold lg:text-[36px] text-[27px] py-6 text-white">
            {title}
          </h2>
          <p
            dangerouslySetInnerHTML={{ __html: description }}
            className="text-gray-200 lg:text-[16px] text-sm leading-[25px]  "
          ></p>
        </div>
      </div>
      <div className="container py-8">
        <p className="py-4 text-white font-medium text-lg">
          Explore Popular Industries :
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Links?.map((link, index) => (
            <li key={index}>
              <Link
                to={`/${link.route}`}
                key={index}
                className="inline-flex items-center w-full px-[20px] py-[15px] rounded-[4px] bg-[rgba(255,_255,_255,_.1)] text-[#fff] no-underline cursor-pointer hover:bg-[#305DBD]"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
