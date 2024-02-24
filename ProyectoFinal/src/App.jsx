import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PlaylistProvider } from "./context/playlistContext";
import Home from "../src/views/Home";
import Playlist from "./views/Playlist";

export default function App() {
  return (
    <Router>
      <PlaylistProvider>  
        <Routes>
          {/* dentro de routes solamente van las rutas */}
          <Route path="/" element={<Home />} />
          <Route path="/playlist" element={<Playlist />} />
          {/* <Route path="/producto/:id" element={<DetailProduct />} /> */}
        </Routes>
      </PlaylistProvider>
    </Router>
  )
}
