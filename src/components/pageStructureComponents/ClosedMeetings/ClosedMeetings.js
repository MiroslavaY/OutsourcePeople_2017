import React from 'react';
import './ClosedMeetings.css';
import Tabs from './../../helpersComponents/Tabs/Tabs/Tabs';
import Pane from './../../helpersComponents/Tabs/Pane/Pane';
import Title from './../../helpersComponents/SectionTitle/SectionTitle';
import TimeLine from './../../helpersComponents/TimeLineForTabs/TimeLineForTabs';
import PersonInfoBlock from './../../helpersComponents/PersonInfoForMeetings/PersonInfoForMeetings';
import {meetingsParticipants} from './../../../fixtures/meetingsParticipants';


export default class ClosedMeetings extends React.Component {
  render() {
    const events = meetingsParticipants;
    return (
      <div className="closed-meetings">
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
        <p className="closed-meetings--explanation">
          *Закрытые встречи представляют собой эксклюзивный формат общения с ТОП спикерами конференции
          - ведущими мировыми экспертами, доступный только для участников с ВИП билетом. Это возможность
          в узком кругу единомышленников задать ТОП спикерам все интересующие вопросы и гарантированно получить
          профессиональный совет.
        </p>
      </div>
    );
  }
}

