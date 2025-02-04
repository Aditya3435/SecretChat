import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import AuthState from "./context/authContext/authState";
import MessageState from "./context/messageContext/messageState";
import Profile from "./components/pages/Profile";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import UserValidity from "./components/pages/UserValidity";
import Messages from "./components/messages/Messages";
import PrivateRoutes from "./components/privateRoutes/PrivateRoutes";
import Home from "./components/pages/Home";

const App = () => {
  return (
    <AuthState>
      <MessageState>
        <div className="App">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <PrivateRoutes exact path="/profile" component={Profile} />
            <PrivateRoutes exact path="/messages" component={Messages} />
            <Route exact path="/:username" component={UserValidity} />
          </Switch>
        </div>
      </MessageState>
    </AuthState>
  );
};

export default App;
