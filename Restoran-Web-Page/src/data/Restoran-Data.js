
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaCoffee,
  FaHamburger,
  FaUtensils
} from "react-icons/fa";

import breakfast1 from "../assets/breakfast/breakfast1.png";
import breakfast2 from "../assets/breakfast/breakfast2.png";
import breakfast3 from "../assets/breakfast/breakfast3.png";
import breakfast4 from "../assets/breakfast/breakfast4.png";
import breakfast5 from "../assets/breakfast/breakfast5.png";
import breakfast6 from "../assets/breakfast/breakfast6.png";

import lunch1 from "../assets/lunch/lunch1.png";
import lunch2 from "../assets/lunch/lunch2.png";
import lunch3 from "../assets/lunch/lunch3.png";
import lunch4 from "../assets/lunch/lunch4.png";
import lunch5 from "../assets/lunch/lunch5.png";
import lunch6 from "../assets/lunch/lunch6.png";

import dinner1 from "../assets/dinner/dinner1.png";
import dinner2 from "../assets/dinner/dinner2.png";
import dinner3 from "../assets/dinner/dinner3.png";
import dinner4 from "../assets/dinner/dinner4.png";
import dinner5 from "../assets/dinner/dinner5.png";
import dinner6 from "../assets/dinner/dinner6.png";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Service", href: "#service" },
  { label: "Menu", href: "#menu" },
  { label: "Contact", href: "#contact" },
];

export const menuData = {

  Breakfast: [
    {
      name: "Eggs Benedict",
      price: "$115",
      desc: "Ipsum ipsum clita erat amet dolor justo diam",
      img: breakfast1,
      type: "Breakfast",
    },
    {
      name: "Breakfast Sandwich",
      price: "$95",
      desc: "Lorem ipsum dolor sit amet",
      img: breakfast2,
      type: "Breakfast",
    },
     {
      name: "Baked Chicken",
      price: "$95",
      desc: "Lorem ipsum dolor sit amet",
      img: breakfast3,
      type: "Breakfast",
    },
     {
      name: "Bagel and cream cheese",
      price: "$95",
      desc: "Lorem ipsum dolor sit amet",
      img: breakfast4,
      type: "Breakfast",
    },
    {
      name: "Fried Egg Toast Brunch",
      price: "$95",
      desc: "Lorem ipsum dolor sit amet",
      img: breakfast5,
      type: "Breakfast",
    },
    {
      name: "Toast Croissant Fried Egg",
      price: "$95",
      desc: "Lorem ipsum dolor sit amet",
      img: breakfast6,
      type: "Breakfast",
    },
  ],
  Lunch: [
    {
      name: "Beef Steak",
      price: "$115",
      desc: "Ipsum ipsum clita erat amet dolor justo diam",
      img: lunch1,
      type: "Lunch",
    },
    {
      name: "Honey with Peppers",
      price: "$95",
      desc: "Lorem ipsum dolor sit amet",
      img: lunch2,
      type: "Lunch",
    },
     {
      name: "Tarrgaon Rubbed Salmon",
      price: "$95",
      desc: "Lorem ipsum dolor sit amet",
      img: lunch3,
      type: "Lunch",
    },
     {
      name: "Indian Lunch",
      price: "$95",
      desc: "Lorem ipsum dolor sit amet",
      img: lunch4,
      type: "Lunch",
    },
    {
      name: "Fried Chicken Bento",
      price: "$95",
      desc: "Lorem ipsum dolor sit amet",
      img: lunch5,
      type: "Lunch",
    },
    {
      name: "healthy Meal Plan",
      price: "$95",
      desc: "Lorem ipsum dolor sit amet",
      img: lunch6,
      type: "Lunch",
    }, 
  ],
  Dinner: [
     {
      name: "Baked Chicken",
      price: "$115",
      desc: "Ipsum ipsum clita erat amet dolor justo diam",
      img: dinner1,
      type: "Dinner",
    },
    {
      name: "Lemony Salmaon Piccata",
      price: "$95",
      desc: "Lorem ipsum dolor sit amet",
      img: dinner2,
      type: "Dinner",
    },
     {
      name: "Garlic Butter Baked Salmon",
      price: "$95",
      desc: "Lorem ipsum dolor sit amet",
      img: dinner3,
      type: "Dinner",
    },
     {
      name: "French Fried with Cheese",
      price: "$95",
      desc: "Lorem ipsum dolor sit amet",
      img: dinner4,
      type: "Dinner",
    },
    {
      name: "Pork Tenderion",
      price: "$95",
      desc: "Lorem ipsum dolor sit amet",
      img: dinner5,
      type: "Dinner",
    },
    {
      name: "Lentil Salad",
      price: "$95",
      desc: "Lorem ipsum dolor sit amet",
      img: lunch6,
      type: "Lunch",
    }, 
  ],

};

export const tabs = [
  { label: "Breakfast", icon: FaCoffee, subtitle: "Popular" },
  { label: "Lunch", icon: FaHamburger, subtitle: "Special" },
  { label: "Dinner", icon: FaUtensils, subtitle: "Lovely" },
];

export const formFields = [
  { id: "name", type: "text", label: "Your Name" },
  { id: "email", type: "email", label: "Your Email" },
  { id: "datetime", type: "datetime-local", label: "Date & Time" },
  { id: "people", type: "select", label: "No Of People", options: ["1", "2", "3"] },
  { id: "message", type: "textarea", label: "Special Request" },
];


export const foodItems = [
    {
      alt: "Chicken Biryani",
      src: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?w=500&h=400",
      emoji: "🍛",
      bgColor: "bg-gradient-to-br from-orange-500 to-red-600"
    },
    {
      alt: "Beef Karahi",
      src: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?w=500&h=400",
      emoji: "🥘",
      bgColor: "bg-gradient-to-br from-red-500 to-pink-600"
    },
    {
      alt: "Fish Tikka",
      src: "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?w=500&h=400",
      emoji: "🐟",
      bgColor: "bg-gradient-to-br from-blue-500 to-teal-600"
    },
    {
      alt: "Vegetable Pulao",
      src: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?w=500&h=400",
      emoji: "🌾",
      bgColor: "bg-gradient-to-br from-green-500 to-emerald-600"
    }
  ];


  export const faqData = [
    {
      question: "What are your restaurant timings?",
      answer: "We are open daily from 11:00 AM to 11:00 PM. We serve lunch from 12:00 PM to 4:00 PM and dinner from 7:00 PM to 10:30 PM."
    },
    {
      question: "Do you offer home delivery?",
      answer: "Yes, we provide home delivery within a 5km radius. Delivery charges apply based on distance. You can order through our app or call us directly."
    },
    {
      question: "Do you have vegetarian options?",
      answer: "Absolutely! We have a wide variety of vegetarian dishes including dal, vegetables, biryani, and traditional Pakistani vegetarian curries."
    },
    {
      question: "Can I make reservations?",
      answer: "Yes, we accept reservations for parties of 4 or more. Please call us at least 2 hours in advance to book your table."
    },
    {
      question: "Do you cater for events?",
      answer: "Yes, we provide catering services for weddings, corporate events, and private parties. Contact us for custom menu options and pricing."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, all major credit/debit cards, and mobile payment options like JazzCash and EasyPaisa."
    }
  ];


export const footerData = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Service", href: "#service" },
      { label: "Menu", href: "#menu" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Contact",
    items: [
      { icon: FaMapMarkerAlt, text: "123 Street, New York, USA" },
      { icon: FaPhoneAlt, text: "+012 345 67890" },
      { icon: FaEnvelope, text: "info@example.com" },
    ],
    social: [
      { icon: FaTwitter, href: "#twitter" },
      { icon: FaFacebookF, href: "#facebook" },
      { icon: FaYoutube, href: "#youtube" },
      { icon: FaLinkedinIn, href: "#linkedin" },
    ],
  },
  {
    title: "Opening",
    hours: [
      { day: "Monday - Saturday", time: "09AM - 09PM" },
      { day: "Sunday", time: "10AM - 08PM" },
    ],
  },
  {
    title: "Newsletter",
    content: "Stay updated with our latest news, offers, and insights. Subscribe now to never miss an update!",
    placeholder: "Your email",
    buttonText: "SignUp",
  },
  
];

export const copyRightData =  {

  siteName: "Restoran",
  designer: { name: "CuriGenius-LAB", href: "https://htmlcodex.com" }

}



