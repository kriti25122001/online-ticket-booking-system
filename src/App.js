import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthScreen from "./components/AuthScreen";
import SignUpScreen from "./components/SignUpScreen";
import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./LoginScreen";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path={"/"} exact component={AuthScreen} />
          <Route path={"/signup"} component={SignUpScreen} />
          <Route path={"/login"} component={LoginScreen} />
          <Route path={"/home"} component={HomeScreen} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
