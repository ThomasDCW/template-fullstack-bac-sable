import SBurger from "./style";
import { Link } from "react-router-dom";

export default function BurgerNav() {
  return (
    <SBurger>
      <div className="navbar_logo">Logo</div>
      <ul className="navbar_links">
        <li className="navbar_item">
          <Link className="navbar_link" to="/">
            Home
          </Link>
        </li>
        <li className="navbar_item">
          {" "}
          <Link className="navbar_link" to="/carousel">
            Carousel
          </Link>
        </li>
        <li className="navbar_item">
          {" "}
          <Link className="navbar_link" to="/card">
            Card-Gallery
          </Link>
        </li>
        <li className="navbar_item">
          {" "}
          <Link className="navbar_link" to="/apipokemon">
            PokeApi
          </Link>
        </li>
        <li className="navbar_item">
          {" "}
          <Link className="navbar_link" to="/P2">
            Projet 2
          </Link>
        </li>
        <li className="navbar_item">
          {" "}
          <Link className="navbar_link" to="/flipflap">
            FlipFlap Card
          </Link>
        </li>
        <li className="navbar_item">
          {" "}
          <Link className="navbar_link" to="/flags">
            FlagsApi
          </Link>
        </li>
      </ul>
      <button className="navbar_burger">
        <span className="burger-bar"></span>
      </button>
    </SBurger>
  );
}
