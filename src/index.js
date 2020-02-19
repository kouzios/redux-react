import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/common.scss';

import Homepage from './views/Homepage';
import Header from './components/Header';
import NotFound from './views/NotFound';

import store from './redux/store';

//Return with header if requested
const withHeader = (Component) => (props) => (
    <>
        <Header />
        <Component {...props} />
    </>
);

const routers =  (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={withHeader(Homepage)} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    </Provider>
);


ReactDOM.render(routers, document.getElementById('root'));

serviceWorker.unregister();
