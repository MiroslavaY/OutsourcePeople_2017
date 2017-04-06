import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import MainPage from './../components/mainPageComponents/MainPage/MainPage';
import AdminPage from './../components/adminPageComponents/AdminPage/AdminPage';
import ManagePanel from './../components/adminPageComponents/pageStructureComponents/ManagePanel/ManagePanel';


const APPLICATION_ROUTES = (
  <Router history={browserHistory}>
    <Route path="/" component={MainPage}/>
    <Route path="/admin" component={AdminPage}>
      <IndexRedirect to="/admin/speakers"/>
      <Route path="/admin/:entity" component={ManagePanel}/>
      <Route path="/admin/:entity/edit" component={ManagePanel}/>
    </Route>
  </Router>
);

export default APPLICATION_ROUTES;
