import React from 'react';
import './Schedule.css';
import Title from '../../helpersComponents/SectionTitle/SectionTitle';
import Pane from '../../helpersComponents/Tabs/Pane/Pane';
import Tabs from '../../helpersComponents/Tabs/Tabs/Tabs';
import CategoriesLabels from './../CategoriesLabels/CategoriesLabels';
import SpecialEvents from './../ScheduleSections/SpecialEvent/SpecialEvent';
import {categories} from '../../../fixtures/categories';
import {schedule} from '../../../fixtures/schedule';


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
              <CategoriesLabels
              categories={categories}
              />
              <SpecialEvents
                schedule={schedule}
              />
            </Pane>
            <Pane label="2-й День">
              <div>There are will be a 2nd day schedule!</div>
            </Pane>
          </Tabs>
        </div>
      </div>
    );
  }
}


