import React, { lazy, Suspense, useMemo } from "react";
import { LeaderinVirtualimages } from "../assets/images";
import { Why_Hire_Home_Data as WhyHireHomeData } from "../assets/UsedArr";
import {
  Frequentlyasked as FAQData,
  LeaderinVirtual_Arr as LeaderVirtual,
} from "../assets/UsedArr";

import Header from "../Components/Header";
// import components
const ScaleBusiness = lazy(() => import("../Components/ScaleBusiness"));
 
const LeaderinVirtual = lazy(() => import("../Components/LeaderinVirtual"));
const Services = lazy(() => import("../Sections/Services"));
const Modelsaves = lazy(() => import("../Sections/Modelsaves"));
const UsApart = lazy(() => import("../Sections/UsApart"));
const QualifiedAssistants = lazy(() =>
  import("../Sections/QualifiedAssistants/QualifiedAssistants")
);
const WhyHireAssistant = lazy(() =>
  import("../Sections/WhyHire/WhyHireAssistant")
);
const FindYourVirtual = lazy(() => import("../Sections/FindYourVirtual"));
const TestemonilesSection = lazy(() =>
  import("../Sections/TestemonilesSection")
);
const TryOptech = lazy(() => import("../Sections/TryOptech"));
const FrequentlyAsked = lazy(() => import("../Sections/FrequentlyAsked"));
export default function Home() {
  // import lazy arr
  const WhyHireHomeContent = useMemo(() => WhyHireHomeData, []);
  const FrequentlyaskedContent = useMemo(() => FAQData, []);
  const Leader_Virtual = useMemo(() => LeaderVirtual, []);

  return (
    <>
      <Header />
      <ScaleBusiness />
      <LeaderinVirtual
        image2={LeaderinVirtualimages.LeaderinVirtualtwo}
        title={Leader_Virtual[0].title}
        pargraph={Leader_Virtual[0].description}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <Services />
        <Modelsaves />
        <UsApart />
        <WhyHireAssistant
          title={" Why Hire a Virtual Assistant?"}
          ArrAnswer={WhyHireHomeContent}
        />
        <QualifiedAssistants />
        <FindYourVirtual />
        <TestemonilesSection />
        <FrequentlyAsked questionsArr={FrequentlyaskedContent} />
   
        <TryOptech />
      </Suspense>
    </>
  );
}
