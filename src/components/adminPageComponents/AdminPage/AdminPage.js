import React from 'react';
import './AdminPage.css';
import Header from './../pageStructureComponents/Header/Header';
import Navigation from './../pageStructureComponents/Navigation/Navigation';
import ManagePanel  from  './../pageStructureComponents/ManagePanel/ManagePanel';


export default class AdminPage extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="admin-page-content">
          <Navigation/>
          {React.cloneElement(this.props.children, {paramsEntity: this.props.params.entity})}
        </div>
      </div>
    );
  }
}
