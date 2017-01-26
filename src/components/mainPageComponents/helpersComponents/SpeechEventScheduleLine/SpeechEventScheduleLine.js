import React from 'react';
import './SpeechEventScheduleLine.css';
import SpeakerBlock from './../../helpersComponents/SpeakerBlock/SpeakerBlock';


export default class SpeechEventScheduleLine extends React.Component {
  render() {
    const event = this.props.event;
    return (
      <div className="schedule-speech-event">
        <h3 className="schedule-speech-event__time">{event.time}</h3>
        <div className="schedule-speech-event__all-speakers">
          {
            event.speakers.map((speaker, i) => <SpeakerBlock key={i} speaker={speaker}/>)
          }
        </div>
      </div>
    );
  }
}


