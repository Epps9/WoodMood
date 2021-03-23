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
import { WatchView } from './components/views/WatchView/WatchView';
import { BraceletView } from './components/views/BraceletView/BraceletView';
import { Cart } from './components/views/Cart/Cart';
import { Order } from './components/views/Order/Order';
import {PromoView} from './components/views/PromoView/PromoView';




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
              <Route exact path='/watches/:id' component={WatchView} />
              <Route exact path='/bracelets/:id' component={BraceletView} />
              <Route exact path='/promo/:id' component={PromoView} />
              <Route exact path='/cart' component={Cart} />
              <Route exact path='/order' component={Order} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };
