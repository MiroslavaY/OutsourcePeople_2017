import React from 'react';
import './Partners.css';
import Title from '../helpersComponents/SectionTitle/SectionTitle';
import {allPartners} from './../../fixtures/partners';


export default class Partners extends React.Component {

  render() {
    const allCategories = allPartners;
    return (
      <div className="partners-section">
        {
          allCategories.map((category) => {
            return (
              <div
                key={category.title}
              className="partners-category"
              >
                <Title
                  text={category.title}
                />
                {
                  category.partners.map((partner) => <a
                    key={partner.href}
                    href={partner.href}>
                    <img
                      className="partner-img"
                      src={require(`./../../fixtures/images/${partner.img}`)}
                    />
                  </a>)
                }
              </div>

            )
          })
        }
      </div>
    );
  }
}


