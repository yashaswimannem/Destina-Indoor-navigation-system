import React, { useState } from "react";

const SearchBar = ({ onFindPath }) => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (source && destination) {
      onFindPath(source, destination);
    } else {
      alert("Please enter both source and destination");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      
    </form>
  );
};

export default SearchBar;
