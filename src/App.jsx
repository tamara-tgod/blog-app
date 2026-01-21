import "./App.css";
import { BrowserRouter as BrowserRout, Routes, Route } from "react-router";
import Home from "./assets/pages/Home";
import DetailPage from "./assets/pages/DetailPage";
import NotFound from "./assets/pages/NotFound";
import blogData from "./data/blogData"


function App() {
  return (
    <>
      <BrowserRout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<DetailPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <h2>Helloo</h2>
      </BrowserRout>
    </>
  );
}

export default App;
