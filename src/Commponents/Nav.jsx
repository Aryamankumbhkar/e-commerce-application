import React, { useContext } from "react";
import { ProductContext } from "../Utils/Context";
import { Link, useSearchParams } from "react-router-dom";

const Nav = () => {
  const [searchParams] = useSearchParams();
  const currentCategory = searchParams.get("category");
  const { products } = useContext(ProductContext);
  const uniqueCategories = products
    ? [...new Set(products.map((p) => p.category))]
    : [];

  const colors = () => {
    return `rgba(${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()}, 0.8)`;
  };

  console.log(uniqueCategories);

  return (
    <nav className="flex flex-col items-center gap-4 w-[20%] h-full bg-gray-200 pt-10">
      <a href="/create" className="border-1 border-gray-500  py-2 px-4 rounded">
        Add New Product
      </a>

      <hr className="w-[80%] border-gray-600" />

      <Link
        to="/"
        className={`px-3 py-2 rounded-lg transition-all ${
          !currentCategory
            ? "bg-gray-300 font-semibold text-blue-600"
            : "hover:bg-gray-300"
        }`}
      >
        Home / All Products
      </Link>
      <h1 className="w-[80%] text-xl font-bold text-gray-800">
        Category filter
      </h1>
      <div className="w-[80%] flex flex-col gap-1.5">
        {uniqueCategories.map((cat, idx) => {
          const isActive = currentCategory === cat;
          return (
            <Link
              key={idx}
              to={`/?category=${cat}`}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg capitalize transition-all ${
                isActive
                  ? "bg-gray-300 font-semibold text-blue-600 shadow-sm"
                  : "hover:bg-gray-300 text-gray-700"
              }`}
            >
              <span
                style={{ backgroundColor: colors() }}
                className="w-[1vw] h-[2vh]  rounded-full"
              ></span>
              {cat}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
