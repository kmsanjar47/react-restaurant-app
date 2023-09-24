import React from "react";

let MenuItemInfoCard = (props) => {
  return (
    <div
      style={{
        margin: "16px 16px",
        cursor: "pointer",
        width: "100vw",
        height: "60vh",
        position: "sticky",
        top: "10px",
        borderRadius: "10px",
        textAlign: "start",
        padding: "8px",
        backgroundColor: "white",
        boxShadow: "5px 5px 16px grey",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "16px",
      }}
    >
      <div>
        <img
          style={{
            position: "absolute",
            objectFit: "cover",
            height: "40%",
            width: "100%",
          }}
          src={props.selectedItem.image}
          alt="image"
        />
      </div>

      <div>
        <h3>{props.selectedItem.name}</h3>
        <p>{props.selectedItem.description}</p>
        <h2>{props.selectedItem.price + "Tk"}</h2>
      </div>
    </div>
  );
};

export default MenuItemInfoCard;
