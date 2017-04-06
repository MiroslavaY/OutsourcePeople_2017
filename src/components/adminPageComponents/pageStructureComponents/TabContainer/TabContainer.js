import React from 'react';
import './TabContainer.css'
import AdminTable from './../../helpersComponents/AdminTable/AdminTable';
import  {Tab, Tabs, TabList, TabPanel} from 'react-tabs';


const listSymbol = String.fromCharCode(	9776);
const editSymbol = String.fromCharCode(0x270E);
const exportSymbol = String.fromCharCode(0x21BB);

export default class TabContainer extends React.Component {
  render() {
    const entity = this.props.entity;
    return (
      <section className="admin-tabs-container">
        <Tabs selectedIndex={0}>
          <TabList>
            <Tab><span>{listSymbol}</span> List of {entity.name}</Tab>
            <Tab><span>+</span> Create</Tab>
          </TabList>
          <TabPanel>
            <AdminTable entity={entity}/>
          </TabPanel>
          <TabPanel>
            <h2>create new </h2>
          </TabPanel>
        </Tabs>
      </section>
    );
  }
}