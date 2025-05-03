import axios from "axios";
import React from "react";

const CoursesPage = async () => {
  // api result => from server, store it in a variable, and we can directly display it in server component without using state.
  const response = await axios.get(`https://fakestoreapi.com/products/1`);
  const data = response.data;
  console.log(data); // Check the data structure in the console
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-4xl font-bold text-indigo-600 mb-8">Our Courses
		{data.price}
	  </h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl">
        Browse through our collection of courses designed to help you master the
        skills you need to succeed.
		{data.title}
      </p>

      {/* Sample Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {["Web Development", "Data Science", "UI/UX Design"].map(
          (course, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {course}
              </h3>
              <p className="text-gray-600 mb-4">
                {course === "Web Development" &&
                  "Learn to build modern websites using HTML, CSS, JavaScript, and React."}
                {course === "Data Science" &&
                  "Master Python and machine learning algorithms with hands-on projects."}
                {course === "UI/UX Design" &&
                  "Learn to design beautiful and intuitive user interfaces."}
              </p>
              <a
                href="/courses" // Add the course detail link here (or dynamic routes)
                className="text-indigo-600 hover:underline"
              >
                Learn More
              </a>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
