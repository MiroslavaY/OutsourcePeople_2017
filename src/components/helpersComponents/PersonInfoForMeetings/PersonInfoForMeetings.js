import React from 'react';
import './PersonInfoForMeetings.css';


export default class PersonInfoForMeetings extends React.Component {
  render() {
    const person = this.props.personInfo;
    return (
      <figure className="meeting-person-info">
        <img
          alt={person.name}
          className="meeting-person-info__img"
          src={require(`./../../../fixtures/images/${person.img}`)}
        />
        <figcaption className="meeting-person-description">
          <h3>{person.name}</h3>
          <p className="meeting-person-description__career">{person.position}<br/>@{person.company}</p>
          <p>
            <img alt="Country" src={require('./../../../fixtures/images/Country.jpg')}/>
          </p>
          {person.table ? <span>стол <b>{person.table}</b></span> : null}
        </figcaption>
      </figure>
    );
  }
}
