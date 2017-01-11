import React from 'react';
import './EventsSection.css';

const events = [
  'Экспертные столы',
  'Международные докладчики',
  'Продажи и маркетинг',
  'Доклады для СЕО',
  'РМ, юристы HR',
  'Развлекательная программа',
];


export default class EventsSection extends React.Component {

  render() {
    const expectedEvents = events;
    return (
      <div className="expected-event-section">
        <div className="expected-events-row">
          {
            expectedEvents.map((event) => {
              return(
                <figure key={event} className="expected-event">
                  <img
                    className="expected-event--image"
                    src={require('./../../../images/experts-table.png')}
                    alt={event}
                  />
                  <figcaption className="expected-event--name">
                    {event}
                  </figcaption>
                </figure>)
            })
          }
       </div>
      </div>
    );
  }
}
