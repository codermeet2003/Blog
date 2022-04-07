//Importing the Post function from the post folder in the components
import Post from "../post/Post";
import "./posts.css";

//Exporting the Posts function
export default function Posts({ posts }) {
  return (

    // Showing all the posts in the database 
    <div className="posts">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}
