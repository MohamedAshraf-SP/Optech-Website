import React, { useMemo } from "react";
// import images
import images from "./Virtual_Insurance_img";
// import components
import FixedHeader from "../../Components/FixedHeader";
import ScaleBusiness from "../../Components/ScaleBusiness";
 import FrequentlyAsked from "../../Sections/FrequentlyAsked";
import TestemonilesSection from "../../Sections/TestemonilesSection";
 import TryOptech from "../../Sections/TryOptech";
import Footer from "../../Components/Footer";
import UseDocumnetTitle from "../../Hooks/UseDocumnetTitle";
import FindYourVirtual from "../../Sections/FindYourVirtual";
// import used arr
import {
  Frequentlyasked as FAQData,
  Leader_in_Virtual as LeaderData,
  Level_With_MyOutDesk as LevelWithMyOutDesk,
  Fixed_Header_arr as FixedHeaderData,
} from "./Virtual_Insurance_arr";
import Level_Up_OutDesk from "../../Components/Level_Up_OutDesk";
function Virtual_Insurance() {
  // set title to page
  UseDocumnetTitle("Virtual Insurance");
  // ------------Memoize static data to avoid unnecessary recalculations
  const fixedHeaderContent = useMemo(() => FixedHeaderData, []);
  const leaderContent = useMemo(() => LeaderData, []);
  const frequentlyAskedQuestions = useMemo(() => FAQData, []);
  const LevelWithMyOutDeskContent = useMemo(() => LevelWithMyOutDesk, []);
  return (
    <div>
      <FixedHeader
        bgImg={images.fixedHeaderImg}
        title={fixedHeaderContent.title}
        description={fixedHeaderContent.description}
      />
      <ScaleBusiness />
      <Level_Up_OutDesk
        Title={LevelWithMyOutDeskContent.title}
        img={images.LevelOutImg}
        description={LevelWithMyOutDeskContent.description}
      />
      {/* {leaderContent.map((Leader_Content) => (
        <LeaderinVirtual
          image2={Leader_Content.image}
          title={Leader_Content.title}
          pargraph={Leader_Content.pargraph}
        />
      ))} */}

      <FindYourVirtual />
      <FrequentlyAsked questionsArr={frequentlyAskedQuestions} />
      <TestemonilesSection />
       <TryOptech />
      <Footer />
    </div>
  );
}
export default React.memo(Virtual_Insurance);
