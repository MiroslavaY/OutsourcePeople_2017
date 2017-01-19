import React from 'react';
import './App.css';
import PageHeader from '../pageStructureComponents/Header/Header';
import InformationBar from './../pageStructureComponents/InformationBar/InformationBar';
import MainSpeakers from './../pageStructureComponents/MainSpeakers/MainSpeakers';
import EventsSection from './../pageStructureComponents/EventsSection/EventsSection';
import CategoriesInformation from './../pageStructureComponents/CategoriesInformation/CategoriesInformation';
import Schedule from './../pageStructureComponents/Schedule/Schedule';
import BecomeSpeaker from '../pageStructureComponents/BecomeSpeaker/BecomeSpeaker';
import BecomePartner from './../pageStructureComponents/BecomePartner/BecomePartner';
import Footer from './../pageStructureComponents/Footer/Footer';
import Accommodation from './../pageStructureComponents/Accommodation/Accommodation';
import LastYear from './../pageStructureComponents/LastYear/LastYear';
import Partners from './../pageStructureComponents/Partners/Partners';
import ParticipantsFeedbacks from './../pageStructureComponents/ParticipantsFeedbacks/ParticipantsFeedbacks';
import SpeakersFeedbacks from './../pageStructureComponents/SpeakersFeedbacks/SpeakersFeedbacks';
import ClosedMeetings from './../pageStructureComponents/ClosedMeetings/ClosedMeetings';
import ExpertsTables from './../pageStructureComponents/ExpertsTables/ExpertsTables';
import Organizers from './../pageStructureComponents/Organizers/Organizers';
import BuyRecord from './../pageStructureComponents/BuyRecord/BuyRecord';
import Tickets from './../pageStructureComponents/Tickets/Tickets';


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
        <Tickets/>
        <BuyRecord/>
        <ClosedMeetings/>
        <ExpertsTables/>
        <BecomeSpeaker/>
        <SpeakersFeedbacks/>
        <LastYear/>
        <ParticipantsFeedbacks/>
        <Partners/>
        <Organizers/>
        <BecomePartner/>
        <Accommodation/>
        <Footer/>
      </div>
    );
  }
}

