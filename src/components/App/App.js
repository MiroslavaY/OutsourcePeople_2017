import React from 'react';
import './App.css';
import PageHeader from './../PageHeader/PageHeader/PageHeader';
import InformationBar from './../InformationBar/InformationBar';
import MainSpeakers from './../MainSpeakers/MainSpeakers';
import EventsSection from './../EventsSection/EventsSection';
import CategoriesInformation from './../CategoriesInformation/CategoriesInformation';
import Schedule from './../Schedule/Schedule/Schedule';
import BecameSpeaker from './../BecameSpeaker/BecameSpeaker';
import BecamePartner from '../BecamePartner/BecamePartner';
import Footer from './../Footer/Footer';
import Accommodation from './../Accommodation/Accommodation';
import LastYear from './../LastYear/LastYear';
import Partners from './../Partners/Partners';
import ParticipantsFeedbacks from './../ParticipantsFeedbacks/ParticipantsFeedbacks';
import SpeakersFeedbacks from './../SpeakersFeedbacks/SpeakersFeedbacks';
import ClosedMeetings from './../ClosedMeetings/ClosedMeetings';


export default class App extends React.Component {

  render() {
    return (
      <div>
        <PageHeader/>
        <InformationBar/>
        <MainSpeakers/>
        <EventsSection/>
        <CategoriesInformation/>
        <Schedule/>
        <ClosedMeetings/>
        <SpeakersFeedbacks/>
        <LastYear/>
        <ParticipantsFeedbacks/>
        <BecameSpeaker/>
        <Partners/>
        <BecamePartner/>
        <Accommodation/>
        <Footer/>
      </div>
    );
  }
}

