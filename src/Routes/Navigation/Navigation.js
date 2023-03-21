import { Outlet, Link } from "react-router-dom";

import { ReactComponent as KicksLogo } from '../../Assets/reshot-icon-running-shoes-FQ3UPBAKDW.svg';
import './Navigation.styles.scss'

const Navigation = () => {
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
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
