import React from "react";
import {NavLink,useNavigate} from 'react-router';

const OrderSuccess = () => {
    const navigate = useNavigate();
  return (
    <main className="flex min-h-screen items-center justify-center bg-orange-50 px-6 py-10">
      <div className="relative w-full max-w-lg rounded-2xl bg-white px-6 py-10 text-center shadow-sm ring-1 ring-orange-100 sm:px-10">

        {/* Close Button */}
       <NavLink to='/cart'>
         <button
          className="
            absolute right-4 top-4
            flex h-9 w-9 items-center justify-center
            rounded-full
            bg-orange-50
            text-lg font-medium text-orange-500
            ring-1 ring-orange-100
            transition-all duration-200
            hover:bg-orange-500
            hover:text-white
          "
        >
          ×
        </button>
       </NavLink>

        {/* Success Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-50">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-3xl text-white shadow-md shadow-orange-200">
            ✓
          </div>
        </div>

        {/* Heading */}
        <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-orange-500">
          Order Confirmed
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Order Placed Successfully!
        </h1>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
          Your delicious recipes have been ordered successfully.
          We'll start preparing your order shortly.
        </p>

        {/* Order Info */}
        <div className="mt-7 rounded-xl bg-orange-50 p-4 text-left ring-1 ring-orange-100">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">
              Order ID
            </span>

            <span className="text-sm font-semibold text-gray-800">
              #REC-2026
            </span>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-xs text-gray-500">
              Order Status
            </span>

            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-orange-500 shadow-sm">
              Confirmed
            </span>
          </div>
        </div>

        {/* Button */}
        <div className="mt-7">
        
             <button

              onClick={() => navigate("/")}
            className="
              w-full
              rounded-xl
              bg-orange-500
              px-6 py-3
              text-sm font-semibold
              text-white
              shadow-md shadow-orange-200
              transition-all duration-300
              hover:bg-orange-600
              hover:shadow-lg hover:shadow-orange-300
            "
          >
            Continue Shopping →
          </button>
         
        </div>

      </div>
    </main>
  );
};

export default OrderSuccess;