import { useState } from "react";

const usePaymentProgress = (maxPayment) => {
  const [progress, setProgress] = useState([100]);
  const [paymentMeter, setPaymentMeter] = useState([500]);

  const handlePayment = (index, payAmount) => {
    setPaymentMeter((prevMeters) => {
      return prevMeters.map((meter, i) => {
        if (i === index) {
          let newProgress = meter.value + payAmount;
          if (newProgress > maxPayment) newProgress = maxPayment;
          return { ...meter, value: newProgress };
        }
        return meter;
      });
    });

    setProgress((prevProgress) => {
      return prevProgress.map((increment, i) => {
        if (i === index) {
          let newProgress = increment.textContent + payAmount;
          if (newProgress > maxPayment) newProgress = maxPayment;
          return { ...increment, textContent: newProgress };
        }
        return increment;
      });
    });

    const currentMeter = paymentMeter[index]?.value || 0;
    if (currentMeter >= maxPayment) {
      alert("You just got a reward! Keeping it green Pays 👍 ");
    }
  };

  return { handlePayment, progress, paymentMeter, setProgress, setPaymentMeter }(
    
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
  );
};

export default usePaymentProgress;