import { useState } from "react";

export default function ProgressMeter() {
  const [currentProgress, setCurrentProgress] = useState(100);
  const [maxPayment, setMaxPayment] = useState(500);
  const [payAmount, setPayAmount] = useState(50);

  const handlePayment = () => {
    if (currentProgress < maxPayment) {
      const newProgress = Math.min(currentProgress + payAmount, maxPayment);
      setCurrentProgress(newProgress);
    } else {
      alert("You just got a reward! Keeping it green Pays 👍");
    }
  };

  return (
    <div className="tracker-content">
      <progress
        className="meter"
        id="meter"
        max={paymentMeter}
        value={progress}
      />
      <div className="sub-text">
        <div className="first">
          Raised:$<span className="progress">{progress}</span>
        </div>
        <div className="second">
          Goal: <span className="goal">500</span>
        </div>
      </div>
      <button className="donate-button" onClick={handlePayment}>
        Donate
      </button>
    </div>
  );
}
