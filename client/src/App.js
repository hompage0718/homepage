import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";

import Home from "./components/views/Home";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
