import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { mainShoe } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          We provide you
          <br />
          <span className="text-burgundy-red">Super</span>
          <span className="text-burgundy-red"> Quality</span> shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className=" p-6 flex-1 flex justify-center items-center bg-card bg-cover rounded-md">
        <img
          src={mainShoe}
          alt="quality shoe"
          width={570}
          height={522}
          className="object-contain "
        />
      </div>
    </section>
  );
};

export default SuperQuality;
