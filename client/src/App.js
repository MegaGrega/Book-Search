import React from "react";
import Search from "./pages/Search"
import Saved from "./pages/Saved"
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    <Router>
      <div>
        <Nav></Nav>
        <Switch>
          <Route exact path="/">
          <Search></Search>
          </Route>
          <Route exact path="/saved">
          <Saved></Saved>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
