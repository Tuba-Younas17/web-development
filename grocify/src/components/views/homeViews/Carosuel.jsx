import React from 'react'

const Carosuel = () => {
  return (
    <div>
      <div
  id="default-carousel"
  className="relative w-full mt-9"
  data-carousel="slide"
>
  {/* Carousel wrapper */}
  <div className="relative overflow-hidden rounded-lg h-48 sm:h-64 md:h-80 lg:h-96">
    {/* Item 1 */}
    <div className=" duration-700 ease-in-out" data-carousel-item="">
      <img
        src="https://pictures.grocerapps.com/original/grocerapp-grocerclub-generic-619343ada1a34.jpeg"
        className="absolute block w-full h-full object-cover"
        alt="Grocer club promotional banner"
      />
    </div>
    {/* Item 2 */}
    <div className=" duration-700 ease-in-out" data-carousel-item="">
      <img
        src="https://pictures.grocerapps.com/original/grocerapp-household-678c005f87dbb.png"
        className="absolute block w-full h-full object-cover"
        alt="Household products banner"
      />
    </div>
    {/* Item 3 */}
    <div className=" duration-700 ease-in-out" data-carousel-item="">
      <img
        src="https://pictures.grocerapps.com/original/grocerapp-electronics-store-66ff8672332a8.png"
        className="absolute block w-full h-full object-cover"
        alt="Electronics store promotional banner"
      />
    </div>
    {/* Item 4 */}
    <div className="duration-700 ease-in-out" data-carousel-item="">
      <img
        src="https://pictures.grocerapps.com/original/grocerapp-fish-6721c3769609f.jpeg"
        className="absolute block w-full h-full object-cover"
        alt="Fresh fish products banner"
      />
    </div>
    {/* Item 5 */}
    <div className=" duration-700 ease-in-out" data-carousel-item="">
      <img
        src="https://www.eatthis.com/wp-content/uploads/sites/4/2020/07/aisle.jpg?quality=82&strip=1"
        className="absolute block w-full h-full object-cover"
        alt="Grocery store aisle"
      />
    </div>
  </div>
  {/* Slider indicators */}
  <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
    <button
      type="button"
      className="w-3 h-3 rounded-full bg-white/50 hover:bg-white"
      aria-current="true"
      aria-label="Slide 1"
      data-carousel-slide-to={0}
    />
    <button
      type="button"
      className="w-3 h-3 rounded-full bg-white/50 hover:bg-white"
      aria-current="false"
      aria-label="Slide 2"
      data-carousel-slide-to={1}
    />
    <button
      type="button"
      className="w-3 h-3 rounded-full bg-white/50 hover:bg-white"
      aria-current="false"
      aria-label="Slide 3"
      data-carousel-slide-to={2}
    />
    <button
      type="button"
      className="w-3 h-3 rounded-full bg-white/50 hover:bg-white"
      aria-current="false"
      aria-label="Slide 4"
      data-carousel-slide-to={3}
    />
    <button
      type="button"
      className="w-3 h-3 rounded-full bg-white/50 hover:bg-white"
      aria-current="false"
      aria-label="Slide 5"
      data-carousel-slide-to={4}
    />
  </div>
  {/* Slider controls */}
  <button
    type="button"
    className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    data-carousel-prev=""
  >
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
      <svg
        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 1 1 5l4 4"
        />
      </svg>
      <span className="sr-only">Previous</span>
    </span>
  </button>
  <button
    type="button"
    className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    data-carousel-next=""
  >
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
      <svg
        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m1 9 4-4-4-4"
        />
      </svg>
      <span className="sr-only">Next</span>
    </span>
  </button>
</div>

    </div>
  )
}

export default Carosuel
