import "../styles/index.scss";
import Recipes from "./Recipes";
import anton from "../images/anton_2.png";
import haus from "../images/Icon_Haus.svg";

//In diesem Fall nicht nötig, denn es wird nur JSX in dieser Datei benutzt...(ohne React)
//import React from "react";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh Hai, React!</h1>
        </section>
        <img src={anton} alt="Anton in love" width="250" />
        <img src={haus} alt="Anton in love" width="250" />
        <Recipes />
      </main>
    </>
  );
};

export default App;