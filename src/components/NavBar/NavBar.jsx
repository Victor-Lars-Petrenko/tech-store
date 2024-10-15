import { Link } from "react-router-dom";
import css from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={css.header}>
      <nav className={css.navBar}>
        <Link to="/" className={css.link}></Link>
      </nav>
    </header>
  );
};

export default NavBar;
