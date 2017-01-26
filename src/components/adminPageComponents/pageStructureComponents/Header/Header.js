import React from 'react';
import './Header.css';
import {Link} from  'react-router';


export default class Header extends React.Component {
  render() {
    return (
      <header className="admin-header-wrapper">
        <nav className="admin-panel-header">
          <p className="admin-logo">
            Outsource People 2017
            <span className="admin-role">Admin</span>
          </p>
          <section className="admin-page-head-links">
            <Link className="admin_header-link" to="/admin"> Control panel</Link>
            <Link className="admin_header-link" to="/">Main page</Link>
          </section>
        </nav>
      </header>
    );
  }
}
