import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import MainPage from './../components/mainPageComponents/MainPage/MainPage';
import AdminPage from './../components/adminPageComponents/AdminPage/AdminPage';


const APPLICATION_ROUTES = (
  <Router history={browserHistory}>
    <Route path="/" component={MainPage}/>
    <Route path="/admin" component={AdminPage}/>
  </Router>
);

export default APPLICATION_ROUTES;
