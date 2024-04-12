import React from "react";
import { BrowserRouter, Route, Switch , Router } from "react-router-dom";
import { StylesProvider , createGenerateClassName } from "@material-ui/core/styles";
import Pricing from "./components/Pricing";
import Landing from "./components/Landing";

const genrateClassName = createGenerateClassName({
  productionPrefeix : 'ma'
})

export default function App({history}) {
  return (
    <StylesProvider generateClassName={genrateClassName}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/pricing" component={Pricing} />
        </Switch>
      </Router>
    </StylesProvider>
  );
}
