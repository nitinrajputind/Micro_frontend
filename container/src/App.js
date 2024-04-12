import React, { lazy, Suspense , useState } from "react";
import Header from "./components/Header";
import { StylesProvider, createGenerateClassName} from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Progress from "./components/Progress";
// import MarketingApp from "./components/MarketingApp";
// import AuthApp from "./components/AuthApp";

const generateClassName = createGenerateClassName({
  productionPrefeix: "co",
});

const LazyMarketingApp = lazy(() => import("./components/MarketingApp"));
const LazyAuthApp = lazy(() => import("./components/AuthApp"));

export default function App() {
  const [isSignedIn , setIsSignedIn] = useState(false); 
  return (
    <>
      <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
          <Header isSignedIn={isSignedIn} onSignOut={()=>setIsSignedIn(false)}/>
          <Suspense fallback={<Progress/>}>
            <Switch>
              <Route path={"/auth"}>
                <LazyAuthApp onSignIn={()=> setIsSignedIn(true)}/>
              </Route>
              <Route path={"/"} component={LazyMarketingApp} />
            </Switch>
          </Suspense>
        </StylesProvider>
      </BrowserRouter>
    </>
  );
}
