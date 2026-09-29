import React from "react";
import { useContext } from "react";
import { MyStore } from "../Context/MyContext";

const RecipeCard = ({ recipe ,inCart}) => {

    const {setCartitems,cartitems,incrementQuantity,decrementQuantity} = useContext(MyStore);

   
   
    
  return (
    <div className="w-full max-w-[320px] overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

      {/* Image */}
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={recipe.RecipeImage}
          alt={recipe.RecipeName}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />

        {/* Price */}
        <div className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-orange-500 shadow-sm">
          ₹{recipe.Price}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">

        <p className="mb-1 text-[11px] font-medium uppercase tracking-wide text-orange-500">
          By {recipe.ChefName}
        </p>

        <h2 className="line-clamp-1 text-lg font-bold text-gray-900">
          {recipe.RecipeName}
        </h2>

        <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-gray-500">
          {recipe.Description}
        </p>

        {/* Bottom */}
        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">

          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-50 text-xs">
              ⏱️
            </span>

            <div>
              <p className="text-[10px] text-gray-400">
                Prep Time
              </p>

              <p className="text-xs font-semibold text-gray-700">
                {recipe.PrepTime} min
              </p>
            </div>
          </div>

{inCart ? (
  <div className="flex items-center overflow-hidden rounded-lg bg-orange-50 shadow-sm ring-1 ring-orange-100">
    <button
      onClick={()=>{
        decrementQuantity(recipe.id);
       
        
    }}
      className="flex h-8 w-8 items-center justify-center text-lg font-semibold text-orange-500 transition-all duration-200 hover:bg-orange-500 hover:text-white"
    >
      −
    </button>

    <span className="flex h-8 min-w-8 items-center justify-center border-x border-orange-100 bg-white px-2 text-sm font-semibold text-gray-700">
      {inCart.quantity}
    </span>

    <button
    onClick={()=>{
        incrementQuantity(recipe.id);
       
        
    }}
      className="flex h-8 w-8 items-center justify-center text-lg font-semibold text-orange-500 transition-all duration-200 hover:bg-orange-500 hover:text-white"
    >
      +
    </button>
  </div>
) : (
  <button
    onClick={() => {
      let updatedCart = [...cartitems, {...recipe,quantity:1}];
      setCartitems(updatedCart);
      localStorage.setItem("cartitems", JSON.stringify(updatedCart));
    }}
    className="rounded-lg bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-500 transition-all duration-200 hover:bg-orange-500 hover:text-white"
  >
    Add to Cart
  </button>
)}

        </div>
      </div>
    </div>
  );
};

export default RecipeCard;