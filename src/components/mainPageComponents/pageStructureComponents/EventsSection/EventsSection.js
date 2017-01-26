import React from 'react';
import './EventsSection.css';

const events = [
  {
    event: 'Экспертные столы',
    img: 'experts-table.png',
  },
  {
    event: 'Международные докладчики',
    img: 'globe.png',
  },
  {
    event: 'Продажи и маркетинг',
    img: 'sales-and-marketing.png',
  },
  {
    event: 'Доклады для СЕО',
    img: 'ceo.png',
  },
  {
    event: 'РМ, юристы, HR',
    img: 'pm-and-lawyers.png',
  },
  {
    event: 'Развлекательная программа',
    img: 'entertainment.png',
  },
];


export default class EventsSection extends React.Component {

  render() {
    const expectedEvents = events;
    return (
      <section className="expected-event-section">
        <div className="expected-events-section__row">
          {
            expectedEvents.map((event) => {
              return (
                <figure key={event.event} className="expected-event">
                  <img
                    className="expected-event__image"
                    src={require(`./../../../../images/${event.img}`)}
                    alt={event}
                  />
                  <figcaption className="expected-event__name">
                    {event.event}
                  </figcaption>
                </figure>)
            })
          }
        </div>
      </section>
    );
  }
}
