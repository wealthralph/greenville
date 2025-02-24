import { Link } from "react-router-dom"

export default function HeroSection(){
    return(
        
        <div className="heroContainer">
            
            <div className="heroItems">
        <h1 className="heroText ">Together we can help develope a new waste habit</h1>
       <Link to="/Sign Up"><button className="heroBtn ">Sign Up</button></Link> 
        </div>
    
        </div>
        
    
    )
}