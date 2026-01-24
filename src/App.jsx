import "./App.css";
import { BrowserRouter as BrowserRout, Routes, Route } from "react-router";
import { lazy, Suspense } from "react";
import ErrorBoundaryWrapper from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";

const Home = lazy(() => import ('./pages/Home'))
const DetailPage = lazy(() => import ('./pages/DetailPage'))
const About = lazy(() => import ('./pages/About'))
const NotFound = lazy(() => import ('./pages/NotFound'))


function App() {
  return (
    <>
      <BrowserRout>
       <Navbar />
        <ErrorBoundaryWrapper>
          <Suspense fallback={<Loading />}>     
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<DetailPage />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/about" element={<About />} />
          </Routes>
          </Suspense>
        </ErrorBoundaryWrapper>
      </BrowserRout>
    </>
  );
}

export default App;
