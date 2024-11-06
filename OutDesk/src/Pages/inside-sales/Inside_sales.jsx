import React, { useMemo } from "react";
// import images
import images from "./inside-sales_img";
// import Hooks
import UseDocumnetTitle from "../../Hooks/UseDocumnetTitle";
// import componenets
import FixedHeader from "../../Components/FixedHeader";
import ScaleBusiness from "../../Components/ScaleBusiness";
import LeaderinVirtual from "../../Components/LeaderinVirtual";
import WhyHireAssistant from "../../Sections/WhyHire/WhyHireAssistant";
import SpecificExpertise from "../../Components/SpecificExpertise";
import FindYourVirtual from "../../Sections/FindYourVirtual";
import TestemonilesSection from "../../Sections/TestemonilesSection";
 import TryOptech from "../../Sections/TryOptech";
import Footer from "../../Components/Footer";
import FrequentlyAsked from "../../Sections/FrequentlyAsked";
// import arr
import {
  Fixed_Header_arr as FixedHeaderData,
  Leader_in_Virtual as LeaderinvirtualData,
  What_a_Customer_Service as WhataCustomerService,
  Industry_Specificarr as IndustrySpecificarr,
  Frequentlyasked as FAQData,
} from "./inside-sales_arr";

function Inside_sales() {
  UseDocumnetTitle("Inside Sales");
  // Memoize static data to avoid unnecessary recalculations

  const FixedHeaderContent = useMemo(() => FixedHeaderData, []);
  const leaderContent = useMemo(() => LeaderinvirtualData, []);
  const WhataCustomerServiceContent = useMemo(() => WhataCustomerService, []);
  const Industry_SpecifiContent = useMemo(() => IndustrySpecificarr, []);
  const FrequentlyaskedContent = useMemo(() => FAQData, []);
  return (
    <>
      <FixedHeader
        bgImg={images.fixedHeaderImg}
        title={FixedHeaderContent.title}
        description={FixedHeaderContent.description}
      />
      <ScaleBusiness />
      <LeaderinVirtual
        image2={images.LeaderinVirtualimagesone}
        title={leaderContent.title}
        pargraph={leaderContent.pargraph}
      />
      <WhyHireAssistant
        title={"What a Virtual Inside Sales Agent Can Do For You"}
        ArrAnswer={WhataCustomerServiceContent}
      />
      <SpecificExpertise
        title={Industry_SpecifiContent[0]?.title} // First element has the title
        description={Industry_SpecifiContent[1]?.description} // Second element has the description
        Links={Industry_SpecifiContent[2]?.links} // Third element has the links
        img={images.IndusetryImg} // Passing image
      />
      <FindYourVirtual />
      <TestemonilesSection />

      <FrequentlyAsked questionsArr={FrequentlyaskedContent} />
       <TryOptech />
      <Footer />
    </>
  );
}
export default React.memo(Inside_sales);
