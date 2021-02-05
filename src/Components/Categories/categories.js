import React, { useState, useRef, useEffect } from "react";

function Categories({ categories, setCategory }) {
  const [isClicked, setIsClicked] = useState(true);

  const handleChange = (e) => {
    setCategory(e.target.value);
  };
  const handleClick = () => {
    setIsClicked(!isClicked);
    console.log(isClicked);
  };

  return (
    <div className="categories">
      <h5>select chucktegory </h5>
      <select onChange={handleChange} onClick={handleClick} size="2">
        <option value="random">random</option>
        {categories.map((category, index) => {
          return (
            <option key={index} value={category}>
              {category}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Categories;
