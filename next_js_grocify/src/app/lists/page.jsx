import Link from "next/link";
import React from "react";

const Lists = () => {
  const data = [
    {
      id: 1,
      name: "JohnDoe",
      age: 25,
    },
    {
      id: 2,
      name: "Jane",
      age: 30,
    },
    {
      id: 3,
      name: "Alice",
      age: 28,
    },
    {
      id: 4,
      name: "Bob",
      age: 35,
    },
    {
      id: 5,
      name: "Charlie",
      age: 22,
    },
  ];
  return (
    <>
      <div>Lists</div>
      {
        /* Displaying the list of items using map() method */
        <ul className="list-disc pl-5 mt-4">
          {data.map((item) => (
            <li key={item.id} className="mb-2">
              <Link
                href={`/lists/${item.id}/${item.name}/${item.age}`}
                className="text-blue-500 hover:underline"
              >
                {item.name} - {item.age} years old
              </Link>
            </li>
          ))}
        </ul>
      }
    </>
  );
};

export default Lists;
