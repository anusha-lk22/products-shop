import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/cart">Adding Carts</Link>
          </li>
          <li>
            <Link to="/checkout">CheckOut</Link>
          </li>
          <li>
            <Link to="/singlecart">Single Cart</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
