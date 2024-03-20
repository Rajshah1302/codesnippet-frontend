import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forms from "./components/Forms";
import Navbar from "./components/Navbar";
import Display from "./components/Display";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Forms />} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;