import React from "react";

function MenuItemCard(props) {
  return (
    <div
      className="menuItemCard"
      style={{
        margin: "1.4450867052023122vh 1.4450867052023122vw",
        cursor: "pointer",
        width: "20vw",
        height: "50vh",
        position: "relative",
        borderRadius: "10px",
        textAlign: "start",
      }}
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
          marginLeft: "1.1782032400589102vw",
          marginTop: "2.3121387283236996vh",
          color: "black",
          fontWeight: "bold",
          fontSize: "1.7673048600883652vw",
        }}
      >
        {props.name}
      </h4>
    </div>
  );
}

export default MenuItemCard;
