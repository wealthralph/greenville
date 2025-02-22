import { useState } from "react"

export default function ProgressMeter(){

    const [currentprogress, setCurrentProgress] = useState(100)
    const [maxPayment, setMaxPayment] = useState(500)
    const [payAmount, setPayAmount] = useState(50)

   const  handlePayment = ( ) {

    if (currentProgress < maxPayment) {
        currentProgress += payAmount;
  
        if (currentProgress > maxPayment) {
          currentProgress = maxPayment;
        }
  
        paymentMeter.forEach((meter, i) => {
          if (index === i) meter.value = currentProgress;
        });
        progress.forEach((increment, i) => {
          if (index === i) increment.textContent = currentProgress;
        });
  
      } else {
        alert("You just got a reward! Keeping it green Pays 👍 ");
      }
   }

   

   
        
     
    
    return(

        <div className="tracker-content">
  <progress className="meter" id="meter" max={paymentMeter} value={progress} />
  <div className="sub-text">
    <div className="first">
      Raised:$<span className="progress">{progress}</span>
    </div>
    <div className="second">
      Goal: <span className="goal">500</span>
    </div>
  </div>
  <button className="donate-button" onClick={handlePayment}>Donate</button>
</div>

    )
}