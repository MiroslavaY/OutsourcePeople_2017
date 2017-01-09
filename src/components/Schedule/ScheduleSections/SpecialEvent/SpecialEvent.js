import React from 'react';
import './SpecialEvent.css';


export default class SpecialEvent extends React.Component {
  render() {
    const events = this.props.schedule;
    return (
      <div>
        {
          events.map((el) => {
            return(
              <div className="special-event" key={el.time} style={{backgroundColor: el.color}}>
                <div>{el.time}</div>
                <img src={require(`./../../../../fixtures/images/${el.img}`)} />
                <div>{el.description}</div>
              </div>
            )
          })
        }
      </div>

    )
  }
}

