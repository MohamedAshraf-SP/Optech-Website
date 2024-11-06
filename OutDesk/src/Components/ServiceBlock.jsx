import { Link } from "react-router-dom";
import icons from "../assets/Icons";
export default function ServiceBlock({ icon: Icon, title, text, path }) {
  return (
    <div className="p-8 rounded-2xl border border-[#e3e3ec] bg-white shadow-sm hover:border-transparent hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer group min-h-[250px] flex flex-col justify-between">
      <article className="flex items-start gap-6">
        <div className="w-[90px] h-[70px] flex items-center justify-center px-3 rounded-lg bg-[#eef1ff] text-4xl text-black transition-all duration-300 ease-in-out group-hover:bg-primary group-hover:text-white">
          <Icon />
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <header>
            <h3 className="text-secondary capitalize text-xl font-semibold">
              {title}
            </h3>
          </header>
          <p className="text-textcolor line-clamp-5 flex-grow">{text}</p>
          <Link
            to={path}
            className="flex items-center gap-2 mt-4 font-semibold text-primary hover:translate-x-2 transition-transform duration-300 ease-in-out"
            aria-label={`Learn more about ${title}`}
          >
            Learn More
            <icons.FaArrowRight />
          </Link>
        </div>
      </article>
    </div>
  );
}
