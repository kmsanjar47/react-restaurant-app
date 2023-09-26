import React from "react";

let MenuItemInfoCard = (props) => {
  return (
    <div
      style={{
        // margin: "16px 16px",
        // width: "100%",
        // height: "60vh",
        position: "relative",
        // top: "10px",
        // borderRadius: "10px",
        textAlign: "start",
        // padding: "8px",
        backgroundColor: "white",
        // boxShadow: "5px 5px 16px grey",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <div>
        <img
          style={{
            objectFit: "cover",
            height: "30vh",
            width: "100%",
          }}
          src={props.selectedItem.image}
          alt="imag"
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
