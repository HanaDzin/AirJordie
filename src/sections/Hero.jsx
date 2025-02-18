import React from "react";
import { useState } from "react";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";

import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";

import CountUp from "react-countup";

const Hero = () => {
  const [bigShoeImage, setbigShoeImage] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen p-2 gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-burgundy-red mt-6">
          Trending arrivals
        </p>
        <h1 className="mt-8 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className=" xl:whitespace-nowrap relative z-10 pr-10">
            Get the latest
          </span>
          <br />
          <span className="text-burgundy-red inline-block mt-3">
            Air Jordan
          </span>{" "}
          pairs
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Fall in love with some of the trendiest pairs designed to be worn on &
          off the court.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">
                <CountUp
                  end={parseInt(stat.value.replace(/[^\d]/g, ""), 10)}
                  duration={2}
                  suffix={stat.value.match(/[^\d]+/)?.[0] || ""}
                />
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImage}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
          data-aos="fade-left"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={shoe} data-aos="fade-up" data-aos-delay={index * 300}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => {
                  setbigShoeImage(shoe);
                }}
                bigShoeImage={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
