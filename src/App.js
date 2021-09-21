import "./App.css";
import Nav from "./components/nav";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

import Home from "./components/Home";
import Works from "./components/Works";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/footer";

function App() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="App">
      <Nav />

      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route path={"/components/Home"} component={Home}></Route>
          <Route path="/components/Works" component={Works} />
          <Route path="/components/Certificates" component={Certificates} />
          <Route path="/components/Contact" component={Contact} />
        </Switch>
      </AnimatePresence>
      <Redirect to="/components/Home" />
      <Footer />
    </div>
  );
}

export default App;
