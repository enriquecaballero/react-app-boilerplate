import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import HelloWorld from "./HelloWorld";

export default function () {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={HelloWorld} />
      </Switch>
    </HashRouter>
  );
}
