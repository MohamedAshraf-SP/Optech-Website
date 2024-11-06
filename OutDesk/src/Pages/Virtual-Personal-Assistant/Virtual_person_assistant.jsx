import React, { useMemo } from "react";
// import images
import images from "./Virtual_assistant_person_img";
// import components
import FixedHeader from "../../Components/FixedHeader";
import ScaleBusiness from "../../Components/ScaleBusiness";
import LeaderinVirtual from "../../Components/LeaderinVirtual";
import WhyHireAssistant from "../../Sections/WhyHire/WhyHireAssistant";
import UsApart from "../../Sections/UsApart";
import SpecificExpertise from "../../Components/SpecificExpertise";
import FindYourVirtual from "../../Sections/FindYourVirtual";
 import TestemonilesSection from "../../Sections/TestemonilesSection";
 import TryOptech from "../../Sections/TryOptech";
import Footer from "../../Components/Footer";
// import arr
import {
  Fixed_Header_arr as FixedHeaderData,
  Leader_in_Virtual as LeaderinvirtualData,
  Industry_Specificarr as IndustrySpecificarr,
  What_An_Administrative as WhatAnAdministrative,
} from "./Virtual_assistant_person_arr";
import UseDocumnetTitle from "../../Hooks/UseDocumnetTitle";

function Virtual_person_assistant() {
  UseDocumnetTitle("Virtual Personal Assistant");
  // Memoize static data to avoid unnecessary recalculations

  const FixedHeaderContent = useMemo(() => FixedHeaderData, []);
  const leaderContent = useMemo(() => LeaderinvirtualData, []);
  const WhatAnAdministrativeContent = useMemo(() => WhatAnAdministrative, []);
  const Industry_SpecifiContent = useMemo(() => IndustrySpecificarr, []);
  return (
    <>
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
        title={" Here’s What A Virtual Personal Assistant Can Do For You"}
        ArrAnswer={WhatAnAdministrativeContent}
      />
      <UsApart />
      <SpecificExpertise
        title={Industry_SpecifiContent[0]?.title} // First element has the title
        description={Industry_SpecifiContent[1]?.description} // Second element has the description
        Links={Industry_SpecifiContent[2]?.links} // Third element has the links
        img={images.Specific_Expertise} // Passing image
      />
      <FindYourVirtual />

      <TestemonilesSection />
 
      <TryOptech />
      <Footer />
    </>
  );
}
export default React.memo(Virtual_person_assistant);
