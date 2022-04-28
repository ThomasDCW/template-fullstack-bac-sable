import { Link } from "react-router-dom";
import Homebutton from "../Homebutton";
import SNavbar from "./style";

export default function Navbar() {
  return (
    <SNavbar>
      <li>
        <Homebutton />
      </li>
      <Link to="/carousel">
        <li>
          <button type="button" className="button">
            Carousel
          </button>
        </li>
      </Link>
      <Link to="/card">
        <li>
          <button type="button" className="button">
            Card-Gallery
          </button>
        </li>
      </Link>
    </SNavbar>
  );
}
