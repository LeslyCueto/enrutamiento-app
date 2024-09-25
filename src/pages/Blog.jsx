import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Blog = () => {
  const { personajes } = useLoaderData();

  return (
    <>
      <div className="container mt-2 p-3">
        <h2 className="text-primary">Blog</h2>
        {personajes.map((item) => (
          <li key={item.id}>
            <Link to={`/blog/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </div>
    </>
  );
};

export default Blog;
