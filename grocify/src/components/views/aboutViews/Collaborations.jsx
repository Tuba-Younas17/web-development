import React from "react";

const Collaborations = ({ partners }) => {
  return (
    <section className="py-12 bg-gray-500 text-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-white pt-8 pb-4 text-center">
          Our Collaborations
        </h2>
        <div className="flex flex-wrap -mx-4">
          {partners.map((partner, index) => (
            <div key={index} className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                <iframe
                  src={partner.link}
                  className="w-full h-64 md:h-96"
                  frameBorder={0}
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-700">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-gray-600">{partner.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaborations;
