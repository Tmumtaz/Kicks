import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../Contexts/user-context";
import { CartContext } from "../../Contexts/cart-context";


import { ReactComponent as KicksLogo } from '../../Assets/reshot-icon-running-shoes-FQ3UPBAKDW.svg';
import { signOutUser } from "../../Utils/firebase/firebaseUtils";

import CartIcon from "../../Components/cart-icon/cart-icon";
import CartDropDown from "../../Components/cart-dropdown/cart-dropdown";


import './Navigation.styles.scss'

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const { isCartOpen, setIsCartOpen} = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  }

 
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <KicksLogo  className="logo"/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
          ): (
            <Link className="nav-link" to='/auth'>
              SIGN IN
            </Link>
          )}
        <CartIcon />
        </div>
       { isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
