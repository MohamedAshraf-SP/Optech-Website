 

export default function UsApartBlock({ title, description, image }) {
  return (
    <div className="p-8 pt-5 pb-20 rounded-xl bg-white flex flex-col justify-between h-[350px] gap-4 border border-solid border-neutral-200 transition-shadow hover:shadow-lg cursor-pointer">
      <div className="w-[90px] h-auto flex items-center justify-center px-3 py-2 rounded-lg bg-[#eef1ff] overflow-hidden">
        <img
          src={image}
          alt="Diverse Talent"
          loading="lazy"
          className="max-w-full max-h-full"
        />
      </div>
      <h3 className="text-xl font-semibold text-secondary mt-4 flex-shrink-0">
        {title}
      </h3>
      <p className="text-textcolor flex-grow min-h-[110px] ">{description}</p>
    </div>
  );
}
