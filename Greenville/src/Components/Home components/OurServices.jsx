import {img5} from '../assets'
import {img6} from '../assets'
import {img7} from '../assets'
export default function OurService(){
    return(
        <>
        <h1 className="serviceHeader">Our Services</h1>
        <div className='serviceContainer'>
            <div className='service'> 
                <img src={img5} alt="industry" className="icons"/>
                <h3 className='servText'>Industrial Waste Management</h3>
            </div>
            <div className='service'>
                <img src={img6} alt="commercial building" className="icons"/>
                <h3 className='servText'>Commercial Waste Management</h3>
            </div>
            <div className='service'>
                <img src={img7} alt="Residential building" className="icons"/>
                <h3 className='servText'>Residential Waste Management</h3>
            </div>
        </div>
        </>
    )
}