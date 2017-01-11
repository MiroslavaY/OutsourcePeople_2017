import React from 'react';
import Slider from './../../helpersComponents/Slider/Slider';
import {allFeedbacks} from './../../../fixtures/feedbacks';


export default class SpeakersFeedbacks extends React.Component {

  render() {
    return (
      <div className="speakers-feedbacks">
        <Slider
          title={'Отзыв спикера'}
          values={allFeedbacks}
        />
      </div>
    );
  }
}
