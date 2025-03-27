import HeroSection from "./Home components/HeroSection"
import WhatIsGreenville from "./Home components/WhatIsGreenVille"
import AreasWeCover from "./Home components/AreasWeCover"
import OurServices from "./Home components/OurServices"
import CardPlans from "./Home components/CardPlans"
import FAQ from "./Home components/FAQ"
import Footer from "./Home components/Footer"
import Subscribe from "./Home components/Subscribe"

export default function Home(){
    return(
        <>
        <HeroSection />
        <WhatIsGreenville />
        <AreasWeCover />
        <OurServices />
        <CardPlans />
        <Subscribe />
        <FAQ />
        <Footer />
        </>
    )
}