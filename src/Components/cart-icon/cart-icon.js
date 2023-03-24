import { useContext } from 'react';

import { ReactComponent as ShoppingCartIcon } from '../../Assets/shopping-bag.svg';

import { CartContext } from '../../Contexts/cart-context';

import './cart-icon.styles.scss'

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen } = useContext(CartContext);
    const toggle = () => setIsCartOpen(!isCartOpen);
    return(
        <div className='cart-icon-container' onClick={toggle}>
            <ShoppingCartIcon className='shopping-icon'/>
            <span className='item-count'>10</span>
        </div>
    );
}

export default CartIcon;