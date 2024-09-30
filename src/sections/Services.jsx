import React from "react";
import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service, index) => (
        <div
          key={service.label}
          data-aos="fade-up"
          data-aos-delay={index * 400}
        >
          <ServiceCard {...service} />
        </div>
      ))}
    </section>
  );
};

export default Services;
