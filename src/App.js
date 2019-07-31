import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import Root from "./components/Root";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import Shop from "./components/Shop";

function App() {
  return (
    <Root>
      <BrowserRouter>
        <Switch>
          <Route path="/about-us" component={AboutUs} />
          <Route path="/" component={HomePage} exact />
          <Route path="/shop" component={Shop} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </Root>
  );
}

export default App;
