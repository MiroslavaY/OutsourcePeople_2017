import React from 'react';
import './ExpertsTables.css';
import MeetingsContainer from './../../helpersComponents/MeetingsContainer/MeetingsContainer';
import Title from './../../helpersComponents/SectionTitle/SectionTitle';
import TimeLine from './../../helpersComponents/TimeLineForTabs/TimeLineForTabs';
import PersonInfoBlock from './../../helpersComponents/PersonInfoForMeetings/PersonInfoForMeetings';
import {expertsTables} from './../../../fixtures/meetingsParticipants';


export default class ExpertsTables extends React.Component {
  render() {
    const events = expertsTables;
    return (
      <div className="experts-tables">
        <Title
          text={'Экспертные столы*'}
        />
        <MeetingsContainer>
          <h3 className="experts-tables__day-title">День первый</h3>
          {
            events.map((event)=> {
              return (
                <div key={event.time}>
                  <TimeLine
                    time={event.time}
                  />
                  {
                    event.participants.map((person) => <PersonInfoBlock key={person.name} personInfo={person}/>)
                  }
                </div>
              )
            })
          }
          <h3 className="experts-tables__day-title">День второй</h3>
          {
            events.map((event)=> {
              return (
                <div key={event.time}>
                  <TimeLine
                    time={event.time}
                  />
                  {
                    event.participants.map((person) => <PersonInfoBlock key={person.name} personInfo={person}/>)
                  }
                </div>
              )
            })
          }
        </MeetingsContainer>
        <p className="experts-tables--explanation">
          *Экспертный стол - это уникальная возможность получить личную 10-минутную консультацию у
          спикеров конференции в режиме тет-а-тет. Запись на Экспертый стол осуществляется предварительно,
          участники конференции будут уведомлены об открытии регистрации накануне мероприятия.
        </p>
      </div>
    );
  }
}

