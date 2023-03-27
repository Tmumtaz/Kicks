import "./Checkout.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../Contexts/cart-context";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);
  return (
    <div>
      <h1>Checkout</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { name, quantity } = cartItem;
          return (
            <div>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <span onClick={() => addItemToCart(cartItem)}>Increment</span>
              <br />
              <span onClick={() => removeItemFromCart(cartItem)}>Decrement</span>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
