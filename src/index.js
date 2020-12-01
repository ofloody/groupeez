import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './index.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import reportWebVitals from './reportWebVitals';
import Home from "./pages/Home";
import Search from "./pages/Search";
import Details from "./pages/Details";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path={["/profile", "/profile/{profileId}"]} component={Profile} />
        <Route path="/search" component={Search} />
        <Route path="/details/{detailsId}" component={Details} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
