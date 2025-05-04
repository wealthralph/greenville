/*export default function Search(){
    return(
        <div className="searchbar">

        </div>
    )
}*/

import React, { useState } from "react";
import { FiSearch } from "react-icons/fi"; // Import search icon


export default function Search({ data = [], searchFields = [] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term.length > 0) {
      const filtered = data.filter((item) =>
        searchFields.some((field) =>
          String(item[field]).toLowerCase().includes(term)
        )
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };
  return (
    <div className="searchbar">
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-input-container">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </form>
    </div>
  );
}