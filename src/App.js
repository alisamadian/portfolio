import "./App.css";
import Nav from "./components/nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Ali from "./components/Ali";
import Jalal from "./components/Jalal";
import About from "./components/About";
import Footer from "./components/footer";


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/components/Home" exact component={Home} />
          <Route path="/components/Ali" component={Ali} />
          <Route path="/components/Jalal" component={Jalal} />
          <Route path="/components/About" component={About} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
