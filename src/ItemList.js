import React from "react";
import LineItem from "./LineItem";

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      <ul>
        {items.map((item) => (
          <LineItem
            item={item}
            key={item.id}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </main>
  );
};

export default ItemList;
