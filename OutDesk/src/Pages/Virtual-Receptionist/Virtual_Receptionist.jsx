import React, { useMemo } from 'react'
import images from "./Virtual_Receptionistimgs";
import {
  Fixed_Header_arr as FixedHeaderData,
  Leader_in_Virtual as LeaderinvirtualData,
  What_An_Administrative as WhatAnAdministrative,
  Industry_Specificarr as IndustrySpecificarr,
  Keep_More_Customer_arr as Keep_MoreCustomerarr,
  Frequentlyasked as FAQData,
} from "./Virtual_Receptionistarr";
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
 import Keep_More_Customer from "../../Components/Keep_More_Customer";
import Dont_lose_customers from "../../Components/Dont_lose_customers";
import Virtual_Receptionist_Cost from "../../Components/Virtual_Receptionist_Cost";

 function Virtual_Receptionist() {
   UseDocumnetTitle("Virtual_Receptionist");
   // Memoize static data to avoid unnecessary recalculations

   const FixedHeaderContent = useMemo(() => FixedHeaderData, []);
   const leaderContent = useMemo(() => LeaderinvirtualData, []);
   const WhatAnAdministrativeContent = useMemo(() => WhatAnAdministrative, []);
   const Industry_SpecifiContent = useMemo(() => IndustrySpecificarr, []);
   const FrequentlyaskedContent = useMemo(() => FAQData, []);
   const Keep_MoreCustomerContent = useMemo(() => Keep_MoreCustomerarr, []);
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
         title={" What a Virtual Receptionist Can Do For You"}
         ArrAnswer={WhatAnAdministrativeContent}
       />
       <Keep_More_Customer keep_cutomer_arr={Keep_MoreCustomerContent} />
       <Dont_lose_customers />
       <Virtual_Receptionist_Cost />
       <SpecificExpertise
         title={Industry_SpecifiContent[0]?.title} // First element has the title
         description={Industry_SpecifiContent[1]?.description} // Second element has the description
         Links={Industry_SpecifiContent[2]?.links} // Third element has the links
         img={images.Specific_Expertise} // Passing image
       />

       <FindYourVirtual />
       <UsApart />
       <FrequentlyAsked questionsArr={FrequentlyaskedContent} />
       <TestemonilesSection />
        <TryOptech />
       <Footer />
     </div>
   );
 }
export default React.memo(Virtual_Receptionist);