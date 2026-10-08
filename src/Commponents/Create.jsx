import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../Utils/Context";

const Create = () => {
  const navigate = useNavigate();
  const { products, setProducts } = useContext(ProductContext);

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    image: "",
    description: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();

    if (
      formData.title.trim() === "" ||
      formData.price.trim() === "" ||
      formData.category.trim() === "" ||
      formData.image.trim() === "" ||
      formData.description.trim() === ""
    ) {
      alert("Please fill all the fields!"); // Aap chahen toh koi custom message ya state error bhi dikha sakte hain
      return;
    }

    const finalData = {
      ...formData,
      id: nanoid(), // <-- Yahan aayegi nanoid
      thumbnail: formData.image, // Agar thumbnail property bhi chahiye
    };
    setProducts([...products, finalData]);
    console.log("Saved Data:", finalData);

    setFormData({
      title: "",
      price: "",
      category: "",
      image: "",
      description: "",
    });
    navigate("/");
  };

  return (
    <div className="w-screen h-screen bg-gray-300 flex items-center justify-center ">
      <div className="form bg-gray-400 w-[60%] h-[80%] px-10 py-  ">
        <form onSubmit={SubmitHandler}>
          <input
            name="image"
            onChange={onChange}
            value={formData.image}
            type="url"
            placeholder="Image Link"
            className="bg-gray-200 py-2 w-full px-5 outline-gray-300 text-xl mb-5 mt-10"
          />
          <input
            name="title"
            onChange={onChange}
            value={formData.title}
            type="text"
            placeholder="title"
            className="bg-gray-200 py-2 w-full px-5 outline-gray-300 text-xl mb-5"
          />

          <div className="categoryPrice flex gap-5 ">
            <input
              onChange={onChange}
              name="category"
              value={formData.category}
              type="text"
              placeholder="category"
              className="bg-gray-200 py-2 w-full px-5 outline-gray-300 text-xl mb-5"
            />
            <input
              name="price"
              onChange={onChange}
              value={formData.price}
              type="number"
              placeholder="Price"
              className="bg-gray-200 py-2 w-full px-5 outline-gray-300 text-xl mb-5"
            />
          </div>
          <textarea
            name="description"
            onChange={onChange}
            value={formData.description}
            placeholder="Product description here..."
            rows="10"
            className="bg-gray-200 py-2 w-full  px-5 outline-gray-300 text-xl mb-1"
          ></textarea>

          <input
            type="submit"
            className="bg-sky-600 py-2 px-10 rounded-lg cursor-pointer text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default Create;
