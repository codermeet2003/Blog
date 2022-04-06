// Importing all the components
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/Topbar";
import Footer from "./components/footer/Footer";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

//Creating an app
function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Switch>

        {/* Giving path to various pages */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/about">{user ? <About /> : <About />}</Route>
        <Route path="/contact">{user ? <Contact /> : <Contact />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
