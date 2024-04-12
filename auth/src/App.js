import React from "react";
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const genrateClassName = createGenerateClassName({
  productionPrefeix: "au",
});

export default function App({ history, onSignIn }) {
  return (
    <StylesProvider generateClassName={genrateClassName}>
      <Router history={history}>
        <Switch>
          <Route exact path="/auth/signin">
            <SignIn onSignIn={onSignIn} />
          </Route>
          <Route exact path="/auth/Signup">
            <SignUp onSignIn={onSignIn} />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
}
