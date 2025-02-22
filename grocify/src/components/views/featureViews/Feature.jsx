import React from "react";

const Feature = ({ featuredata }) => {
    const { title, features } = featuredata; 
  return (
    <div className="min-h-screen bg-[url('/src/assets/Image.png')] bg-center bg-cover px-28 py-5 relative">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
          <div className="flex flex-wrap -mx-4 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8 md:mb-0">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={feature.iconPath}
                    />
                  </svg>
                  <h3 className="text-lg font-bold text-gray-700 mt-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
