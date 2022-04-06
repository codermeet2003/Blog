import "./post.css";
import { Link } from "react-router-dom";

//Exporting the Post function and fetching data from database through API
export default function Post({ post }) {

  //Database storing Images
  const PF = "http://localhost:8082/images/";
  return (
    <div className="post">

      {/* Showing image for a particular post */}
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">

        {/* Showing categories for a particular post */}
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>

        {/* On clicking it redirects to the post */}
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>

        {/* Showing the post date and converting it to a suitable format */}
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>

      {/* Showing Post description */}
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
