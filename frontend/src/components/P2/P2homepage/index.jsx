import { Link } from "react-router-dom";
import SP2homepage from "./style";

export default function P2homepage() {
  return (
    <SP2homepage>
      <nav className="navcontainer">
        <ul>
          <Link to="/P2/marvel">
            <li className="marvel"></li>
          </Link>
          <Link to="/P2/starwars">
            <li className="starwars"></li>
          </Link>
          <Link to="/P2/manga">
            <li className="manga"></li>
          </Link>
          <Link to="/P2/dc">
            <li className="dccomics"></li>
          </Link>
          <Link to="/P2/others">
            <li className="others"></li>
          </Link>
        </ul>
      </nav>
    </SP2homepage>
  );
}
