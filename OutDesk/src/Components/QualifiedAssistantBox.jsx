 
export default function QualifiedAssistantBox({
  Icon,
  Title,
  Active_Box_func,
  Number,
}) {
  
  return (
    <>
      <button
        className="px-[15px] md:py-[25px] py-2 m-[10px] !rounded-[10px] !bg-[#EEEE] md:max-w-[170px] w-full md:min-w-[170px] text-[#000] border border-solid border-transparent flex items-center justify-between"
        onClick={() => Active_Box_func(Number)}
      >
        <img
          src={Icon}
          alt={Icon}
          className="h-[60px] w-[60px] pb-[10px] text-black  "
          loading="lazy"
        />
        <p className="text-center mb-0 text-[13px] font-semibold  text-gray-700">
          {Title}
        </p>
      </button>
    </>
  );
}
