import { Link } from "react-router-dom";

export default function LeaderinVirtual(props) {
  return (
/* Inline CSS */
<div className="container mx-auto px-4 py-20">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    {/* Image Section */}
    <div
      className={`relative lg:order-${props.imgorder} flex justify-center items-center lg:mt-10`}
    >
      {props?.image2 && (
        <div className="rounded-lg overflow-hidden   w-full max-w-[600px] h-[800px]">
          <img
            src={props.image2}
            loading="lazy"
            alt={props?.title || "Image"}
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      )}
    </div>

    {/* Text Section */}
    <div
      className={`lg:order-${props.textorder} px-4 lg:px-8 text-center lg:text-left mt-10`}
    >
      <h2 className="py-5 lg:text-4xl text-2xl text-blue-900 font-semibold leading-tight">
        {props?.title}
      </h2>
      <p
        className="text-gray-700 mb-10 leading-7"
        dangerouslySetInnerHTML={{ __html: props?.pargraph }}
      />
      <Link
        to="/book-call"
        className="inline-block py-3 px-6 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition duration-300"
      >
        Book a Strategy Call
      </Link>
    </div>
  </div>
</div>



  
  );
}
