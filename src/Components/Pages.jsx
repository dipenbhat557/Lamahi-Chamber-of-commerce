import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Homepage";

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
