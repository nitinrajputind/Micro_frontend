import React, { lazy, Suspense , useState, useEffect } from "react";
import Header from "./components/Header";
import { StylesProvider, createGenerateClassName} from "@material-ui/core/styles";
import {  Router, BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Progress from "./components/Progress";
import DashboardApp from "./components/DashboardApp";
import { createBrowserHistory } from "history";
// import MarketingApp from "./components/MarketingApp";
// import AuthApp from "./components/AuthApp";

const generateClassName = createGenerateClassName({
  productionPrefeix: "co",
});

const LazyMarketingApp = lazy(() => import("./components/MarketingApp"));
const LazyAuthApp = lazy(() => import("./components/AuthApp"));
const LazyDashboard = lazy(() => import("./components/DashboardApp"));


const history = createBrowserHistory()


export default function App() {
  const [isSignedIn , setIsSignedIn] = useState(false); 

  useEffect(()=>{
    if(isSignedIn){
      history.push('/dashboard');
    } else{
      history.push('/')
    }
  },[isSignedIn])
  return (
    <>
      <Router history={history}>
        <StylesProvider generateClassName={generateClassName}>
          <Header isSignedIn={isSignedIn} onSignOut={()=>setIsSignedIn(false)}/>
          <Suspense fallback={<Progress/>}>
            <Switch>
              <Route path={"/auth"}>
                <LazyAuthApp onSignIn={()=> setIsSignedIn(true)}/>
              </Route>
              <Route path={'/dashboard'}>
              { !isSignedIn && <Redirect to='/'/>}
                <LazyDashboard/>
              </Route>
              <Route path={"/"} component={LazyMarketingApp} />
            </Switch>
          </Suspense>
        </StylesProvider>
      </Router>
    </>
  );
}
