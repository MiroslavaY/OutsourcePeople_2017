import React from 'react';
import './ClosedEventsScheduleLine.css';
import Button from './../Button/Button';


export default class ClosedEventsScheduleLine extends React.Component {
  render() {
    const event = this.props.event;
    return (
      <div className="schedule-closed-event">
        <div className="schedule-closed-event__time">{event.time}</div>
        <p className="schedule-closed-event__description">
          Закрытая встреча с <br/>
          {event.person.name}
        </p>
        <Button
          text={'Купить VIP билет '}
        />
      </div>
    )
  }
}

