import { useState } from "react";

export default function History() {
  const [history, setHistory] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pickupDetails, setPickupDetails] = useState({
    location: "",
    wasteType: "",
  });

  // Handle opening/closing modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPickupDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Handle form submission (Adding to history)
  const handleAddPickup = (e) => {
    e.preventDefault();

    if (!pickupDetails.location || !pickupDetails.wasteType) {
      alert("Please fill in all fields.");
      return;
    }

    const newEntry = {
      id: history.length + 1,
      date: new Date().toLocaleString(),
      location: pickupDetails.location,
      wasteType: pickupDetails.wasteType,
    };

    setHistory([newEntry, ...history]);
    setPickupDetails({ address: "", wasteType: "" }); // Reset form
    closeModal(); // Close modal after submission
  };

  return (
    <div className="history-container">
      <h2 className="history_header">History</h2>
         {/* Pickup History List */}
         <ul className="history-list">
        {history.length === 0 ? (
          <p>No pickup requests yet.</p>
        ) : (
          history.map((item) => (
            <li key={item.id} className="history-item">
              <strong>Location:</strong> {item.location} <br />
              <strong>Waste Type:</strong> {item.wasteType} <br />
              <span>{item.date}</span>
            </li>
          ))
        )}
      </ul>
      <button className="add-pickup" onClick={openModal}>
        + Request Pickup
      </button>

   

      {/* Modal */}

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Request Waste Pickup</h2>
            <form onSubmit={handleAddPickup} className="request_form">
              <label>
                Location:
                <input
                  type="text"
                  name="location"
                  value={pickupDetails.location}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label className="label">
                Phone Number
                <input type="tel" name="Phone-number" placeholder="" required />
              </label>
              <label>
                Waste Type:
                <input
                  type="text"
                  name="wasteType"
                  value={pickupDetails.wasteType}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <button type="submit">Submit Request</button>
              <button type="button" onClick={closeModal} className="cancel">
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
