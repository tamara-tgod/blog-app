import { BrowserRouter, Routes, Route, Link } from "react-router";
import About from "../pages/About";
import "../App.css"

function Navbar() {
  return (
    <div className="navbar">
      <h2 className="logo">Tamara</h2>
      <nav>
        <Link to={"/"} className="nav-link">Home</Link>
        <Link to={"/about"} className="nav-link">About Us</Link>
      </nav>
    </div>
  );
}

export default Navbar;
