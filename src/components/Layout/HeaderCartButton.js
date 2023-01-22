import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);
  const [btnIsHightlighted, setBtnIsHighlighted] = useState(false);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce(function (curNumber, item) {
    return curNumber + item.amount;
  }, 0);

  let btnClasses;
  if (btnIsHightlighted) {
    btnClasses = "button bump";
  } else {
    btnClasses = "button";
  }

  useEffect(
    function () {
      if (items.length === 0) {
        return;
      }
      setBtnIsHighlighted(true);
      const timer = setTimeout(function () {
        setBtnIsHighlighted(false);
      }, 300);

      return function () {
        clearTimeout(timer);
      };
    },
    [items]
  );

  return (
    <button className={btnClasses} onClick={props.onClickCart}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
