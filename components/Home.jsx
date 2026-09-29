import React from 'react'
import RecipeCard from "../components/RecipeCard";
import FeaturedRecipe from "../components/FeaturedRecipe";
import RecipeForm from "../components/RecipeForm";
import { useContext } from 'react';
import { MyStore } from '../Context/MyContext';
import {NavLink} from 'react-router'
import Banner from './Banner';
import Navbar from './Navbar';

const Home = () => {
  const {showForm,setShowForm,formRef,cartitems} = useContext(MyStore);
  const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
  const [featuredRecipe,...normalRecipe] = recipes;
  let inRecipePage = false;

  return (
    <div>
      <Navbar inRecipePage={inRecipePage}/>
      <Banner/>
      <div className="relative z-10 mx-auto mt-4 flex max-w-[1500px] gap-6">
        <div className="w-[35%] shrink-0">
          {!showForm && (
            <>
              {featuredRecipe && <FeaturedRecipe recipe={featuredRecipe}/>}
              <NavLink to='/recipes'>
                <button
                  className="
                    mt-5 w-full
                    rounded-xl
                    bg-white
                    px-5 py-4
                    text-sm font-semibold text-orange-500
                    shadow-sm
                    ring-1 ring-orange-100
                    transition-all duration-300
                    hover:bg-orange-500
                    hover:text-white
                    hover:shadow-md
                  "
                >
                  View More Recipes →
                </button>
              </NavLink>
            </>
          )}
          <div
            ref={formRef}
            className={"overflow-hidden transition-all duration-500 ease-out " + (showForm ? "w-full translate-x-0 opacity-100" : "pointer-events-none h-0 w-0 -translate-x-10 opacity-0")}
          >
            <RecipeForm/>
          </div>
        </div>
        <div className="z-0 flex-1">
          <div className="columns-1 md:columns-2 xl:columns-3 gap-5">
            {(showForm ? recipes.splice(0,6) : normalRecipe.splice(0,6)).map((recipe, idx) => {
              const inCart = cartitems.find((elem) => elem.id === recipe.id);
              return (
                <div key={idx} className="mb-5 break-inside-avoid">
                  <RecipeCard recipe={recipe} inCart={inCart}/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
