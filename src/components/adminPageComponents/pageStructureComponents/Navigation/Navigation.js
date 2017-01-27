import React from 'react';
import './Navigation.css';
import NavigationTree from '../../helpersComponents/NavigationTree/NavigationTree';
import navigationData from './../../../../constants/adminNavigation';



export default class Navigation extends React.Component {
  render() {
    return (
      <aside className="admin-navigation-bar">
        <h3>Navigation</h3>
        <NavigationTree
          treeData={navigationData}
        />
      </aside>
    );
  }
}
