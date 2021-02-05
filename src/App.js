import "./App.css";
import Footer from "./Components/Footer/footer";
import Setup from "./Components/Setup/setup";
import Quotes from "./Components/Quotes/quotes";
import Loading from "./Components/ErrorLoading/loading";
import { useState, useEffect } from "react";

function App() {
  const [isStart, setIsStart] = useState(true);
  const [categories, setCategories] = useState(["all"]);
  const starthandle = () => {
    const newStart = !isStart;
    setIsStart(newStart);
  };

  useEffect(() => {
    setIsStart(true);
  }, []);

  const fetchCategories = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/categories");
    const newCategories = await response.json();
    setCategories(newCategories);
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="App">
      {isStart ? (
        <Setup starthandle={starthandle} />
      ) : (
        <Quotes starthandle={starthandle} categories={categories} />
      )}

      <Footer />
    </div>
  );
}

export default App;
