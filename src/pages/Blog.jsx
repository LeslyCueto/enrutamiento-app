import React from "react";
import { useLoaderData } from "react-router-dom";

const Blog = () => {
  const { personajes } = useLoaderData();
  console.log(personajes);
  
  return (
    <>
      <div className="container mt-2 p-3">
        <h2 className="text-primary">Blog</h2>
      </div>
    </>
  );
};

export default Blog;
