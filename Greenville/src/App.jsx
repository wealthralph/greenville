import './App.css' 
//import HamburgerMenu from './Components/HamburgerMenu';
import Dashboard from './Components/Dashboard'
import SignUp from "./Components/Auth/SignUp"
import SignIn from "./Components/Auth/SignIn"
import Home from './Components/Home'
import ForgotPassword from "./Components/Auth/ForgotPassword"
import Page404 from './Components/Page404';

import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from './Components/NavBar'



function App() {


  return (
    <>
    <BrowserRouter>
<<<<<<< HEAD
    <NavBar />
    <Routes> 
=======
     <NavBar />
    {/*<Routes> 
>>>>>>> b44b866d5b272e23f7c722f778f63cb37ce4b075

      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/Sign up' element={<SignUp />} />
      <Route path='/Sign In' element={<SignIn />} />
      <Route path='/Forgot Password' element={<ForgotPassword />} />
      <Route path="*" element={<Page404 />}/>
<<<<<<< HEAD
    </Routes>
=======
    </Routes>*/}
>>>>>>> b44b866d5b272e23f7c722f778f63cb37ce4b075
    </BrowserRouter>
   
    </>
  )
}

export default App
