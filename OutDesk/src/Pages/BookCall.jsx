import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BookCallimg from   "/images/HowMuchDoes/smiling.webp";
 import whatExpectImg from "/images/BookCall/Capture.webp";
import capture1 from "/images/BookCall/Capture1.webp";
import capture2 from "/images/BookCall/Capture2.webp";
import capture3 from "/images/BookCall/Capture3.webp";
import TestemonilesSection from "../Sections/TestemonilesSection";
import UseDocumnetTitle from "../Hooks/UseDocumnetTitle";
export default function BookCall() {
   UseDocumnetTitle("Book Call");

  const CalendyUrl = import.meta.env.VITE_CALENDY_URL;
  const whatExpectarr = [
    {
      img: capture1,
      title: "Strategy Session",
      Paragraph:
        "Our consultants will take a deep dive into your business goals and challenges to identify areas where a virtual assistant can supercharge your business.",
    },
    {
      img: capture2,
      title: "Create Plan with Our Team",
      Paragraph:
        "Partner with our expert to build a customized roadmap. Define tasks, seamless workflow integration, and clear success metrics.",
    },
    {
      img: capture3,
      title: "Interview & Select Talent",
      Paragraph:
        "Leverage on our years of expertise to find your ideal virtual assistant. Boost productivity, reduce costs, and propel your business growth – guaranteed.",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="bg-[#F8F8F8] py-10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  ">
            <div className="relative flex flex-col items-center justify-start lg:py-14  lg:order-1 order-2">
              <h2 className="text-center text-4xl font-bold py-4 text-secondary ">
                Strategy Call with <br />
                <span className="text-primary text-center"> an Expert</span>
              </h2>
              <p className="text-textcolor text-[17px] text-left  md:text-center leading-relaxed my-2">
              <strong>Ready to take your business to the next level ?</strong> <br/>Don’t let repetitive tasks hold you back! Book a strategy call with us today and discover how our Virtual Assistants can transform your workflow, boost your productivity, and help you focus on what truly matters—growing your business. Let’s turn your vision into reality!<br/> By filling out this form, you are consenting to getting communications from MyBudgetStaff. Calls are recorded for quality assurance purposes.
              </p>
              <a href={CalendyUrl} target="_blank" className="mainButton my-6">
                Book a Strategy Call
              </a>
            </div>
            <div className=" overflow-hidden lg:order-2 order-1">
              <div className="overflow-hidden hidden lg:flex items-center justify-center mx-auto">
                <img
                  src={BookCallimg}
                  alt="BookCallimg"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

 

          {/* start what to Expect */}
          <div className="pb-10 my-20">
            <h2 className="mainTitle !text-center">What to Expect</h2>
            <div className="lg:flex hidden flex-row justify-center items-center overflow-hidden h-[240px]">
              <img src={whatExpectImg} alt="what to expect" />
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1  space-y-10 ">
              {whatExpectarr.map((expectedBlock, index) => (
                <div
                  className="flex flex-col items-center justify-between mx-4"
                  key={index}
                >
                  <div className="rounded-full w-24 h-24 border-4 border-solid border-[#F89F24] flex justify-center items-center overflow-hidden lg:hidden">
                    <img
                      src={expectedBlock.img}
                      alt={expectedBlock.img}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-secondary capitalize text-xl font-medium text-center">
                    {expectedBlock.title}
                  </h3>
                  <p className="text-textcolor text-center">
                    {expectedBlock.Paragraph}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-14">
            <TestemonilesSection />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
