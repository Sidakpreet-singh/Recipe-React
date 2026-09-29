import React from "react";
import { useContext } from "react";
import { MyStore } from "../Context/MyContext";
import {NavLink} from 'react-router'
import { useNavigate } from 'react-router'

const Cart = () => {
  const {setCartitems,cartitems,incrementQuantity,decrementQuantity} = useContext(MyStore);
  const subtotal = cartitems.reduce(
  (total, item) => total + item.Price * item.quantity,
  0
);
const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-orange-50 px-6 py-8 md:px-10 lg:px-14">
      
      {/* Header */}
      <div className="mx-auto mb-8 max-w-[1200px]">
        <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
          Your Cart
        </p>

        <h1 className="mt-1 text-3xl font-bold text-gray-900">
          Your Favorite Recipes
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Review your selected recipes before placing your order.
        </p>
      </div>

      {cartitems.length === 0 ? (

        /* Empty Cart */
        <div className="mx-auto max-w-[600px] rounded-2xl bg-white px-6 py-16 text-center shadow-sm ring-1 ring-orange-100">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-3xl">
            🛒
          </div>

          <h2 className="mt-5 text-xl font-bold text-gray-900">
            Your Cart is Empty
          </h2>

          <p className="mx-auto mt-2 max-w-sm text-sm text-gray-500">
            Looks like you haven't added any recipes yet.
          </p>

         <NavLink to='/recipes'>
           <button className="mt-6 rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-orange-600">
            Explore Recipes →
          </button>
         </NavLink>
        </div>

      ) : (

        /* Cart */
        <div className="mx-auto grid max-w-[1200px] gap-6 lg:grid-cols-[1fr_360px]">

          {/* Cart Items */}
          <div className="space-y-4">

            {cartitems.map((recipe) => (
              <div
                key={recipe.id}
                className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-orange-100"
              >

                {/* Image */}
                <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl">
                  <img
                    src={recipe.RecipeImage}
                    alt={recipe.RecipeName}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Recipe Info */}
                <div className="min-w-0 flex-1">
                  <h2 className="truncate text-base font-bold text-gray-900">
                    {recipe.RecipeName}
                  </h2>

                  <p className="mt-1 text-xs text-gray-400">
                    By {recipe.ChefName}
                  </p>

                  <p className="mt-2 text-sm font-semibold text-orange-500">
                    ₹{recipe.Price}
                  </p>
                </div>

                {/* Quantity */}
                <div className="flex items-center overflow-hidden rounded-lg bg-orange-50 ring-1 ring-orange-100">
                  <button 
                  onClick={()=>{
        decrementQuantity(recipe.id);
       
        
    }}
                  className="flex h-8 w-8 items-center justify-center text-lg font-semibold text-orange-500 transition-all duration-200 hover:bg-orange-500 hover:text-white">
                    −
                  </button>

                  <span className="flex h-8 min-w-8 items-center justify-center border-x border-orange-100 bg-white px-2 text-sm font-semibold text-gray-700">
                    {recipe.quantity}
                  </span>

                  <button 
                  onClick={()=>{
        incrementQuantity(recipe.id);
       
        
    }}className="flex h-8 w-8 items-center justify-center text-lg font-semibold text-orange-500 transition-all duration-200 hover:bg-orange-500 hover:text-white">
                    +
                  </button>
                </div>

                {/* Total */}
                <p className="w-20 text-right text-sm font-bold text-gray-800">
                  ₹{recipe.Price * recipe.quantity}
                </p>

              </div>
            ))}

          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-2xl bg-white p-6 shadow-sm ring-1 ring-orange-100 lg:sticky lg:top-6">

            <h2 className="text-lg font-bold text-gray-900">
              Order Summary
            </h2>

            <div className="mt-5 space-y-3 text-sm">

              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
                   <div className="flex justify-between text-gray-500">
                <span>Delivery</span>
                <span>₹40</span>
              </div>

            

            </div>

            <div className="my-5 border-t border-gray-100" />

            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-700">
                Total
              </span>

              <span className="text-xl font-bold text-orange-500">
                ₹{subtotal + 40}
              </span>
            </div>

           
             <button   onClick={() => {
              navigate("/cart/ordersuccess");
              setCartitems([]);
              localStorage.setItem('cartitems',JSON.stringify([]));

             }}
             className="mt-6 w-full rounded-xl bg-orange-500 py-3 text-sm font-semibold text-white shadow-md shadow-orange-200 transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-300">
              Proceed to Order →
            </button>
           
          </div>

        </div>
      )}
    
    </main>
  );
};

export default Cart;