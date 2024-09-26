import React, { useEffect } from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";

const Blog = () => {
  const { personajes } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    console.log(searchParams.get("categoria"));
  }, [searchParams]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchParams({ personaje: e.target.value });
  };

  return (
    <>
      <div className="container mt-2 p-3">
        <h2 className="text-primary">Blog</h2>
        <input
          className="form-control mb-2"
          type="text"
          onChange={handleChange}
          value={
            searchParams.get("personaje") ? searchParams.get("personaje") : ""
          }
        />
        {personajes.filter((item) => {
          let filter = searchParams.get('personaje');
          let name = item.name.toLowerCase();

          if (!filter) {
            return true;
          } else {
            return name.startsWith(filter.toLowerCase());
            
          }
        })
        .map((item) => (
          <li key={item.id}>
            <Link to={`/blog/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </div>
    </>
  );
};

export default Blog;
