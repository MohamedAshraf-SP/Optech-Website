import Slider from "react-slick";
import { TestemonilesContent } from "../assets/UsedArr";
import TestemonileBlock from "../Components/TestemonileBlock";
export default function TestemonilesSection() {
  const autoplaySpeed = 4000;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: autoplaySpeed, // Match progress bar speed
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024, // Desktop screens
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Tablets and small screens
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="testemonilesSlack py-6 container lg:overflow-visible overflow-hidden">
        <h2 className="mainTitle">What Our Clients Are Saying</h2>
        <hr className="w-40 h-1 mx-auto   bg-primary rounded-xl " />
        <div className="py-8">
          <Slider {...settings}>
            {TestemonilesContent?.map((block, index) => (
              <div key={index}>
                <TestemonileBlock
                  image={block.Img}
                  stars={block?.StarsNum}
                  description={block?.description}
                  title={block?.Title}
                  Name={block?.Name}
                  company={block?.Company}
                />
              </div>
            ))}
            <div></div>
          </Slider>
        </div>
      </div>
    </>
  );
}
