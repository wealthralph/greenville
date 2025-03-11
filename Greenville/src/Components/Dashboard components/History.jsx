import { useState } from "react";

export default function History() {
  const [history, setHistory] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pickupDetails, setPickupDetails] = useState({
    name: "",
    phone: "",
    location: "",
    wasteType: "",
    date: "",
    instructions: "",
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

    if (!pickupDetails.name || !pickupDetails.phone || !pickupDetails.location || !pickupDetails.wasteType || !pickupDetails.date) {
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
    setPickupDetails({
      name: "",
      phone: "",
      location: "",
      wasteType: "",
      date: "",
      instructions: "",
    });
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
                Full Name:
                <input
                  type="text"
                  name="name"
                  value={pickupDetails.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Phone Number:
                <input
                  type="tel"
                  name="phone"
                  value={pickupDetails.phone}
                  onChange={handleInputChange}
                  required
                />
              </label>
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
                <select
                  name="wasteType"
                  value={pickupDetails.wasteType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Type</option>
                  <option value="organic">Organic</option>
                  <option value="plastic">Plastic</option>
                  <option value="electronic">Electronic</option>
                  <option value="hazardous">Hazardous</option>
                </select>
              </label>
              <label>
                Preferred Date & Time:
                <input
                  type="datetime-local"
                  name="date"
                  value={pickupDetails.date}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label>
                Special Instructions (Optional):
                <textarea
                  name="instructions"
                  value={pickupDetails.instructions}
                  onChange={handleInputChange}
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
