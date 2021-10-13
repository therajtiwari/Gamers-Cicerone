import React from "react";
//components and pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import { Switch, Route } from "react-router-dom";
import PageNotFound from "./pages/404";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>

      <GlobalStyles />
      <Switch>
        <Route exact path={["/", "/game/:id"]}>
          <Home />
        </Route>
        <Route path="">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
