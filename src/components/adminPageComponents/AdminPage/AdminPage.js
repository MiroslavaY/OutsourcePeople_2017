import React from 'react';
import './AdminPage.css';
import Header from './../pageStructureComponents/Header/Header';
import Navigation from './../pageStructureComponents/Navigation/Navigation';


export default class AdminPage extends React.Component {

  componentWillMount(){
    console.log('mounted');
  }
  componentWillUnmount(){
    console.log('will unmounted');
  }

  render() {
    return (
      <div>
       <Header/>
        <div className="admin-page-content">
          <Navigation/>
        </div>
      </div>
    );
  }
}
