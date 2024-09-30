import React from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <div className="bg-card bg-center bg-cover rounded-full">
        <img
          src={imgURL}
          alt={name}
          className="w-[280px] h-[280px] object-contain transition-transform duration-300 ease-in-out hover:scale-105" // Added scaling on hover
        />
      </div>
      <div className="mt-8 flex justify-start gap-3.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin cursor-pointer">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-burgundy-red text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
