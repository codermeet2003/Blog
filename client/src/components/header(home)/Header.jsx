import "./header.css";

//Exporting the Header function
export default function Header() {
  return (
    <div className="header">
      <div className="Title">
        <span>Blog</span>
      </div>
      
      {/* Background Image for Header */}
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?cs=srgb&dl=pexels-simon-berger-1323550.jpg&fm=jpg"
        alt=""
      />
    </div>
  );
}

