import "./App.css";
import { BrowserRouter as BrowserRout, Routes, Route } from "react-router";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
import NotFound from "./pages/NotFound";
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
      </BrowserRout>
    </>
  );
}

export default App;
