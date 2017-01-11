import React from 'react';
import './Organizers.css';
import Title from './../../helpersComponents/SectionTitle/SectionTitle';
import OrganizersSection from './../../helpersComponents/OrganizersSection/OrganizersSection';
import OrganizersCard from './../../helpersComponents/OrganizersCard/OrganizersCard';
import {organizers} from './../../../fixtures/organizers';


export default class Organizers extends React.Component {

  render() {
    return (
      <div className="organizers">
        <Title
          text={'Организаторы'}
        />
        <div className="organizers--content">
          {
            organizers.map((category) => {
              return (
                <OrganizersSection
                  key={category.category}
                  title={category.category}
                  organizers={category.organizers}
                >
                  {category.organizers.map((person, i) => <OrganizersCard key={i} person={person}/>)}
                </OrganizersSection>
              )
            })
          }
        </div>
      </div>
    );
  }
}


