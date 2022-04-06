import "./header.css";

//Exporting the Header function
export default function Header() {
  return (
    <div className="header">
      <div className="Title">
        <span>Write</span>
      </div>

      {/* Background Image for Header */}
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/6357/coffee-cup-desk-pen.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
    </div>
  );
}

