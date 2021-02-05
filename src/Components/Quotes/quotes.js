import React, { useState } from "react";
import Quote from "../Quote/quote";
import Categories from "../Categories/categories";
import Loading from "../ErrorLoading/loading";

function Quotes({ starthandle, categories }) {
  const [category, setCategory] = useState("");

  return (
    <div className="header">
      <h1>let me hit you with some knowledge</h1>
      <Categories categories={categories} setCategory={setCategory} />

      <Quote starthandle={starthandle} category={category} />
    </div>
  );
}

export default Quotes;
