import { useContext } from "react";
import React, { ProductContext } from "../Utils/Context";
import Nav from "./Nav";
import { Link, useSearchParams } from "react-router-dom";
import Loading from "./Loading";

const Home = () => {
  const { products } = useContext(ProductContext);

  const [searchParams] = useSearchParams();
  let category = searchParams.get("category");
  console.log(category);

  const filteredProducts =
    category && products
      ? products.filter((p) => p.category === category)
      : products;

  console.log(filteredProducts);

  return products ? (
    <div className="Home w-screen h-screen flex ">
      <Nav />
      <div className="MainContainer w-[80%] h-full bg-gray-300  pt-25 px-8 grid grid-cols-5 gap-4 sm:grid-cols-2 lg:grid-cols-5 gap-4 overflow-x-hidden overflow-y-auto">
        {filteredProducts &&
          filteredProducts.map((item, idx) => (
            <Link
              key={item.id}
              to={`/Cardsdtails/${item.id}`}
              className="card bg-white w-full h-fit p-3 cursor-pointer rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 rounded-xl border border-gray-100  "
            >
              <div className="mage w-full h-52 bg-gray-50 rounded-lg overflow-hidden p-2 flex items-center justify-center">
                <img
                  className="w-full h-60 object-contain hover:scale-105 transition-all p-4 bg-gray-50  "
                  src={item.thumbnail}
                  alt=""
                />
              </div>
              <p className=" text-center hover:text-blue-800 line-clamp-1">
                {item.title}
              </p>
              <p className="text-base text-center font-bold text-gray-900 mt-1">
                $ {item.price}
              </p>
            </Link>
          ))}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Home;
