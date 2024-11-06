// import images
import images from "./Ecommerce_Virtual_img";
// import components
import FixedHeader from "../../Components/FixedHeader";
import ScaleBusiness from "../../Components/ScaleBusiness";
import Level_Up_OutDesk from "../../Components/Level_Up_OutDesk";
// import arrays
import {
  Fixed_Header_arr as FixedHeaderData,
  Helping_ecommerce as Helpingecommerce,
  Related_Service_arr as RelatedServicearr,
  Level_With_MyOutDesk as LevelWithMyOutDesk,
  What_An_Administrative as WhatAnAdministrative,
  Frequentlyasked as FAQData,
} from "./Ecommerce_Virtual_arr";
// import componenets
import WhyHireAssistant from "../../Sections/WhyHire/WhyHireAssistant";
import Helping_Ecommerce from "../../Components/Helping_Ecommerce";
import FindYourVirtual from "../../Sections/FindYourVirtual";
import FrequentlyAsked from "../../Sections/FrequentlyAsked";
import TestemonilesSection from "../../Sections/TestemonilesSection";
 import TryOptech from "../../Sections/TryOptech";
import Footer from "../../Components/Footer";
import Related_Service from "../../Sections/Related_Service";
import UseDocumnetTitle from "../../Hooks/UseDocumnetTitle";
import React, { useMemo } from "react";

function Ecommerce_Virtual() {
  UseDocumnetTitle("Ecommerce Virtual");
  // Memoize static data to avoid unnecessary recalculations

  const FixedHeaderContent = useMemo(() => FixedHeaderData, []);
  const LevelWithMyOutDeskContent = useMemo(() => LevelWithMyOutDesk, []);
  const WhatAnAdministrativeContent = useMemo(() => WhatAnAdministrative, []);
  const Helping_ecommerceContent = useMemo(() => Helpingecommerce, []);
  const RelatedServicearrContent = useMemo(() => RelatedServicearr, []);
  const FrequentlyaskedContent = useMemo(() => FAQData, []);
  return (
    <>
      <FixedHeader
        bgImg={images.fixedHeaderImg}
        title={FixedHeaderContent.title}
        description={FixedHeaderContent.description}
      />{" "}
      <ScaleBusiness />
      <Level_Up_OutDesk
        Title={LevelWithMyOutDeskContent.title}
        img={images.LevelOutImg}
        description={LevelWithMyOutDeskContent.description}
      />
      <WhyHireAssistant
        title={"What An e-commerce VA Can Do For You?"}
        ArrAnswer={WhatAnAdministrativeContent}
      />
      <Helping_Ecommerce
        HelpingEcommerce={Helping_ecommerceContent}
        maintitle={"Helping e-commerce Companies Nationwide"}
        description={
          "Here is how MyBudgetStaff helped companies generate more revenue in 2024."
        }
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
export default React.memo(Ecommerce_Virtual);
