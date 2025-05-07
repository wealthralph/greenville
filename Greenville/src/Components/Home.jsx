import HeroSection from "./Home components/HeroSection"
import WhatIsGreenville from "./Home components/WhatIsGreenville"
import AreasWeCover from "./Home components/AreasWeCover"
import OurServices from "./Home components/OurServices"
import CardPlans from "./Home components/CardPlans"
import FAQ from "./Home components/FAQ"
import Footer from "./Home components/Footer"
import Subscribe from "./Home components/Subscribe"
import WhyTheyBelieveUs from "./Home components/WhyTheyBelieveUs"


export default function Home(){
    return (
      <>
        <HeroSection />
        <WhyTheyBelieveUs />
        <WhatIsGreenville />
        <OurServices />
        <AreasWeCover />
        <CardPlans />
        <Subscribe />
        <FAQ />
        <Footer />
      </>
    );
}