import React from "react";

const TopSeller = () => {
  return (
    <>
      <div className="p-8 bg-indigo-100 rounded-md mt-7 ">
        <h2 className="text-3xl font-bold mb-6 text-red-600">Top Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product Card */}
          <div className="bg-white border rounded-lg shadow-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <img
              src="https://pictures.grocerapps.com/original/grocerapp-anaaj-yousaf-chakki-atta-whole-61dd1718c07a7.jpeg"
              alt="Product"
              className="h-40 w-full object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold">Anaaj Yousaf Chakki Atta</h3>
            <p className="text-sm text-gray-500">5 kg</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-lg font-bold text-gray-800">Rs. 675</span>
              <span className="text-sm line-through text-gray-400">
                Rs. 750
              </span>
            </div>
            <span className="text-sm font-semibold text-white bg-red-500 rounded-full px-2 py-1 mt-2 inline-block">
              10% OFF
            </span>
            <button className="btn w-full mt-4 bg-orange-500 text-white font-bold py-2 rounded-lg hover:bg-orange-800 transition-colors">
              Add to Cart
            </button>
          </div>
          <div className="bg-white border rounded-lg shadow-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <img
              src="https://gradeonemart.pk/wp-content/uploads/2023/05/6-25-2021-21518-PM.jpg"
              alt="Product"
              className="h-40 w-full object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold">Kausar Cooking Oil 1 Litre</h3>
            <p className="text-sm text-gray-500">1 Litre</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-lg font-bold text-gray-800">Rs. 555</span>
              <span className="text-sm line-through text-gray-400">
                Rs. 600
              </span>
            </div>
            <span className="text-sm font-semibold text-white bg-red-500 rounded-full px-2 py-1 mt-2 inline-block">
              7.5% OFF
            </span>
            <button className="btn w-full mt-4 bg-orange-500 text-white font-bold py-2 rounded-lg hover:bg-orange-600 transition-colors">
              Add to Cart
            </button>
          </div>
          <div className="bg-white border rounded-lg shadow-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <img
              src="data:image/jpeg;base64,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IOx1B+YB+6Z78W3IF2JuO6i5CAOqAZhoNLAfiQZpivRJUJJpY5FGtlfClreWYVh8pg1vRTjR6mIwtT4lqU/lmlu+LON8lqIqyt7kFlJLano24oPYwr/DiG/+1NZhVuSOKL/cnb4KtAj86gMlviUPRV1/qR9tp9FYA3pIfFF+QnCK/LuPT1sDih7qRf8ARedb4bzLhlo01qNUosKaBhVw9anZgoBHfQDeRm0ze+H05wctyawW+Lby3wzeYPEOY8CzZVxmGLeHbID+BN5mcHxFNj3XRvcwPyMh5nVMP0oN/UlHjWT9Dn+JyedU9Kp/qlIeNZfyp1JyyWwwcD4h438I2nKYP0o237JgPeXQSb8rZvplLDUQHyL2mJe2iILtTW/2y5XTwv5257wN6v0pEw9Pta1RWpop2zMPXPkts2v2Qek7tyly+mCo9mD2lZznrVTvUqnc+NvD/UmVTyb+ibdJRX8m7ErESB0BERAEREAREQBERAEREAREQBERAEREAREQBKWlYgFLSsRALdWgraMqsPMA/Oa3Fcs4Cr/a4LCVPiw9M/NZtogEcr8i8MYZTg6IXoEBQD3ZCLTXVfRdws+rSrJ8OLr/ACZyJNIgi4p5RHuWuTcJgWapQV2qMMueo+dgl75VPQXtfxsPCSGIgyopKyEREGRERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAP/9k="
              alt="Product"
              className="h-40 w-full object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold">Nurpur Full Cream Milk Pouch</h3>
            <p className="text-sm text-gray-500">250 ml</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-lg font-bold text-gray-800">Rs. 105</span>
              <span className="text-sm line-through text-gray-400">
                Rs. 114
              </span>
            </div>
            <span className="text-sm font-semibold text-white bg-red-500 rounded-full px-2 py-1 mt-2 inline-block">
              7.5% OFF
            </span>
            <button className="btn w-full mt-4 bg-orange-500 text-white font-bold py-2 rounded-lg hover:bg-orange-600 transition-colors">
              Add to Cart
            </button>
          </div>
          <div className="bg-white border rounded-lg shadow-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <img
              src="https://www.organicco.pk/cdn/shop/products/Chilgoza_01_5a93c70a-cbca-4652-aaaa-def5393ce95d_2048x.png?v=1642089250"
              alt="Product"
              className="h-40 w-full object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold">Brown Chilgooza Pine Nuts</h3>
            <p className="text-sm text-gray-500">1 Kg</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-lg font-bold text-gray-800">Rs. 5400</span>
              <span className="text-sm line-through text-gray-400">
                Rs. 6000
              </span>
            </div>
            <span className="text-sm font-semibold text-white bg-red-500 rounded-full px-2 py-1 mt-2 inline-block">
              10% OFF
            </span>
            <button className="btn w-full mt-4 bg-orange-500 text-white font-bold py-2 rounded-lg hover:bg-orange-600 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSeller;
