import React from 'react';
import './OrganizersCard.css';


export default class OrganizersCard extends React.Component {
  render() {
    const person = this.props.person;
    return (
      <div className="organizer-card">
        <div className="organizer-card__header">
          <img
            className="organizer-card__img"
            alt={person.name}
            src={require(`./../../../../images/${person.img}`)}
          />
          <div className="organizer-card__person-info">
            <h3 className="organizer-card__person-info__name">{person.name}</h3>
            <p className="organizer-card__person-info__phone">{person.phone}</p>
          </div>
        </div>
        <div className="organizer-card__person-contacts">
          <a className="organizer-card__person-contacts__email">{person.email}</a><br/>
          <span>skype: {person.skype}</span>
        </div>
      </div>
    );
  }
}


