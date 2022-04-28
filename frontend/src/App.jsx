import Homepage from "@components/Homepage";
import Homebutton from "@components/Homepage/Homebutton";
import Navbar from "@components/Homepage/Navbar";
import Carousel from "@components/Carousel";
import { Route, Routes } from "react-router-dom";
import Globalstyle from "./style";
import { Reset } from "styled-reset";

function App() {
  return (
    <div>
      <Globalstyle>
        <Reset />
        <Homebutton />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/carousel" element={<Carousel />} />
        </Routes>
      </Globalstyle>
    </div>
  );
}

export default App;
