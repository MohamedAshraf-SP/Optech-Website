import React, { useMemo } from "react";
// import images
import images from "./Humman_Resourse_img";
// import components
import UseDocumnetTitle from "../../Hooks/UseDocumnetTitle";
import ScaleBusiness from "../../Components/ScaleBusiness";
import Level_Up_OutDesk from "../../Components/Level_Up_OutDesk";
import FixedHeader from "../../Components/FixedHeader";
import WhyHireAssistant from "../../Sections/WhyHire/WhyHireAssistant";
import Related_Service from "../../Sections/Related_Service";
import FindYourVirtual from "../../Sections/FindYourVirtual";
import FrequentlyAsked from "../../Sections/FrequentlyAsked";
import TestemonilesSection from "../../Sections/TestemonilesSection";
 import TryOptech from "../../Sections/TryOptech";
import Footer from "../../Components/Footer";
// import array
import {
  Frequentlyasked as FAQData,
  Level_With_MyOutDesk as LevelWithMyOutDesk,
  Related_Service_arr as RelatedServicearr,
  What_An_Administrative as WhatAnAdministrative,
  Fixed_Header_arr as FixedHeaderData,
} from "./Humman_Resourse_arr";

function Humman_Resourse() {
  UseDocumnetTitle("Human Resources");
  // Memoize static data to avoid unnecessary recalculations

  const FixedHeaderContent = useMemo(() => FixedHeaderData, []);
  const LevelWithMyOutDeskContent = useMemo(() => LevelWithMyOutDesk, []);
  const WhatAnAdministrativeContent = useMemo(() => WhatAnAdministrative, []);
  const RelatedServicearrContent = useMemo(() => RelatedServicearr, []);
  const FrequentlyaskedContent = useMemo(() => FAQData, []);
  return (
    <>
      <FixedHeader
        bgImg={images.fixedHeaderImg}
        title={FixedHeaderContent.title}
        description={FixedHeaderContent.description}
      />

      <ScaleBusiness />
      <Level_Up_OutDesk
        Title={LevelWithMyOutDeskContent.title}
        img={images.LevelOutImg}
        description={LevelWithMyOutDeskContent.description}
      />
      <WhyHireAssistant
        title={"What A Property Management VA Can Do For You"}
        ArrAnswer={WhatAnAdministrativeContent}
      />
      <Related_Service Related_Service_arr={RelatedServicearrContent} />
      <FindYourVirtual />
      <FrequentlyAsked questionsArr={FrequentlyaskedContent} />
      <TestemonilesSection />
       <TryOptech />
      <Footer />
    </>
  );
}
export default React.memo(Humman_Resourse);
