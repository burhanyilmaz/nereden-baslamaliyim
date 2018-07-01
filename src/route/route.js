import React from 'react';
import { Route , BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { Home } from '../modules/Home/index';
import 'material-components-web/dist/material-components-web.min.css';

export default(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={Home} />
        </BrowserRouter>
    </Provider>
);