import Homepage from "@components/Homepage";
import Globalstyle from "./style";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Globalstyle>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/articles/:id" element={<Homepage />} />
        </Routes>
      </Globalstyle>
    </div>
  );
}

export default App;
