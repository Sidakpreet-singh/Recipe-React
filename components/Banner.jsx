import React from 'react'

const Banner = () => {
  return (
<section className="relative mx-auto mt-6 max-w-[1500px] overflow-hidden rounded-3xl shadow-md">
  
  {/* Banner Image */}
  <img
    src="./Public/images/recipe-banner.jpg"
    alt="Delicious food"
    className="h-[300px] w-full object-cover md:h-[340px]"
  />

  {/* Dark Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

  {/* Content */}
  <div className="absolute inset-0 flex items-center px-8 md:px-14">
    <div className="max-w-xl text-white">

      <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-orange-200">
        Discover • Cook • Enjoy
      </p>

      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
        Discover Your Taste
      </h1>

      <p className="mt-4 max-w-md text-sm leading-6 text-white/80 md:text-base">
        Explore delicious recipes, discover new flavors, and find your next
        favorite dish from talented chefs.
      </p>

      <button
        className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold
        text-gray-900 shadow-lg transition duration-300
        hover:-translate-y-0.5 hover:bg-orange-500 hover:text-white"
      >
        Explore Recipes
      </button>

    </div>
  </div>

</section>
  )
}

export default Banner
