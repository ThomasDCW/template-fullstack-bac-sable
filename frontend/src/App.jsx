import { Reset } from "styled-reset";
import { Route, Routes } from "react-router-dom";
import Homepage from "@components/Homepage";
import Navbar from "@components/Navbar";
import Carousel from "@components/Carousel";
import Card from "@components/Card";
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
          <Route path="/card" element={<Card />} />
        </Routes>
      </Globalstyle>
    </div>
  );
}

export default App;
