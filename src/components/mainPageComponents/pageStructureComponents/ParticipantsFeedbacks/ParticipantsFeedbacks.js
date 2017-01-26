import React from 'react';
import './ParticipantsFeedbacks.css';
import Slider from './../../helpersComponents/Slider/Slider';
import {allFeedbacks} from './../../../../fixtures/feedbacks';


export default class ParticipantsFeedbacks extends React.Component {

  render() {
    return (
      <section className="participants-feedbacks">
        <Slider
          title={'Отзыв участника'}
          values={allFeedbacks}
        />
      </section>
    );
  }
}

