import React from 'react';
import './SpeakerBlock.css';
import {categories} from './../../../fixtures/categories';


export default class SpeakerBlock extends React.Component {
  render() {
    const speaker = this.props.speaker;
    return (
      <div className="schedule-speaker">
        <div className="schedule-speaker__head">
          <img
            className="schedule-speaker__img"
            alt={speaker.name}
            src={require(`./../../../fixtures/images/${speaker.img}`)}
          />
          <div className="schedule-speaker__head-info">
            <h3 className="schedule-speaker__name">{speaker.name}</h3>
            <div className="schedule-speaker__icons">
              <img
                alt="country"
                src={require(`./../../../fixtures/images/${speaker.countryImg}`)}
              />
              <button className="schedule-speaker__info-button"/>
              <div className="schedule-speaker__language">{speaker.language}</div>
            </div>
          </div>
          <p className="schedule-speaker__career">{speaker.position}@{speaker.company}</p>
          <p className="schedule-speaker__theme">{speaker.speech.theme}</p>
        </div>
      </div>
    );
  }
}


