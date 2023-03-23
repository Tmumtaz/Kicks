import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Contexts/user-context";

import { ReactComponent as KicksLogo } from '../../Assets/reshot-icon-running-shoes-FQ3UPBAKDW.svg';
import { signOutUser } from "../../Utils/firebase/firebaseUtils";
import './Navigation.styles.scss'

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  }

  console.log(currentUser);
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
         
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
