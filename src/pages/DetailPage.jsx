import { useParams } from "react-router";
import blogPosts from "../data/blogData";
import { Link } from "react-router";
import NotFound from "./NotFound";
import "../styles/Home.css";

function DetailPage() {
  const { id } = useParams();

  // find the blog post that matches the id from the url
  const post = blogPosts.find((post) => post.id === Number(id));

  // find current post's index
  const currentIndex = blogPosts.findIndex((post) => post.id === Number(id));

  // calculate previous and next posts
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  if (!post) {
    return <NotFound />;
  }

  return (
    <>
      <div className="details">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </div>

      <div className="post-nav">
        {/* previous button */}
        {previousPost && <Link to={`/post/${previousPost.id}`}className="prev-btn">Previous</Link>}

        {/* next button */}
        {nextPost && <Link to={`/post/${nextPost.id}`} className="next-btn">Next</Link>}

      </div>
          <Link to={"/"} className="link">Back to Home</Link>
    </>
  );
}

export default DetailPage;
