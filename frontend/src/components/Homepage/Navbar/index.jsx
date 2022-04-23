import { Link } from "react-router-dom";
import SNavbar from "./style";

export default function Navbar() {
  return (
    <SNavbar>
      <Link to={"/articles/1"}>
        <li>1</li>
      </Link>
      <Link to={"/articles/2"}>
        <li>2</li>
      </Link>
      <Link to={"/articles/3"}>
        <li>3</li>
      </Link>
      <Link to={"/articles/4"}>
        <li>4</li>
      </Link>
    </SNavbar>
  );
}
