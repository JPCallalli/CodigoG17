import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sign from "./views/Sign";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Sign />} />
        </Routes>
      </Router>
    </>
  );
}
