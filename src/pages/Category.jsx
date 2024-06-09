import React, { useEffect, useState } from "react";
import Categori from "./Categori";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categori.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-center mt-16 lg:text-4xl text-2xl font-medium">
        Category Section
      </h1>
     <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-14">
     {categories.map((categori, id) => (
        <Categori categori={categori} key={id}></Categori>
      ))}
     </div>
    </div>
  );
};

export default Category;
