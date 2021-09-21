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
    console.log(`key: ${id}`);
  };

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              onClick={() => {
                handleCheck(item.id);
              }}
              checked={item.checked}
            />
            <label>{item.item}</label>
            <FaTrashAlt role="button" tabIndex="0" />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
