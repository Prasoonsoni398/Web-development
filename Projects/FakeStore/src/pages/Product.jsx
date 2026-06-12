import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import loading from "../assets/loading.gif";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="w-full h-[90vh] flex justify-center items-center">
          <img src={loading} alt="" className="w-50" />
        </div>
      ) : (
        <div className="p-10 grid grid-cols-4 gap-y-15 ">
          {products.length > 0 &&
            products.map((product, index) => (
              <div
                className=" border border-gray-400 shadow-2xl rounded-xl w-75 hover:scale-102 transition-transform duration-300 "
                key={product.id}
              >
                <div className="w-full p-3 h-50 rounded-t-xl bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt=""
                    className="w-full h-full object-contain hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 flex flex-col gap-3">
                  <h3 className="text-justify text-lg font-semibold">
                    {product.title.length > 50
                      ? product.title.slice(0, 47) + "..."
                      : product.title}
                  </h3>
                  <p className="text-sm text-justify">{product.category}</p>
                  <div className="flex gap-2 items-center justify-between">
                    <h5 className="font-bold">Price: {product.price}</h5>
                    <div className="flex gap-2 items-center">
                      <p>{product.rating.rate}</p>
                      <FaStar className="text-yellow-400" />
                    </div>
                  </div>
                  <div>
                    <button className="rounded-full bg-yellow-400 hover:bg-yellow-600 w-full p-2">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}

      <div className="p-10 grid-cols-1 grid gap-y-9">
        {products.length > 0 &&
          products.map((product) => (
            <div
              className="flex rounded-2xl border h-60 w-ful shadow-xl"
              key={product.id}
            >
              <div className="w-80 p-4 rounded-s-2xl bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="ps-10 p-3 flex flex-col gap-5">
                <h3 className="text-justify text-lg font-semibold">
                  {product.title.length > 50
                    ? product.title.slice(0, 47) + "..."
                    : product.title}
                </h3>

                <p className="text-sm text-justify">
                  {product.description.length > 100
                    ? product.description.slice(0, 100) + "..."
                    : product.description}
                </p>

                <div className="flex gap-2 items-center justify-between">
                  <h5 className="font-bold">Price: {product.price}</h5>
                </div>

                <div className="flex gap-2 items-center">
                  <p>{product.rating?.rate}</p>
                  <FaStar className="text-yellow-400" />
                </div>

                <div>
                  <button className="rounded-full bg-yellow-400 w-50 p-2 hover:bg-yellow-600 hover:scale-102 transition-transform duration-300">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Product;
