
// import image1 from "/image/carousel3.png";
import { useEffect, useState } from "react";
// import Discount from "./Discount";

const DiscountProduct = () => {
  const { discountProduct, setDiscountProduct } = useState([]);

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setDiscountProduct(data));
  }, []);
  return (
    <div className="">
      <div className="text-center mt-16">
        <h1 className="lg:text-4xl text-2xl font-medium">
          Discounted Products
        </h1>
        <p className="pt-4">
          Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt
          laoreet ex, in pretium orci vestibulum eget. Class aptent{" "}
          <span className="block">
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos..
          </span>
        </p>
      </div>

    {/* {
        discountProduct.map(discount=><Discount discount={discount}></Discount>)
    } */}
    </div>
  );
};

export default DiscountProduct;
