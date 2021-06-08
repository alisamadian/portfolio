import "./App.css";
import Nav from "./components/nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import Works from "./components/Works";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Redirect to="/components/Home" />
        </Route>
        <Nav />
        <Switch>
          <Route path="/components/Home" exact component={Home} />
          <Route path="/components/Works" component={Works} />
          <Route path="/components/Certificates" component={Certificates} />
          <Route path="/components/Contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
