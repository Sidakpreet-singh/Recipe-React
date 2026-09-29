import React from "react";
import RecipeCard from "./RecipeCard";
import { useContext } from "react";
import { MyStore } from "../Context/MyContext";
import Navbar from "./Navbar";

const RecipesPage = () => {
  const {recipes,cartitems}= useContext(MyStore);
  let inRecipePage = true;
  
  

  return (<>
      {/* Header */} <Navbar inRecipePage = {inRecipePage}/>
    <main className="min-h-screen bg-orange-50 px-6 py-8 md:px-10 lg:px-14">

      <div className="mx-auto mb-8 max-w-[1500px]">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-orange-500">
          Recipe Collection
        </p>

        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Explore All Recipes
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Discover delicious recipes from different chefs and cuisines.
            </p>
          </div>

          <span className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-orange-500 shadow-sm ring-1 ring-orange-100 md:block">
            {recipes.length} Recipes
          </span>
        </div>
      </div>

      {/* Recipes */}
      <div className="mx-auto max-w-[1500px]">
        <div className="columns-1 gap-5 sm:columns-2 xl:columns-3 2xl:columns-4">
          {recipes.map((recipe, idx) => {

            let inCart = cartitems.find((elem)=> elem.id === recipe.id)
            return (
            <div
              key={idx}
              className="mb-5 break-inside-avoid"
            >
              <RecipeCard recipe={recipe} inCart={inCart}/>
            </div>
          )
          })}
        </div>
      </div>


    </main>
    </>
  );
};

export default RecipesPage;