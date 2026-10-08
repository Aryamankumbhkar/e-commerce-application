import React, { useContext } from "react";
import { ProductContext } from "../Utils/Context";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const CardsDetails = () => {
  const { id } = useParams();

  const { products } = useContext(ProductContext);

  const product = products.find((p) => p.id == id);

  return products ? (
    <div className=" w-screen h-screen flex  items-center justify-center m-auto ">
      <div className="cardsFullDetails w-[80%] h-[80%] m-auto  mt-10 rounded-lg flex  items-center justify-center ">
        <div className="imagecontainer h-full w-full  ">
          <img
            className="w-full h-full object-contain"
            src={product.thumbnail}
            alt="image"
          />
        </div>
        <div className="detailsContainer h-full w-full  p-20">
          <h1 className="text-3xl font-semibold mb-1 ">{product.title}</h1>
          <h3 className="text-xl font-medium text-gray-600 mb-2 line-clamp-2 ">
            {product.category}
          </h3>
          <p className="text-gray-700 mt-2 tracking-tight w-[80%]">
            {product.description}
          </p>
          <p className="text-2xl font-semibold mt-2"> Price: {product.price}</p>
          <button className="bg-pink-400 mr-10 cursor-pointer  font-semibold px-6 py-2 rounded mt-4 hover:bg-blue-600 transition-colors">
            Add to Cart
          </button>
          <button className="border-1 border-gray-400 cursor-pointer font-semibold  px-6 py-2 rounded mt-4 hover:bg-blue-600 transition-colors">
            WISHLIST
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default CardsDetails;
