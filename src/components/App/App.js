import React from 'react';
import './App.css';
import PageHeader from './../PageHeader/PageHeader/PageHeader';
import InformationBar from './../InformationBar/InformationBar';
import MainSpeakers from './../MainSpeakers/MainSpeakers';
import EventsSection from './../EventsSection/EventsSection';
import CategoriesInformation from './../CategoriesInformation/CategoriesInformation';
import Schedule from './../Schedule/Schedule';


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
      </div>
    );
  }
}

