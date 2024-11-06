import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
export default function FixedHeader({ bgImg, title, description }) {
  return (
    <>
      <Navbar />
      <div
  className="relative w-full h-[500px] md:h-screen py-10 bg-cover md:bg-cover"
  style={{
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: 'center top',
    backgroundSize: 'cover', // This is for desktop
  }}
>
  {/* Overlay Gradient */}
  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[rgba(0,23,37,0.8)] to-transparent z-0"></div>

  {/* Content Section */}
  <div className="relative z-10 flex flex-col items-start w-full lg:justify-center justify-end h-full text-white max-w-2xl px-4 md:px-8">
    <h3 className="text-sky-100 text-xs md:text-sm lg:text-[15px] font-medium uppercase tracking-widest">
      Hire a Qualified
    </h3>
    <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mt-2 md:mt-4">{title}</h1>
    <p
      className="mt-2 md:mt-4 text-[13px] md:text-lg text-gray-100"
      dangerouslySetInnerHTML={{ __html: description }}
    ></p>
    <Link
      to="/book-call"
      className="mt-8 mainButton text-white font-semibold py-3 px-6 rounded-md shadow-md transition-colors duration-300"
    >
      Book a Strategy Call
    </Link>
  </div>
</div>

{/* Additional CSS in Tailwind for Mobile Positioning */}
<style jsx>{`
  @media (max-width: 768px) {
    .bg-cover {
      background-size: contain; /* Ensures full image is visible */
      background-position: center; /* Centered on mobile */
      height: 60vh; /* Adjust height for more vertical space */
    }
  }
`}</style>



    </>
  );
}
