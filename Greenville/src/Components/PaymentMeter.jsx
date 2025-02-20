import { useState } from "react";

const PaymentMeter = () => {
  const maxPayment = 1000;
  const [progress, setProgress] = useState(100);

  const handlePayment = () => {
    setProgress((prevProgress) => {
      let newProgress = prevProgress + 100;
      if (newProgress >= maxPayment) {
        alert("You just got a reward! Keeping it green Pays 👍 ");
        alert("Keeping it green pays");
        return 0; // Restart the meter when maxPayment is reached
      }
      return newProgress;
    });
  };

  return (
    <div className="tracker_content">
      <progress className="meter" id="meter" max={maxPayment} value={progress} />
      <div className="sub-text">
      <p>
      <span className="progress">{progress}</span>/<span className="goal">1000 </span>
       Tokens to next reward
      </p>
      
      </div>
      {/* <button className="donate-button" onClick={handlePayment}>Donate</button> */}
    </div>
  );
};

export default PaymentMeter;
