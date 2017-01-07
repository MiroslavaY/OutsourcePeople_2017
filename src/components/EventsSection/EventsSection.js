import React from 'react';
import './EventsSection.css';


export default class EventsSection extends React.Component {

  render() {
    return (
      <div className="events-section">
        <div className="events-row">
          <figure className="event">
            <img className="event--image" src={require('./../../fixtures/images/12.jpg')}  />
            <figcaption className="even--name">
              Экспертные столы
            </figcaption>
          </figure>
          <figure className="event">
            <img className="event--image" src={require('./../../fixtures/images/12.jpg')}  />
            <figcaption className="even--name">
              Международные докладчики
            </figcaption>
          </figure>
          <figure className="event">
            <img className="event--image" src={require('./../../fixtures/images/12.jpg')}  />
            <figcaption className="even--name">
              Продажи и маркетинг
            </figcaption>
          </figure>
        </div>
       <div className="events-row">
         <figure className="event">
           <img className="event--image" src={require('./../../fixtures/images/12.jpg')}  />
           <figcaption className="even--name">
             Доклады для СЕО
           </figcaption>
         </figure>
         <figure className="event">
           <img className="event--image" src={require('./../../fixtures/images/12.jpg')}  />
           <figcaption className="even--name">
             РМ, юристы HR
           </figcaption>
         </figure>
         <figure className="event">
           <img className="event--image" src={require('./../../fixtures/images/12.jpg')}  />
           <figcaption className="even--name">
             Развлекательная программа
           </figcaption>
         </figure>
       </div>
      </div>
    );
  }
}
