import HeroSection from "./Home/HeroSection"
import WhatIsGreenville from "./Home/WhatIsGreenville"
import AreasWeCover from "./Home/AreasWeCover"
import OurServices from "./Home/OurServices"
import CardPlans from "./Home/CardPlans"
import FAQ from "./Home/FAQ"
import Footer from "./Home/Footer"
import Subscribe from "./Home/Subscribe"
import WhyTheyBelieveUs from "./Home/WhyTheyBelieveUs"


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