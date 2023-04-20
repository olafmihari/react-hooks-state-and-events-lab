import React, {useState} from "react";

function Item({ name, category }) {
  
  const[cart, setCart] = useState(true);
  const cartItem = cart ? "":"in-cart"


  const addCart = ()=>{
    setCart(!cart);
  }

  return (
    <li className={cartItem}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cart?"add":"remove"} onClick={addCart}> {cart?"Add to Cart":"Remove From Cart"}</button>
    </li>
  );
}

export default Item;