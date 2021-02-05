import React, { useState, useEffect } from "react";
import { IoIosFastforward } from "react-icons/io";
import Loading from "../ErrorLoading/loading";

function Quote({ starthandle, category }) {
  const [quoteData, setQuoteData] = useState({});
  const [loading, setLoading] = useState(false);

  console.log("from quote", category);

  const fetchData = async () => {
    var result = "";
    if (category === "random" || category === "") {
      result = await fetch("https://api.chucknorris.io/jokes/random");
      setLoading(true);
    } else {
      result = await fetch(
        "https://api.chucknorris.io/jokes/random?category=" + `${category}`
      );
      setLoading(true);
    }

    const newQuote = await result.json();
    console.log(newQuote);
    setQuoteData(newQuote);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [category]);
  const nextQuote = () => {
    fetchData();
  };
  return (
    <div className="quote-container">
      {/* {loading ? (
        <Loading />
      ) : ( */}
      <div>
        <h4 className="did-u-know">DID U KNOW?</h4>
        <span>
          <img className="icon" src={quoteData.icon_url} alt="" />
        </span>
        <h4 className="quote-content">{quoteData.value}</h4>
        <div className="navigation-container">
          <button className="navigation" onClick={() => nextQuote()}>
            NEXT!
          </button>
          <button className="navigation" onClick={() => starthandle()}>
            LEAVE!
          </button>
        </div>
      </div>
      {/* )} */}
    </div>
  );
}

export default Quote;
