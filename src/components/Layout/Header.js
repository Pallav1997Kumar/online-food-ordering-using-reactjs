import "./Header.css";
import React from "react";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <React.Fragment>
      <header className="header">
        <h1>React Meals</h1>
        <HeaderCartButton onClickCart={props.onShowCart} />
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="A table full of Delicious Food!" />
      </div>
    </React.Fragment>
  );
}

export default Header;
