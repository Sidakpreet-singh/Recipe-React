import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { MyStore } from "../Context/MyContext";

const RecipeForm = () => {
  const { recipes, setRecipes ,setShowForm} = useContext(MyStore);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode:"onChange"
  });

 const SubmitHandler = (data) => {
  console.log(data);

  const file = data.RecipeImage[0];

  const reader = new FileReader();

  reader.onload = () => {
    const recipeData = {
      ...data,
      RecipeImage: reader.result,
    };

    let updatedRecipes = [...recipes, recipeData];

    setRecipes(updatedRecipes);

    localStorage.setItem(
      "recipes",
      JSON.stringify(updatedRecipes)
    );

    reset();
    setShowForm(false);
  };

  reader.readAsDataURL(file);
};

  const image = watch("RecipeImage");

  return (
    <form
      onSubmit={handleSubmit(SubmitHandler)}
      className="relative w-full rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100 md:p-6"
    >
      {/* Close Button */}
      <button
        type="button"
        onClick={()=>{setShowForm(false)}}
        className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-lg text-gray-500 transition-all duration-200 hover:rotate-90 hover:bg-orange-100 hover:text-orange-500"
      >
        ×
      </button>

      {/* Form Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">
          Add Recipe
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Add details about your delicious recipe.
        </p>
      </div>

      {/* Recipe Image */}
      <div className="mb-5">
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Recipe Image
        </label>

        <label
          htmlFor="recipe-image"
          className="flex h-36 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 transition hover:border-orange-400 hover:bg-orange-50"
        >
          {image?.[0] ? (
            <img
              src={URL.createObjectURL(image[0])}
              alt="Recipe Preview"
              className="h-full w-full object-cover"
            />
          ) : (
            <>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow-sm">
                📷
              </div>

              <p className="text-sm font-medium text-gray-700">
                Upload recipe image
              </p>

              <p className="mt-1 text-xs text-gray-400">
                PNG, JPG up to 5MB
              </p>
            </>
          )}
        </label>

        <input
          id="recipe-image"
          type="file"
          accept="image/png, image/jpeg"
          {...register("RecipeImage", {
            required: "Recipe image is required",
          })}
          className="hidden"
        />

        {errors.RecipeImage && (
          <p className="mt-1 text-xs text-red-500">
            {errors.RecipeImage.message}
          </p>
        )}
      </div>

      {/* Recipe Name */}
      <div className="mb-5">
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Recipe Name
        </label>

        <input
          type="text"
          {...register("RecipeName", {
            required: "RecipeName is required",
          })}
          placeholder="e.g. Creamy Garlic Pasta"
          className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
        />

        {errors.RecipeName && (
          <p className="mt-1 text-xs text-red-500">
            {errors.RecipeName.message}
          </p>
        )}
      </div>

      {/* Chef Name */}
      <div className="mb-5">
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Chef Name
        </label>

        <input
          type="text"
          {...register("ChefName", {
            required: "ChefName is required",
          })}
          placeholder="e.g. John Doe"
          className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
        />

        {errors.ChefName && (
          <p className="mt-1 text-xs text-red-500">
            {errors.ChefName.message}
          </p>
        )}
      </div>

      {/* Description */}
      <div className="mb-5">
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Description
        </label>

        <textarea
          rows="3"
          {...register("Description", {
            required: "Description is required",
            minLength: {
              value: 20,
              message: "Description must be at least 20 characters",
            },
          })}
          placeholder="Tell us a little about this recipe..."
          className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
        />

        {errors.Description && (
          <p className="mt-1 text-xs text-red-500">
            {errors.Description.message}
          </p>
        )}
      </div>

      {/* Price + Prep Time */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Price */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Price
          </label>

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-400">
              ₹
            </span>

            <input
              type="number"
              {...register("Price", {
                required: "Price is required",
              })}
              placeholder="199"
              className={`h-11 w-full rounded-xl border bg-gray-50 pl-9 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-4 ${
                errors.Price
                  ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                  : "border-gray-200 focus:border-orange-400 focus:ring-orange-100"
              }`}
            />
          </div>

          {errors.Price && (
            <p className="mt-1.5 pl-1 text-xs font-medium text-red-500">
              {errors.Price.message}
            </p>
          )}
        </div>

        {/* Prep Time */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Preparation Time
          </label>

          <div className="relative">
            <input
              type="number"
              {...register("PrepTime", {
                required: "Preparation time is required",
              })}
              placeholder="30"
              className={`h-11 w-full rounded-xl border bg-gray-50 px-4 pr-16 text-sm outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-4 ${
                errors.PrepTime
                  ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                  : "border-gray-200 focus:border-orange-400 focus:ring-orange-100"
              }`}
            />

            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-400">
              min
            </span>
          </div>

          {errors.PrepTime && (
            <p className="mt-1.5 pl-1 text-xs font-medium text-red-500">
              {errors.PrepTime.message}
            </p>
          )}
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-orange-500 text-sm font-semibold text-white shadow-md shadow-orange-200 transition-all duration-200 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-200 active:scale-[0.98]"
      >
        <span className="text-lg leading-none">+</span>
        Add Recipe
      </button>
    </form>
  );
};

export default RecipeForm;