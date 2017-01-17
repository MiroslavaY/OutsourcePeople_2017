import React from 'react';
import './SpecialEvent.css';


export default class SpecialEvent extends React.Component {
  render() {
    const events = this.props.schedule;
    return (
      <div>
        {
          events.map((el) => {
            return (
              <div className="special-event" key={el.time} style={{backgroundColor: el.color}}>
                <div>{el.time}</div>
                <img
                  className="special-event__img"
                  alt="Event"
                  src={require(`./../../../../fixtures/images/${el.img}`)}
                />
                <div className="special-even__title">{el.description}</div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

