import React, { useState, useEffect } from "react";
import axios from "axios";

function AllItemsPage() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get("https://nc-marketplace.herokuapp.com/api/items").then(res => {
      const requestItems = res.data.items;
      setItems(requestItems);
    });
  }, []);

  return (
    <div>
      <h1>AllItemsPage</h1>
      <ul>
        {items.map(item => (
          <li>{item.item_name}</li>
        ))}
      </ul>
    </div>
  );
}
export default AllItemsPage;
