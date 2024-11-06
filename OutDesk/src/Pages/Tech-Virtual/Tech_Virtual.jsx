import React, { useMemo } from "react";
// import images
import images from "./Tech_Virtual_img";
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
import Related_Service from "../../Sections/Related_Service";
import FindYourVirtual from "../../Sections/FindYourVirtual";
// import used arr
import {
  Frequentlyasked as FAQData,
  Leader_in_Virtual as LeaderData,
  What_a_Customer_Service as CustomerServiceTasks,
  Fixed_Header_arr as FixedHeaderData,
  Related_Service_arr as RelatedServiceData,
} from "./Tech_Virtual_arr";
function Tech_Virtual() {
  // set title to page
  UseDocumnetTitle("Tech Virtual");
  // ------------Memoize static data to avoid unnecessary recalculations
  const fixedHeaderContent = useMemo(() => FixedHeaderData, []);
  const leaderContent = useMemo(() => LeaderData, []);
  const customerServiceTasks = useMemo(() => CustomerServiceTasks, []);
  const relatedServiceContent = useMemo(() => RelatedServiceData, []);
  const frequentlyAskedQuestions = useMemo(() => FAQData, []);

  return (
    <div>
      <FixedHeader
        bgImg={images.fixedHeaderImg}
        title={fixedHeaderContent.title}
        description={fixedHeaderContent.description}
      />
      <ScaleBusiness />
      <LeaderinVirtual
        image2={images.LeaderinVirtualimagesone}
        title={leaderContent.title}
        pargraph={leaderContent.pargraph}
      />
      <WhyHireAssistant
        title={" What a Tech Virtual Assistant Can Do For You"}
        ArrAnswer={customerServiceTasks}
      />

      <Related_Service Related_Service_arr={relatedServiceContent} />
      <FindYourVirtual />
      <FrequentlyAsked questionsArr={frequentlyAskedQuestions} />
      <TestemonilesSection />
       <TryOptech />
      <Footer />
    </div>
  );
}
export default React.memo(Tech_Virtual);
