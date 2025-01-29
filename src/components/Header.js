import logo from "../images/Logo.svg";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <Link to="/">
          <img src={logo} alt="Little Lemon Logo" className="logo" />
        </Link>
        <Nav />
      </header>
    </>
  );
}

export default Header;
