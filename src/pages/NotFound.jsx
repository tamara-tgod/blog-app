import { Link } from "react-router";

function NotFound() {
  return (
    <>
      <h2>Oops this page is not available</h2>
      <Link to={"/"}>Go Back Home</Link>
    </>
  );
}

export default NotFound;
