import React, { useMemo } from "react";
// import images
import images from "./AdministrativeImgs";
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
  Fixed_Header_arr as FixedHeaderData,
  Leader_in_Virtual as LeaderinvirtualData,
  Frequentlyasked as FAQData,
  Industry_Specificarr as IndustrySpecificData,
  What_An_Administrative as WhatAnAdministrativeData,
} from "./AdministrativeArr";

function Administrative_Assistant() {
  UseDocumnetTitle("Administrative_Assistant");
  // -------Memoize static data to avoid unnecessary recalculations
  const FixedHeaderContent = useMemo(() => FixedHeaderData, []);
  const leaderContent = useMemo(() => LeaderinvirtualData, []);
  const FrequentlyaskedContent = useMemo(() => FAQData, []);
  const Industry_SpecifiContent = useMemo(() => IndustrySpecificData, []);
  const What_An_AdministrativeContent = useMemo(
    () => WhatAnAdministrativeData,
    []
  );

  return (
    <div>
      <FixedHeader
        bgImg={images.fixedHeaderImg}
        title={FixedHeaderContent.title}
        description={FixedHeaderContent.description}
      />
      <ScaleBusiness />
      <LeaderinVirtual
        image2={images.LeaderinVirtualImageTwo}
        title={leaderContent.title}
        pargraph={leaderContent.pargraph}
      />
      <WhyHireAssistant
        title={" What An Administrative Virtual Assistant Can Do For You?"}
        ArrAnswer={What_An_AdministrativeContent}
      />
      <SpecificExpertise
        title={Industry_SpecifiContent[0]?.title} // First element has the title
        description={Industry_SpecifiContent[1]?.description} // Second element has the description
        Links={Industry_SpecifiContent[2]?.links} // Third element has the links
        img={images.SpecificExpertiseImg} // Passing image
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
export default React.memo(Administrative_Assistant);
