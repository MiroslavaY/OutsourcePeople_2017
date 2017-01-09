import React from 'react';
import Slider from '../helpersComponents/Slider/Slider';
import {allFeedbacks} from './../../fixtures/feedbacks';


export default class ParticipantsFeedbacks extends React.Component {

  render() {
    return (
      <div className="participants-feedbacks">
        <Slider
          title={'Отзыв участника'}
          values={allFeedbacks}
        />
      </div>
    );
  }
}

