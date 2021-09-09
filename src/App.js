import "./App.css";
import Nav from "./components/nav";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import Home from "./components/Home";
import Works from "./components/Works";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/footer";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Loader
        className="loader"
        type="Ball-Triangle"
        color="#006766"
        height={100}
        width={100}
        timeout={300}
      />
      <Nav />
      <Route exact path="/">
        <Redirect to="/components/Home" />
      </Route>
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route path="/components/Home" exact component={Home} />
          <Route path="/components/Works" component={Works} />
          <Route path="/components/Certificates" component={Certificates} />
          <Route path="/components/Contact" component={Contact} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
