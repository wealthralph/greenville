import HeroSection from "./Home/HeroSection"
import AreasWeCover from "./Home/AreasWeCover"
import OurServices from "./Home/OurServices"
import CardPlans from "./Home/CardPlans"
import FAQ from "./Home/FAQ"
import Footer from "./Home/Footer"
import Subscribe from "./Home/Subscribe"
import WhyTheyBelieveUs from "./Home/WhyTheyBelieveUs"
import WhatIsGreenVille from "./Home/WhatIsGreenVille"

export default function Home(){
    return (
      <>
        <HeroSection />
        <WhyTheyBelieveUs />
        <WhatIsGreenVille />
        <OurServices />
        <AreasWeCover />
        <CardPlans />
        <Subscribe />
        <FAQ />
        <Footer />
      </>
    );
}