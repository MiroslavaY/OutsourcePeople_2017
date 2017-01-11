import React from 'react';
import './OrganizersSection.css';


export default class OrganizersSection extends React.Component {

  render() {
    return (
      <div className="organizers--zone-of-responsibility">
        <h3 className="organizers--zone-title">{this.props.title}</h3>
        <div className="organizers--decorative-block"/>
        <div className="organizers--zone-of-responsibility--content">
          {this.props.children}
        </div>
      </div>
    );
  }
}


