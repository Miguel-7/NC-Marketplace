import ItemCard from "./ItemCard";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ItemList() {
    const [items, setItems] = useState([]);
    useEffect(() => {
      axios.get("https://nc-marketplace.herokuapp.com/api/items").then(res => {
        const requestItems = res.data.items;
        setItems(requestItems);
      });
    }, []);
  


return <ul>
{items.map(({item_id, item_name, price, img_url}) => {
  return (
    <ItemCard
      item_id={item_id}
      item_name={item_name}
      price={price}
      img_url={img_url}
    />
  )
})}
</ul>

}