import React from "react";
import mallData from "../data/stores.json";  // ✅ Load the JSON file

const StoreList = () => {
  return (
    <div>
      <h2>Store List</h2>
      <ul>
        {mallData.stores.map((store) => (
          <li key={store.id}>{store.id}</li>
        ))}
      </ul>
    </div>
  );
};

export default StoreList;  // ✅ Ensure the correct export
