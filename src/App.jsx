import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import Subscribe from "./sections/Subscribe";
import SuperQuality from "./sections/SuperQuality";
import SpecialOffer from "./sections/SpecialOffer";
import Footer from "./sections/Footer";
import CustomerReviews from "./sections/CustomerReviews";
import Services from "./sections/Services";
import Nav from "./components/Nav";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize the default animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16">
        <Subscribe />
      </section>
      <section className="padding-x padding-t bg-black pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
