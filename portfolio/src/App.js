import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Homepage from "./pages/homepage"

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  </Router>
);

export default App;
