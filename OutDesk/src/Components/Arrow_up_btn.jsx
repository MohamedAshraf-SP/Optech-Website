import { useEffect, useState } from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Arrow_up_btn() {
  const URL = import.meta.env.VITE_WHATS_APP_URL;
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showButton && (
        <div className=" z-50 fixed bottom-4 md:right-4 right-1 flex flex-col items-center justify-center gap-4">
          <a
            href={URL}  
            target="_blank"
            rel="noopener noreferrer"
            className="md:w-14 md:h-14 w-12 h-12 outline-none bg-green-500 text-white font-bold rounded-full flex items-center justify-center text-2xl hover:bg-green-600 transition duration-300 shadow-lg"
          >
            <FaWhatsapp />
          </a>
          <button
            className=" md:w-14 md:h-14 w-10 h-10 outline-none bg-slate-200 text-secondary font-bold rounded-full flex items-center justify-center text-2xl hover:bg-primary hover:text-white cursor-pointer transition Transition "
            onClick={scrollTop}
          >
            <MdOutlineKeyboardDoubleArrowUp />
          </button>
        </div>
      )}
    </>
  );
}
