import React, { useMemo } from "react";
// import images
import images from "./Real_State_img";
// import components
import FixedHeader from "../../Components/FixedHeader";
import ScaleBusiness from "../../Components/ScaleBusiness";
import LeaderinVirtual from "../../Components/LeaderinVirtual";
import WhyHireAssistant from "../../Sections/WhyHire/WhyHireAssistant";
import FrequentlyAsked from "../../Sections/FrequentlyAsked";
import TestemonilesSection from "../../Sections/TestemonilesSection";
 import TryOptech from "../../Sections/TryOptech";
import Footer from "../../Components/Footer";
import UseDocumnetTitle from "../../Hooks/UseDocumnetTitle";
import {
  Frequentlyasked as FAQData,
  Leader_in_Virtual as LeaderinVirtualarr,
  What_a_Customer_Service as WhataCustomerService,
  Fixed_Header_arr as FixedHeaderData,
  Related_Service_arr as RelatedServicearr,
  Helping_ecommerce as Helpingcommerce,
} from "./Real_State_arr";
import Related_Service from "../../Sections/Related_Service";
import FindYourVirtual from "../../Sections/FindYourVirtual";
 function CustomerService() {
  UseDocumnetTitle("Real State");
  // Memoize static data to avoid unnecessary recalculations

  const FixedHeaderContent = useMemo(() => FixedHeaderData, []);
  const LeaderinVirtualContent = useMemo(() => LeaderinVirtualarr, []);
  const WhataCustomerServiceContent = useMemo(() => WhataCustomerService, []);
  const RelatedServicearrContent = useMemo(() => RelatedServicearr, []);
  const HelpingcommerceContent = useMemo(() => Helpingcommerce, []);
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
        title={LeaderinVirtualContent.title}
        pargraph={LeaderinVirtualContent.pargraph}
      />
      <WhyHireAssistant
        title={"What A Real Estate VA Can Do For You?"}
        ArrAnswer={WhataCustomerServiceContent}
      />
      {/* <Helping_Ecommerce
        HelpingEcommerce={HelpingcommerceContent}
        maintitle={"What a Real Estate Virtual Assistant Can Do For You?"}
        description={
          "Here is how MyBudgetStaff helped Realtors scale and grow in 2023."
        }
      /> */}
      <Related_Service Related_Service_arr={RelatedServicearrContent} />
      <FindYourVirtual />
      <FrequentlyAsked questionsArr={FrequentlyaskedContent} />
      <TestemonilesSection />
       <TryOptech />
      <Footer />
    </div>
  );
}
export default React.memo(CustomerService);
