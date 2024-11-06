// import images
import images from "./Customer_Service_img";
// import components
import FixedHeader from "../../Components/FixedHeader";
import ScaleBusiness from "../../Components/ScaleBusiness";
import LeaderinVirtual from "../../Components/LeaderinVirtual";
import WhyHireAssistant from "../../Sections/WhyHire/WhyHireAssistant";
import SpecificExpertise from "../../Components/SpecificExpertise";
import UsApart from "../../Sections/UsApart";
import FindYourVirtual from "../../Sections/FindYourVirtual";
import FrequentlyAsked from "../../Sections/FrequentlyAsked";
import TestemonilesSection from "../../Sections/TestemonilesSection";
 import TryOptech from "../../Sections/TryOptech";
import Footer from "../../Components/Footer";
import UseDocumnetTitle from "../../Hooks/UseDocumnetTitle";
// import arr
import {
  Fixed_Header_arr as FixedHeaderData,
  Leader_in_Virtual as LeaderinvirtualData,
  What_a_Customer_Service as WhataCustomerService,
  Industry_Specificarr as IndustrySpecificarr,
  Frequentlyasked as FAQData,
} from "./Customer_Service_arr";
import React, { useMemo } from "react";
function CustomerService() {
  UseDocumnetTitle("Customer_Service");
  // Memoize static data to avoid unnecessary recalculations

  const FixedHeaderContent = useMemo(() => FixedHeaderData, []);
  const leaderContent = useMemo(() => LeaderinvirtualData, []);
  const WhataCustomerServiceContent = useMemo(() => WhataCustomerService, []);
  const Industry_SpecifiContent = useMemo(() => IndustrySpecificarr, []);
  const FrequentlyaskedContent = useMemo(() => FAQData, []);
  return (
    <div>
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
        title={" What a Customer Service Virtual Assistant Can Do For You"}
        ArrAnswer={WhataCustomerServiceContent}
      />
      <SpecificExpertise
        title={Industry_SpecifiContent[0]?.title} // First element has the title
        description={Industry_SpecifiContent[1]?.description} // Second element has the description
        Links={Industry_SpecifiContent[2]?.links} // Third element has the links
        img={images.IndusetryImg} // Passing image
      />
      <UsApart />
      <FindYourVirtual />
      <FrequentlyAsked questionsArr={FrequentlyaskedContent} />
      <TestemonilesSection />
       <TryOptech />
      <Footer />
    </div>
  );
}
export default React.memo(CustomerService);
