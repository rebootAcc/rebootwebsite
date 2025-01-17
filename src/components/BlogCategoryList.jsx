import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const BlogCategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `${backendUrl}/api/blogs/category-dropdown-random`
        );
        const data = await response.json();

        if (response.ok) {
          const filteredCategories = data.data.filter(
            (category) => category.trim() !== ""
          );
          setCategories(filteredCategories);
        } else {
          setError(data.message || "Failed to fetch categories");
        }
      } catch (err) {
        setError(err.message || "An error occurred while fetching categories");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    router.push(`/blogs?category=${encodeURIComponent(category)}`);
  };

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className=" flex flex-col gap-5 p-5 rounded-md w-full bg-[#00000008]">
      <h2 className="text-xl font-medium text-[#333]">Categories</h2>
      {categories.map((category, index) => (
        <div
          key={index}
          onClick={() => handleCategoryClick(category)}
          className="flex  gap-3 bg-white border border-[#cccccc]  rounded py-4 px-5 items-center cursor-pointer p-3  hover:bg-gray-50"
        >
          <div className="text-lg font-medium text-[#555]">{category}</div>
        </div>
      ))}
    </div>
  );
};

export default BlogCategoryList;
