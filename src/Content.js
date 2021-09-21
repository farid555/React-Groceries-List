import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "apple",
    },
    {
      id: 2,
      checked: true,
      item: "banana",
    },
    {
      id: 3,
      checked: true,
      item: "orange",
    },
  ]);

  const handleCheck = (id) => {
    //console.log(`key: ${id}`);
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              onChange={() => {
                handleCheck(item.id);
              }}
              checked={item.checked}
            />
            <label onDoubleClick={() => handleCheck(item.id)}>
              {item.item}
            </label>
            <FaTrashAlt role="button" tabIndex="0" />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
