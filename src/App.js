import { Routes, Route } from "react-router-dom";

// components
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Bookmark from "./pages/Bookmark/Bookmark";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/articles/*" element={<Detail />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
