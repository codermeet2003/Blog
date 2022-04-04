import "./about.css";

export default function About() {
  return (
    <>
    <div className="header">
      <div className="Title">
        <span>About Us</span>
      </div>
      <img
        className="headerImg"
        src="https://easy-groceries.de/wp-content/uploads/2018/10/about-us-background-images-for-website-9-1.jpg"
        alt=""
      />
    </div>
        <div className="about">
            <div>
                <h2>Sachin Dapkara</h2>
                <label className="roll">LCS2021001</label>
                <h4>Contribution - </h4>
                <label className="bf">BackEnd</label>
                <label className="part">Pages</label>
            </div>
            <div>
                <h2>Meet Savla</h2>
                <label className="roll">LCS2021010</label>
                <h4>Contribution - </h4>
                <label className="bf">BackEnd</label>
                <label className="part">Context and App.js</label>
            </div>
            <div>
                <h2>Vishal Kumar</h2>
                <label className="roll">LCS2021013</label>
                <h4>Contribution - </h4>
                <label className="bf">BackEnd</label>
                <label className="part">Models and Index.js</label>
            </div>
            <div>
                <h2>Ashutosh Rana</h2>
                <label className="roll">LCS2021024</label>
                <h4>Contribution - </h4>
                <label className="bf">BackEnd</label>
                <label className="part">Routes</label>
            </div>
            <div>
                <h2>Naga Phani Teja</h2>
                <label className="roll">LCS2021038</label>
                <h4>Contribution - </h4>
                <label className="bf">BackEnd</label>
                <label className="part">Components</label>
            </div>
            <div>
                <h2>AB Madhava</h2>
                <label className="roll">LCS2021046</label>
                <h4>Contribution - </h4>
                <label className="bf">FrontEnd</label>
                <label className="part">CSS</label>
            </div>
            </div>
            <div className="last">
            <h2>Naveen Uikey</h2>
            <label className="roll">LCS2021053</label>
            <h4>Contribution - </h4>
            <label className="bf">FrontEnd</label>
            <label className="part">CSS</label>
            </div>
            
    </>
  );
}
