import React from 'react';
import './ExpertsTables.css';
import Tabs from './../../helpersComponents/Tabs/Tabs/Tabs';
import Pane from './../../helpersComponents/Tabs/Pane/Pane';
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
          text={'Закрытые встречи*'}
        />
        <Tabs selected={0}>
          <Pane label="1-й День">
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
          </Pane>
          <Pane label="2-й День">
            <div>There are will be a 2nd day schedule!</div>
          </Pane>
        </Tabs>
        <p className="experts-tables--explanation">
          *Экспертный стол - это уникальная возможность получить личную 10-минутную консультацию у
          спикеров конференции в режиме тет-а-тет. Запись на Экспертый стол осуществляется предварительно,
          участники конференции будут уведомлены об открытии регистрации накануне мероприятия.
        </p>
      </div>
    );
  }
}

