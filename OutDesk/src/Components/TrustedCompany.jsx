// import images
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TrustedCompanies } from "../assets/images";
export default function TrustedCompany() {
  const autoplaySpeed = 3000;
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: autoplaySpeed,
    pauseOnHover: true,
    lazyLoad: "ondemand", // Lazy load images only when they are needed
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-white container overflow-hidden">
        <div className="container pb-8">
          <h4 className="text-center text-3xl text-secondary font-bold py-14">
            Trusted By Leaders
          </h4>
          <Slider {...settings}>
            {TrustedCompanies.map((image, index) => (
              <div key={index} className="cursor-pointer ">
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-fit h-10 hover:scale-110 transition duration-300 "
                  loading="lazy"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
