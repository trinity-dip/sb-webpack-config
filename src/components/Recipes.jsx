//@refresh reset
import { useState } from 'react';

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const elvenGauntletsRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonstone: 4,
};

console.log(elvenShieldRecipe);
console.log(elvenGauntletsRecipe);

//In diesem Fall nicht nötig, denn es wird nur JSX in dieser Datei benutzt...(ohne React)
//import React from "react";

const Recipes = () => {
  const [recipe, setRecipe] = useState({})
  return (
    <div>
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipe(elvenShieldRecipe)}>
        Elven Shield Recipe
      </button>
      <button onClick={() => setRecipe(elvenGauntletsRecipe)}>
        Elven Gauntlet Recipe
      </button>

      <ul>
        {Object.keys(recipe).map((material) => (
        <li key={material}>
          {material}: {recipe[material]}
        </li>
        ))}
      </ul>    
    </div>
  );
};

export default Recipes;