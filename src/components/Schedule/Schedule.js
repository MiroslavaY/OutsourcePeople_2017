import React from 'react';
import './Schedule.css';
import Title from './../SectionTitle/SectionTitle';
import Pane from './../Tabs/Pane/Pane';
import Tabs from './../Tabs/Tabs/Tabs';


export default class Schedule extends React.Component {
  render() {
    return (
      <div>
        <Title
        text={'программа'}
        />
        <div className="schedule">
          <Tabs selected={0}>
            <Pane label="1-й День">
              <div>This is my tab 1 contents!</div>
            </Pane>
            <Pane label="2-й День">
              <div>This is my tab 2 contents!</div>
            </Pane>
          </Tabs>
        </div>
      </div>
    );
  }
}


