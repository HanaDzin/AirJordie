import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  shoe8,
  shoe9,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: bigShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: bigShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: bigShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan",
    price: "$199.19",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan ",
    price: "$149.99",
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan",
    price: "$179.99",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan",
    price: "$210.99",
  },
  {
    imgURL: shoe8,
    name: "Nike Air Jordan",
    price: "$219.99",
  },
  {
    imgURL: shoe9,
    name: "Nike Air Jordan",
    price: "$110.99",
  },
];

export const services = [
  {
    index: 1,
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    index: 2,
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    index: 3,
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Jordan 2", link: "/" },
      { name: "Air Jordan 3", link: "/" },
      { name: "Air Jordan 4", link: "/" },
      { name: "Air Jordan 5", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@airjordie.com", link: "mailto:customer@airjordie.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
