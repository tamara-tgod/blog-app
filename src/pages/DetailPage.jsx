import { useParams } from "react-router";
import blogPosts from "../data/blogData";
import { Link } from "react-router";
import NotFound from "./NotFound";
import "../styles/Home.css"

function DetailPage() {
  const { id } = useParams();

  // find the blog post that matches the id from the url
  const post = blogPosts.find((post) => post.id === Number(id));

  console.log(post);
  return (
    <>
      {post ? (
        <div className="details">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <Link to={"/"} className="link">Back to Home</Link>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
}

export default DetailPage;
