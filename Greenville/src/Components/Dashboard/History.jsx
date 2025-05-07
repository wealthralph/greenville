import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function History() {
  const [history, setHistory] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pickupDetails, setPickupDetails] = useState({
    name: "",
    phone: "",
    location: "",
    wasteType: [],
    date: "",
    instructions: "",
  });
  
  const initialVisibleItems = 5;
  const [visibleItems, setVisibleItems] = useState(initialVisibleItems);
  const [showSeeMore, setShowSeeMore] = useState(false);
  const [showSeeLess, setShowSeeLess] = useState(false);

  // Update navigation links whenever history or visible items change
  useEffect(() => {
    setShowSeeMore(history.length > visibleItems);
    setShowSeeLess(visibleItems > initialVisibleItems);
  }, [history, visibleItems]);

  const loadMore = () => {
    const nextVisibleItems = visibleItems + 5;
    setVisibleItems(nextVisibleItems);
    
    // Hide "see more" if we've shown all items
    if (nextVisibleItems >= history.length) {
      setShowSeeMore(false);
    }
    // Show "see less" when we're showing more than initial count
    setShowSeeLess(true);
  };
  
  const loadLess = () => {
    setVisibleItems(initialVisibleItems);
    setShowSeeLess(false);
    setShowSeeMore(history.length > initialVisibleItems);
  };
  
  // Handle opening/closing modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "wasteType") {
      setPickupDetails((prevDetails) => {
        let newWasteTypes = [...prevDetails[name]];

        if (checked) {
          // Add to the list if checked
          newWasteTypes.push(value);
        } else {
          // Remove from the list if unchecked
          newWasteTypes = newWasteTypes.filter((item) => item !== value);
        }

        return {
          ...prevDetails,
          [name]: newWasteTypes,
        };
      });
    } else {
      // For other fields (like text or phone)
      setPickupDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value,
      }));
    }
  };

  // Handle form submission (Adding to history)
  const handleAddPickup = (e) => {
    e.preventDefault();

    if (
      !pickupDetails.name ||
      !pickupDetails.phone ||
      !pickupDetails.location ||
      pickupDetails.wasteType.length === 0 ||
      !pickupDetails.date
    ) {
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
      wasteType: [],
      date: "",
      instructions: "",
    });
    closeModal(); // Close modal after submission
  };

  return (
    <div className="history-container">
      <div className="history-div">
        <h2 className="history_header">Waste Pickup History</h2>
        <div className="history-navigation">
          {showSeeMore && (
            <span className="see-more-link" onClick={loadMore}>
              see more
            </span>
          )}
          {showSeeLess && (
            <span className="see-less-link" onClick={loadLess}>
              see less
            </span>
          )}
        </div>
        <button className="add-pickup" onClick={openModal}>
          Request Pickup
        </button>
      </div>
      
      {/* Pickup History List */}
      <ul className="history-list">
        {history.length === 0 ? (
          <p>No pickup requests yet.</p>
        ) : (
          history.slice(0, visibleItems).map((item) => (
            <li key={item.id} className="history-item">
              <br />
              <span className="item-location">{item.location} </span>
              <svg
                className="lil-truck"
                width="21"
                height="14"
                viewBox="0 0 21 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 13H2V9M1 1H12V13M8 13H14M18 13H20V7M20 7H12M20 7L17 2H12M2 5H6"
                  stroke="#1B5B33"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="item-date">{item.date}</span>
              <hr></hr>
            </li>
          ))
        )}
      </ul>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="modal-content">
            <h2>Request Waste Pickup</h2>
            <form
              onSubmit={handleAddPickup}
              className="request_form"
              action="https://your-backend-endpoint.com/pickup-request"
              method="POST"
            >
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
              <label>Waste Type:</label>
              <div className="checkbox-con">
                <label>
                  <input
                    type="checkbox"
                    name="wasteType"
                    value="organic"
                    checked={pickupDetails.wasteType.includes("organic")}
                    onChange={handleInputChange}
                  />
                  Organic
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="wasteType"
                    value="plastic"
                    checked={pickupDetails.wasteType.includes("plastic")}
                    onChange={handleInputChange}
                  />
                  Plastic
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="wasteType"
                    value="electronic"
                    checked={pickupDetails.wasteType.includes("electronic")}
                    onChange={handleInputChange}
                  />
                  Electronic
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="wasteType"
                    value="hazardous"
                    checked={pickupDetails.wasteType.includes("hazardous")}
                    onChange={handleInputChange}
                  />
                  Hazardous
                </label>
              </div>

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
        </motion.div>
      )}
    </div>
  );
}