import './App.css' 
// import HamburgerMenu from './Components/HamburgerMenu';
import Dashboard from './Components/Dashboard'
import SignUp from "./Components/Auth/SignUp"
import SignIn from "./Components/Auth/SignIn"
import Home from './Components/Home'
import ForgotPassword from "./Components/Auth/ForgotPassword"
import Page404 from './Components/Page404';
import About from   './Components/Home components/About'
import FAQ from './Components/Home components/FAQ'
import Contact from './Components/Home components/About'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from './Components/NavBar'



function App() {


  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes> 

      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/Sign up' element={<SignUp />} />
      <Route path='/Sign In' element={<SignIn />} />
      <Route path='/Forgot Password' element={<ForgotPassword />} />
      <Route path='/Faq' element={<FAQ/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path="*" element={<Page404 />}/>
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
