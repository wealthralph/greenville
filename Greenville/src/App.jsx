import './App.css' 
import Subscribe from './Components/Subscribe'
import RequestPickup from './Components/RequestPickup'
import SignUp from './Components/SignUp'
import WhatIsGreenville from './Components/WhatIsGreenVille'
import SignIn from './Components/SignIn'
import ForgotPassword from './Components/ForgotPassword'
import ResetPassword from './Components/ResetPassword'
import HeroSection from './Components/HeroSection'
import AreasWeCover from './Components/AreasWeCover'
import OurServices from './Components/OurServices'
import FAQ from './Components/FAQ'
import Footer from './Components/Footer'
import CardPlans from './Components/CardPlans'
function App() {


  return (
    <>
     <HeroSection />
     <WhatIsGreenville />
     <AreasWeCover />
     <OurServices />
     <CardPlans />
     <Subscribe />
     <FAQ />
     <Footer />
    {/* <SignUp />
    <SignIn />
    <RequestPickup />
    <ForgotPassword />
    <ResetPassword /> */}
    </>
  )
}

export default App
