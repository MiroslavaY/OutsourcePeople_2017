import React from 'react';
import './Slider.css';


export default class Slider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      maxPossibleIndex: this.props.values.length - 1,
    };

    this.getNextSlide = this.getNextSlide.bind(this);
    this.getPreviousSlide = this.getPreviousSlide.bind(this);
  }


  getNextSlide() {
    this.setState({
      currentIndex: this.state.currentIndex === this.state.maxPossibleIndex ?
        0 :
      this.state.currentIndex + 1,
    });
  }

  getPreviousSlide() {
    this.setState({
      currentIndex: this.state.currentIndex === 0 ?
        this.state.maxPossibleIndex :
        this.state.currentIndex - 1,
    });
  }

  render() {
    const currentSlide = this.props.values[this.state.currentIndex];
    const title = this.props.service;
    return (
      <div className="slider">
        <button
          className="slider__control-button slider__control-button--left"
          onClick={this.getPreviousSlide}
        >
          <p>&lt;</p>
        </button>
        <div className="slider-content">
          <figure className="slider-content__photo">
            <img
              alt={currentSlide.name}
              className="slider-content__photo__img"
              src={require(`./../../../fixtures/images/${currentSlide.img}`)}
            />
            <figcaption>
              <p className="slider-content__person-info">{currentSlide.name}<br/>
                <span
                  className="slider-content__person-info__career">{`${currentSlide.position}@${currentSlide.company}`}</span>
              </p>
            </figcaption>
          </figure>
          <div className="slider-feedback">
            <h3 className="slider-feedback__title">{title}</h3>
            <p className="slider-feedback__paragraph">{currentSlide.feedback}</p>
          </div>
        </div>
        <button
          className="slider__control-button slider__control-button--right"
          onClick={this.getNextSlide}
        >
          <p>&gt;</p>
        </button>
      </div>
    );
  }
}


