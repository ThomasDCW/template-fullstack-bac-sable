import { Link } from "react-router-dom";
import mrvlogo from "../../../assets/logoP2/logomarvelP2.png";
import swlogo from "../../../assets/logoP2/logoswP2.png";
import mangalogo from "../../../assets/logoP2/logomangaP2.png";
import dclogo from "../../../assets/logoP2/logodcP2.png";
import otherslogo from "../../../assets/logoP2/logoothersP2.png";

import SP2homepage from "./style";

export default function P2homepage() {
  return (
    <SP2homepage>
      <nav className="navcontainer">
        <ul>
          <Link to="/P2/marvel">
            <li className="marvel">
              <img src={mrvlogo} alt="marv" />
            </li>
          </Link>
          <Link to="/P2/starwars">
            <li className="starwars">
              <img src={swlogo} alt="sw" />
            </li>
          </Link>
          <Link to="/P2/manga">
            <li className="manga">
              <img src={mangalogo} alt="sw" />
            </li>
          </Link>
          <Link to="/P2/dc">
            <li className="dccomics">
              {" "}
              <img src={dclogo} alt="dc" />
            </li>
          </Link>
          <Link to="/P2/others">
            <li className="others">
              <img src={otherslogo} alt="others" />
            </li>
          </Link>
        </ul>
      </nav>
    </SP2homepage>
  );
}
