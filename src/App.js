import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header";
import Spaces from "./components/spaces";
import SpaceDetail from "./components/spaceDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BrowserRouter>
          <Switch>
            <Route path="/spaces/:id" component={SpaceDetail} />
            <Route path="/spaces" component={Spaces} />
            <Redirect from="/" exact to="/spaces" />
            <Redirect to="/not-found" />
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
