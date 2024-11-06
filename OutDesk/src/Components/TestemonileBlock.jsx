import icons from "../assets/Icons";
import quoteImg from "/images/Testemoniles/quote.svg";
export default function TestemonileBlock({
  stars,
  description,
  title,
  Name,
  company,
  showIcons,
}) {
  return (
    <div className="flex flex-col items-start justify-start h-[400px] p-[29px] rounded-xl border border-solid border-[#e3e3ec] gap-2 mx-4 overflow-hidden">
      <div className="flex flex-row items-center justify-between  w-full">
        <ul className="flex flex-row items-center justify-center text-yellow-500 mb-4">
          {/* Render filled stars */}
          {Array(stars)
            .fill(null)
            .map((_, i) => (
              <li key={i}>
                <icons.FaStar />
              </li>
            ))}

          {/* Render empty stars */}
          {stars < 5 &&
            Array(5 - stars)
              .fill(null)
              .map((_, i) => (
                <li key={i} className="text-[#C4C5C6]">
                  <icons.FaStar />
                </li>
              ))}
        </ul>

        {showIcons && (
          <ul className="flex flex-row items-start justify-start mb-4 gap-3 text-lg">
            <li className="text-blue-600 hover:text-blue-700 cursor-pointer">
              <icons.FaRegEdit />
            </li>
            <li className="text-red-600 hover:text-red-700 cursor-pointer">
              <icons.MdDelete />
            </li>
          </ul>
        )}
      </div>

      <div>
        <p className="text-[18px] leading-[32px] text-[#90929c] font-medium h-[200px] overflow-hidden mb-4    ">
          “ {description}
        </p>
      </div>
      <div className="flex flex-row items-center justify-between gap-3 w-full">
        <div className="flex flex-col items-start justify-start ">
          <h3 className="font-semibold text-[20px]  text-secondary capitalize">
            {Name}
          </h3>
          <span className="font-medium text-[14px]  text-textcolor">
            {title}
          </span>
          <span className=" text-[14px]  text-textcolor">@{company}</span>
        </div>
        <div className="w-14 h-14   overflow-hidden">
          <img src={quoteImg} alt={"quoteImg"} loading="lazy" />
        </div>
      </div>
    </div>
  );
}
