import { Mock } from "../../assets";

export default function Subscribe() {
  return (
    <>
      <div className="subscribeCon">
        <div className="anticipateTop">
        <div className="phoneMock">
        <img src={Mock} alt="phone mock" className="myMock"/>
        </div>
        <div className="anticipationText">
        <h1 className="subSecHeader">Coming soon <br></br>Greenville Application</h1>
        <p className="subSecParagraph">
          Imagine being able to buy, sell and co-own real estate with your
          friends and family from your mobile phone… soon you’ll be able to.
        </p>
        </div>
        </div>
       
        
      
        <div className="anticipateForm">
            <form>
        <input type="email" placeholder="Enter Email" className="subInput" />
        <button className="subBtn">Join waiting list</button>
        </form>
        </div>
       
      </div>
    </>
  );
}
 