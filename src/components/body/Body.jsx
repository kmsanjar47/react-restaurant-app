import React, { useState } from "react";
import MenuItemCard from "./MenuItemCard";
import DISHES from "../dishes";
import MenuItemInfoCard from "./MenuItemInfoCard";

const Body = () => {
  let [menuData] = useState(DISHES);
  let [selectedItem, setSelectedItem] = useState(null);

  let onItemSelect = (item) => {
    setSelectedItem(item);
  };
  const menuItems = menuData.map((menu) => {
    return (
      <MenuItemCard
        key={menu.id}
        id={menu.id}
        imageUrl={menu.image}
        description={menu.description}
        label={menu.label}
        name={menu.name}
        item={menu}
        onClick={onItemSelect}
      />
    );
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "0px 50px",
      }}
    >
      <div>{menuItems}</div>
      {selectedItem ? <MenuItemInfoCard selectedItem={selectedItem} /> : ""}
    </div>
  );
};

export default Body;
