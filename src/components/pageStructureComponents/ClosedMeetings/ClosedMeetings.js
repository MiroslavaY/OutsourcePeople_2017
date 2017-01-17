import React from 'react';
import './ClosedMeetings.css';
import Title from './../../helpersComponents/SectionTitle/SectionTitle';
import PersonInfoBlock from './../../helpersComponents/PersonInfoForMeetings/PersonInfoForMeetings';
import MeetingContainer from './../../helpersComponents/MeetingsContainer/MeetingsContainer';
import {closedMeetingsParticipants} from './../../../fixtures/meetingsParticipants';


export default class ClosedMeetings extends React.Component {
  render() {
    const events = closedMeetingsParticipants;
    return (
      <div className="closed-meetings">
        <Title
          text={'Закрытые встречи*'}
        />

        <MeetingContainer>
          <h3 className="experts-tables__day-title">День первый</h3>
          <div className="closed-meetings-data">
            {
              events.map((meeting) => {
                return (
                  <div className="close-meeting-item" key={meeting.time}>
                    <div className="close-meeting-item__time">{meeting.time}</div>
                    <div>
                      <PersonInfoBlock key={meeting.person.name} personInfo={meeting.person}/>
                    </div>
                  </div>
                )
              })
            }
          </div>

        </MeetingContainer>
        <p className="closed-meetings__explanation">
          *Закрытые встречи представляют собой эксклюзивный формат общения с ТОП спикерами конференции
          - ведущими мировыми экспертами, доступный только для участников с ВИП билетом. Это возможность
          в узком кругу единомышленников задать ТОП спикерам все интересующие вопросы и гарантированно получить
          профессиональный совет.
        </p>
      </div>
    );
  }
}

