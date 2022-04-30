import { Reset } from "styled-reset";
import { Route, Routes } from "react-router-dom";
import Homepage from "@components/Homepage";
import Navbar from "@components/Navbar";
import Carousel from "@components/Carousel";
import Gallery from "@components/Gallery";
// import Apipokemon from "@components/Apipokemon";
import Globalstyle from "./style";

function App() {
  return (
    <div>
      <Globalstyle>
        <Reset />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/card" element={<Gallery />} />
          {/* <Route path="/apipokemon" element={<Apipokemon />} /> */}
        </Routes>
      </Globalstyle>
    </div>
  );
}

export default App;
