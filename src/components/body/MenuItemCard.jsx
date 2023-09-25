import React from "react";

function MenuItemCard(props) {
  return (
    <div
      className="menuItemCard"
      // style={{
      //   margin: "16px 16px",
      //   cursor: "pointer",
      //   width: "25vw",
      //   height: "60vh",
      //   position: "relative",
      //   borderRadius: "10px",
      //   textAlign: "start",
      //   padding: "8px",
      // }}
      onClick={() => {
        props.onClick(props.item);
      }}
    >
      <div
        style={{
          borderRadius: "10px",
          position: "absolute",
          height: "100%",
          width: "100%",
          boxShadow: "5px 5px 8px black",
          backgroundImage: `url(${props.imageUrl})`,
          backgroundSize: "cover",
          opacity: "0.6",
        }}
      ></div>
      <h4
        style={{
          position: "absolute",
          marginLeft: "16px",
          color: "black",
          fontWeight: "bold",
          fontSize: "24px",
        }}
      >
        {props.name}
      </h4>
    </div>
  );
}

export default MenuItemCard;
