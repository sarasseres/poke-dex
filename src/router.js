// main
/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core';

import theme from './assets/theme';

// pages
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';

import Detail from './pages/Detail';

// assets

const Router = () => {
  const history = useHistory();
  const location = useLocation();
  const [page, setPage] = useState(null);

  useEffect(() => {
    if (location) {
      if (location.pathname === '/') {
        setPage(0);
      } else if (location.pathname === '/pokedex') {
        setPage(1);
      } else {
        setPage(2);
      }
    }
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pokedex" component={Pokedex} />
        <Route exact path="/detail/:id" component={Detail} />
      </Switch>
    </ThemeProvider>
  );
};

export default Router;
