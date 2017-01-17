import React from 'react';
import './Partners.css';
import Title from './../../helpersComponents/SectionTitle/SectionTitle';
import {allPartners} from './../../../fixtures/partners';


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
                  category.partners.map((partner) =>
                    <div className="partner-block" key={partner.href}>
                      <a
                        href={partner.href}>
                        <img
                          alt="partner"
                          className="partner-block__img"
                          src={require(`./../../../fixtures/images/${partner.img}`)}
                        />
                      </a>
                    </div>)
                }
              </div>
            )
          })
        }
      </div>
    );
  }
}


