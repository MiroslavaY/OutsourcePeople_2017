import React from 'react';
import './EventScheduleLine.css';


export default class EventScheduleLine extends React.Component {
  render() {
    const event = this.props.event;
    return (
      <div className="special-event" style={{backgroundColor: event.color}}>
        <div className="special-event__time">{event.time}</div>
        <img
          className="special-event__img"
          alt="Event"
          src={require(`./../../../../fixtures/images/${event.img}`)}
        />
        <div className="special-even__title">{event.description}</div>
      </div>
    )
  }
}

