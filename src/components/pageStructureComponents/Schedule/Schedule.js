import React from 'react';
import './Schedule.css';
import Title from './../../helpersComponents/SectionTitle/SectionTitle';
import CategoriesLabels from './../../helpersComponents/CategoriesLabels/CategoriesLabels';
import Event from '../../helpersComponents/EventScheduleLine/EventScheduleLine';
import ScheduleContainer from './../../helpersComponents/ScheduleContainer/ScheduleContainer';
import CloseEvent from './../../helpersComponents/ClosedEventScheduleLine/ClosedEventsScheduleLine';
import SpeechEvent from './../../helpersComponents/SpeechEventScheduleLine/SpeechEventScheduleLine';
import {categories} from './../../../fixtures/categories';
import {scheduleLines} from './../../../fixtures/schedule';
import {closedMeetingsParticipants} from './../../../fixtures/meetingsParticipants';
import {scheduleSpeakers} from './../../../fixtures/scheduleSpeakers';


export default class Schedule extends React.Component {
  render() {
    const testCloseEvent = closedMeetingsParticipants[0];
    return (
      <section className="schedule-section">
        <Title
          text={'программа'}
        />
        <div className="schedule">
          <ScheduleContainer>
            <h3 className="schedule__day-title"> 1-й день</h3>
            <CategoriesLabels
              categories={[categories[0], categories[1]]}
            />
            <Event event={scheduleLines[0]}/>
            <Event event={scheduleLines[1]}/>
            <SpeechEvent event={scheduleSpeakers[0]}/>
            <Event event={scheduleLines[3]}/>
            <CloseEvent event={testCloseEvent}/>
            <Event event={scheduleLines[4]}/>
          </ScheduleContainer>
          <ScheduleContainer>
            <h3 className="schedule__day-title"> 2-й день</h3>
            <CategoriesLabels
              categories={[categories[0], categories[1]]}
            />
            <SpeechEvent event={scheduleSpeakers[0]}/>
          </ScheduleContainer>
        </div>
      </section>
    );
  }
}


