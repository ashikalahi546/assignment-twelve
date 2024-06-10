import React, { useEffect, useState } from "react";
import Categori from "./Categori";
import Modal from "../component/Modal/Modal";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/categori.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);


  const [open, setOpen] = useState(false);

  const handleModal = (categori) => {
    // console.log("hello world");
    setOpen(true);
    setItems(categori);
  };
  const Close = () => {
    setOpen(false);
  };
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-center mt-16 lg:text-4xl text-2xl font-medium">
        Category Section
      </h1>
      <p className="pt-4 text-center">
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet
        ex, in pretium orci vestibulum eget. Class aptent{" "}
        <span className="xl:block">
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Duis pharetra luctus lacus ut vestibulum.
        </span>{" "}
        Maecenas ipsum lacus, lacinia quis posuere ut.
      </p>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-14 relative">
        {categories.map((categori, id) => (
          <Categori
            handleModal={handleModal}
            categori={categori}
            key={id}
          ></Categori>
        ))}
        {open && <Modal items={items} Close={Close} />}
      </div>
    </div>
  );
};

export default Category;
