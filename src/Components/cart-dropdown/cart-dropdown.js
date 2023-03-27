import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Contexts/cart-context';

import Button from '../button/button';
import CartItem from "../cart-item/cart-item"

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const navigateToCheckout = () => {
    navigate('/checkout')
  }

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <Button onClick={navigateToCheckout}>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;