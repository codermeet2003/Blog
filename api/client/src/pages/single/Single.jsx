import "./single.css";
import SinglePost from "../../components/singlePost/SinglePost";

//Exporting the Single function
export default function Single() {
  // Returning a single post
  return (
    <div className="single">
      <SinglePost/>
    </div>
  );
}
