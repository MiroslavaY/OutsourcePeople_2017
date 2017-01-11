import React from 'react';
import './PersonInfoForMeetings.css';

export default class PersonInfoForMeetings extends React.Component {
  render() {
    const person = this.props.personInfo;
    return (
      <figure className="meeting-person--info-block">
        <img
          alt={person.name}
          className="meeting-person--img"
          src={require(`./../../../fixtures/images/${person.img}`)}
        />
        <figcaption className="meeting-person--description">
          <h3 className="meeting-person--name">{person.name}</h3>
          <p className="meeting-person--career">{person.position}<br/>@{person.company}</p>
          <p className="meeting-person--country">
            <img alt="Country" src={require('./../../../fixtures/images/Country.jpg')}/>
          </p>
          {person.table ? <span>стол <b>{person.table}</b></span> : null}
        </figcaption>
      </figure>
    );
  }
}
