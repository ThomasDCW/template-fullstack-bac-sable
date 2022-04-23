import Homepage from "@components/Homepage";
import { Route, Routes } from "react-router-dom";
import Globalstyle from "./style";

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
