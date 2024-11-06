// import images
import images from "./Business_Development_img";
// import components
import FixedHeader from "../../Components/FixedHeader";
import ScaleBusiness from "../../Components/ScaleBusiness";
import LeaderinVirtual from "../../Components/LeaderinVirtual";
import WhyHireAssistant from "../../Sections/WhyHire/WhyHireAssistant";
import SpecificExpertise from "../../Components/SpecificExpertise";
import FindYourVirtual from "../../Sections/FindYourVirtual";
import FrequentlyAsked from "../../Sections/FrequentlyAsked";
import TestemonilesSection from "../../Sections/TestemonilesSection";
 import TryOptech from "../../Sections/TryOptech";
import Footer from "../../Components/Footer";
// import arr
import {
  Frequentlyasked as FAQData,
  Industry_Specificarr as IndustrySpecificarr,
  Leader_in_Virtual as LeaderinvirtualData,
  Level_With_MyOutDesk as LevelWithMyOutDesk,
  What_An_Administrative as WhatAnAdministrative,
  Fixed_Header_arr as FixedHeaderData,
} from "./Business_Development_arr";
import UseDocumnetTitle from "../../Hooks/UseDocumnetTitle";
import Level_Up_OutDesk from "../../Components/Level_Up_OutDesk";
import UsApart from "../../Sections/UsApart";
import React, { useMemo } from "react";
function Sales_Development() {
  UseDocumnetTitle("business development");
  // Memoize static data to avoid unnecessary recalculations

  const FixedHeaderContent = useMemo(() => FixedHeaderData, []);
  const leaderContent = useMemo(() => LeaderinvirtualData, []);
  const WhatAnAdministrativeContent = useMemo(() => WhatAnAdministrative, []);
  const Industry_SpecifiContent = useMemo(() => IndustrySpecificarr, []);
  const FrequentlyaskedContent = useMemo(() => FAQData, []);
  const LevelWithMyOutDeskContent = useMemo(() => LevelWithMyOutDesk, []);
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
        title={"What a business Development Representative Can Do For You?"}
        ArrAnswer={WhatAnAdministrativeContent}
      />
      <Level_Up_OutDesk
        Title={LevelWithMyOutDeskContent.title}
        img={images.levelOutImg}
        description={LevelWithMyOutDeskContent.description}
      />
      <UsApart />
      <SpecificExpertise
        title={Industry_SpecifiContent[0]?.title} // First element has the title
        description={Industry_SpecifiContent[1]?.description} // Second element has the description
        Links={Industry_SpecifiContent[2]?.links} // Third element has the links
        img={images.Specific_Expertise} // Passing image
      />
      <FindYourVirtual />
      <FrequentlyAsked questionsArr={FrequentlyaskedContent} />
      <TestemonilesSection />
       <TryOptech />
      <Footer />
    </>
  );
}
export default React.memo(Sales_Development);
