import React from 'react';
import './MainSpeakers.css';
import Title from './../SectionTitle/SectionTitle';


export default class MainSpeakers extends React.Component {
  render() {
    return (
      <div>
        <Title
          text={'Ключевые спикеры'}
        />
        <div className="main-speakers">
          <figure className="main-speakers--photo-section">
            <img src={require('./../../fixtures/images/face.jpg')} alt="International speakers"/>
            <figcaption className="main-speakers--info">
              <h4 className="main-speakers--name">Михаил Завелейский</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, consequuntur deserunt doloremque
                ipsam non sed ullam.</p>
            </figcaption>
          </figure>
          <figure className="main-speakers--photo-section">
            <img src={require('./../../fixtures/images/face.jpg')} alt="International speakers"/>
            <figcaption className="main-speakers--info">
              <h4 className="main-speakers--name">Михаил Завелейский</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, consequuntur deserunt doloremque
                ipsam non sed ullam.</p>
            </figcaption>
          </figure>
          <figure className="main-speakers--photo-section">
            <img src={require('./../../fixtures/images/face.jpg')} alt="International speakers"/>
            <figcaption className="main-speakers--info">
              <h4 className="main-speakers--name">Михаил Завелейский</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, consequuntur deserunt doloremque
                ipsam non sed ullam.</p>
            </figcaption>
          </figure>
          <figure className="main-speakers--photo-section">
            <img src={require('./../../fixtures/images/face.jpg')} alt="International speakers"/>
            <figcaption className="main-speakers--info">
              <h4 className="main-speakers--name">Михаил Завелейский</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, consequuntur deserunt doloremque
                ipsam non sed ullam.</p>
            </figcaption>
          </figure>
          <figure className="main-speakers--photo-section">
            <img src={require('./../../fixtures/images/face.jpg')} alt="International speakers"/>
            <figcaption className="main-speakers--info">
              <h4 className="main-speakers--name">Михаил Завелейский</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, consequuntur deserunt doloremque
                ipsam non sed ullam.</p>
            </figcaption>
          </figure>
          <figure className="main-speakers--photo-section">
            <img src={require('./../../fixtures/images/face.jpg')} alt="International speakers"/>
            <figcaption className="main-speakers--info">
              <h4 className="main-speakers--name">Михаил Завелейский</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, consequuntur deserunt doloremque
                ipsam non sed ullam.</p>
            </figcaption>
          </figure>
          <figure className="main-speakers--photo-section">
            <img src={require('./../../fixtures/images/face.jpg')} alt="International speakers"/>
            <figcaption className="main-speakers--info">
              <h4 className="main-speakers--name">Михаил Завелейский</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, consequuntur deserunt doloremque
                ipsam non sed ullam.</p>
            </figcaption>
          </figure>
          <figure className="main-speakers--photo-section">
            <img src={require('./../../fixtures/images/face.jpg')} alt="International speakers"/>
            <figcaption className="main-speakers--info">
              <h4 className="main-speakers--name">Михаил Завелейский</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, consequuntur deserunt doloremque
                ipsam non sed ullam.</p>
            </figcaption>
          </figure>
        </div>
      </div>
    );
  }
}


