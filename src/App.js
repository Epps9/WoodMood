import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { store } from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { Watches } from './components/views/Watches/Watches';
import { Bracelets } from './components/views/Bracelets/Bracelets';
import { ProductView } from './components/views/ProductView/ProductView';



const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
  },
});

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/watches' component={Watches} />
              <Route exact path='/bracelets' component={Bracelets} />
              <Route exact path='/productview' component={ProductView} />
              <Route exact path='/watches/:id' component={ProductView} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };
