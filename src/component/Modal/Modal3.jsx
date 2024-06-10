import { RxCrossCircled } from "react-icons/rx";

const Modal3 = ({ item, close }) => {
  //   console.log(item);
  const { title, price, discription, image } = item;
  return (
    <div className="absolute top-[50%]  z-20  w-[477px] bg-white shadow-xl rounded-3xl left-[37%]">
      <div className="relative">
        <img className="w-full h-80" src={image} alt="" />
        <button
          onClick={() => close()}
          className="text-2xl font-bold  absolute top-3 text-white right-3"
        >
          <RxCrossCircled />
        </button>
        <div className="pt-6 pb-9  flex flex-col items-center text-center">
          <h2 className="text-3xl font-medium">{title}</h2>
          <div className="flex items-center py-6 gap-5">
            <p className="  text-xl font-medium text-[#393939]">${price}.00</p>
            <p className="  text-xl font-medium line-through text-[#FF2E21]">
              ${price}.00
            </p>
          </div>
          <p className="w-80">{discription}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal3;
