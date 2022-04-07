import { useEffect, useState } from "react";
import Header from "../../components/header(home)/Header";
// import Footer from "../../components/footer/Footer";
import Posts from "../../components/posts/Posts";
import "./home.css";
import {axiosInstance} from "../../config";
import { useLocation } from "react-router";

//Exporting the Home function
export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const port = process.env.PORT || 8082;

  //Fetching the posts from the database to the home 
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosInstance.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>

      {/* Displaying the header, and the posts */}
      <Header />
      <div className="home">
        <Posts posts={posts} />
      </div>
    </>
  );
}
