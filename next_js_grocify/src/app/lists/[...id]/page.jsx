import React from "react";

const UserId = ({ params }) => {
  const [id, name, age] = params.id;

  return (
    <>
      <div className="text-xl font-bold">User Info</div>
      <div>ID: {id}</div>
      <div>Name: {decodeURIComponent(name)}</div>
      <div>Age: {age}</div>
    </>
  );
};

export default UserId;
