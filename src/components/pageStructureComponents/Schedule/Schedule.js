import React from 'react';
import './Schedule.css';
import Title from './../../helpersComponents/SectionTitle/SectionTitle';
import CategoriesLabels from './../../helpersComponents/CategoriesLabels/CategoriesLabels';
import SpecialEvents from './../../helpersComponents/ScheduleSections/SpecialEvent/SpecialEvent';
import ScheduleContainer from './../../helpersComponents/ScheduleContainer/ScheduleContainer';
import CloseEvent from './../../helpersComponents/ClosedEventScheduleLine/ClosedEventsScheduleLine';
import SpeechEvent from './../../helpersComponents/SpeechEventScheduleLine/SpeechEventScheduleLine';
import {categories} from './../../../fixtures/categories';
import {schedule} from './../../../fixtures/schedule';
import {closedMeetingsParticipants} from './../../../fixtures/meetingsParticipants';
import {scheduleSpeakers} from './../../../fixtures/scheduleSpeakers';



export default class Schedule extends React.Component {
  render() {
    const testCloseEvent = closedMeetingsParticipants[0];
    return (
      <div className="schedule-section">
        <Title
          text={'программа'}
        />
        <div className="schedule">
          <ScheduleContainer>
            <h3 className="schedule__day-title"> 1-й день</h3>
            <CategoriesLabels
              categories={[categories[0], categories[1]]}
            />
            <SpecialEvents
              schedule={schedule}
            />
            <SpeechEvent event={scheduleSpeakers[0]}/>
            <CloseEvent event={testCloseEvent}/>
            <SpecialEvents
              schedule={schedule}
            />
          </ScheduleContainer>
          <ScheduleContainer>
            <h3 className="schedule__day-title"> 2-й день</h3>
            <CategoriesLabels
              categories={[categories[0], categories[1]]}
            />
            <SpecialEvents
              schedule={schedule}
            />
            <SpeechEvent event={scheduleSpeakers[0]}/>
          </ScheduleContainer>
        </div>
      </div>
    );
  }
}


