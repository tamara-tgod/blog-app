import { Link } from "react-router-dom";
import blogPosts from "../data/blogData";
import "../styles/Home.css"

function Home() {
  return (
    <>
    <h1>My Blog</h1>

    <div>
        {blogPosts.map(post => (
            <div key={post.id} className="post">  
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>    
            <Link to={`/post/${post.id}`} className="link">Read More</Link>
            </div>
        ))}
    </div>
    </>
  )
}

export default Home;
