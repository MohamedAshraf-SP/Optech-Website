// import images
import images from "./Marketing_Virtualimg";
// import Hooks
import UseDocumnetTitle from "../../Hooks/UseDocumnetTitle";
// import componenets
import FixedHeader from "../../Components/FixedHeader";
import ScaleBusiness from "../../Components/ScaleBusiness";
import LeaderinVirtual from "../../Components/LeaderinVirtual";
import WhyHireAssistant from "../../Sections/WhyHire/WhyHireAssistant";
import SpecificExpertise from "../../Components/SpecificExpertise";
import UsApart from "../../Sections/UsApart";
import FindYourVirtual from "../../Sections/FindYourVirtual";
import TestemonilesSection from "../../Sections/TestemonilesSection";
 import TryOptech from "../../Sections/TryOptech";
import Footer from "../../Components/Footer";
import FrequentlyAsked from "../../Sections/FrequentlyAsked";
// import arr
import {
  Frequentlyasked,
  Industry_Specificarr,
  Leader_in_Virtual,
  Fixed_Header_arr,
  What_An_Administrative,
} from "./Marketing_Virtual_arr";
export default function Marketing_Virtual() {
  UseDocumnetTitle("Marketing Virtual");

  return (
    <div>
      <FixedHeader
        bgImg={images.fixedHeaderImg}
        title={Fixed_Header_arr.title}
        description={Fixed_Header_arr.description}
      />
      <ScaleBusiness />
      <LeaderinVirtual
        image1={images.LeaderinVirtualImageOne}
        image2={images.LeaderinVirtualImageTwo}
        title={Leader_in_Virtual.title}
        pargraph={Leader_in_Virtual.pargraph}
      />
      <WhyHireAssistant
        title={" What A Marketing Virtual Assistant Can Do For You?"}
        ArrAnswer={What_An_Administrative}
      />
      <SpecificExpertise
        title={Industry_Specificarr[0]?.title} // First element has the title
        description={Industry_Specificarr[1]?.description} // Second element has the description
        Links={Industry_Specificarr[2]?.links} // Third element has the links
        img={images.IndustrySpecifier} // Passing image
      />

      <UsApart />
      <FindYourVirtual />
      <FrequentlyAsked questionsArr={Frequentlyasked} />
      <TestemonilesSection />
       <TryOptech />
      <Footer />
    </div>
  );
}
