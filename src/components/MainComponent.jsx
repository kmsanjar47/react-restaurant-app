import React from "react";
import Header from "./header/Header.jsx";
import Body from "./body/Body.jsx";
import Footer from "./footer/Footer.jsx";
import { Provider } from "react-redux";
import myStore from "../redux/store.js";

function MainComponent() {
  return (
    <div>
      <Provider store={myStore}>
        <Header />
        <Body />
        <Footer />
      </Provider>
    </div>
  );
}

export default MainComponent;
