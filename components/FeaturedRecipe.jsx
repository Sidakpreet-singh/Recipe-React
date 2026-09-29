import React from "react";

const FeaturedRecipe = ({recipe}) => {
  return (
    <div className="relative h-[500px] overflow-hidden rounded-2xl bg-white shadow-sm">
      
      <img
        src={recipe.RecipeImage}
        alt="Featured Recipe"
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 p-6 text-white">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-orange-400">
          ⭐ Featured Recipe
        </p>

        <h2 className="text-2xl font-bold">
          {recipe.RecipeName}
        </h2>

        <p className="mt-2 text-sm leading-5 text-gray-200">
          {recipe.Description}
        </p>

        <div className="mt-4 flex items-center gap-4 text-sm">
          <span>⏱ {recipe.PrepTime} min</span>
          <span>₹{recipe.Price}</span>
        </div>

        {/* <button className="mt-5 rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold transition hover:bg-orange-600">
          Add to Cart →
        </button> */}
      </div>

    </div>
  );
};

export default FeaturedRecipe;