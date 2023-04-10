import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import SplitButton from "react-bootstrap/SplitButton";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
import React, { useState } from "react";
import { Footer } from "./components/Footer";
import { NavigationBar } from "./components/NavigationBar";
import { Header } from "./components/Header";
import { Section } from "./components/Section";

function App() {
  const [Count, setCount] = useState(0);
  // const [Add, setAdd] = useState(true)
  const getCart = (event) => {
    console.log(event);
    if (event.target.innerText === "Add to cart") {
      addItem(event);
    } else if (event.target.innerText === "Remove") {
      removeItem(event);
    }
  };

  function addItem(event) {
    setCount(Count + 1);
    event.target.innerText = "Remove";
    event.target.classList.value = "mx-auto mb-3 btn btn-outline-danger mt-auto ";
  }

  function removeItem(event) {
    setCount(Count - 1);
    event.target.innerText = "Add to cart";
    event.target.classList.value = "mx-auto mb-3 btn btn-outline-dark mt-auto";
  }
  return (
    <div className='App'>
      <NavigationBar count={Count} />
      <Header />
      <Section cart={getCart} />
      <Footer />
    </div>
  );
}

export default App;
