import "../styles/index.scss";
import Recipes from "./Recipes";

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
      </main>

      <Recipes /> 
    </>
  )
}

export default App