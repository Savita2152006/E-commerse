import React from "react";
import "./ScrollableCategories.css";

import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
import five from "../assets/five.png";
import six from "../assets/six.png";
import seven from "../assets/seven.png";


const categories = [
  { name: "For You", image: one },
  { name: "Following", image: two },
  { name: "Graphic Design", image: three },
  { name: "Photography", image: four },
  { name: "UI/UX", image: five },
  { name: "3D Art", image: six },
  { name: "Motion", image: seven },
  { name: "Following", image: two },
  { name: "Graphic Design", image: three },
  { name: "Photography", image: four },
  { name: "UI/UX", image: five },
  { name: "3D Art", image: six },
  { name: "Motion", image: seven },
];

export default function ScrollableCategories() {
  return (
    <div className="scrollable-container">
      {categories.map((category, index) => (
        <button className="category-button" key={index}>
          <img src={category.image} alt={category.name} />
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
}
