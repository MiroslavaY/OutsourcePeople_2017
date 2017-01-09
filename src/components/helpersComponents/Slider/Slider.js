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
    const title = this.props.title;
    return (
      <div className="slider">
        <button
          className="slider-control--button"
          onClick={this.getPreviousSlide}
         >
          &lt;
        </button>
        <div className="slider-content">
         <figure className="slider--photo-block">
           <img
             className="slider--person-img"
             src={require(`./../../../fixtures/images/${currentSlide.img}`)}
           />
           <figcaption>
             <p className="slider--person-info">{currentSlide.name}<br/>
               <span className="slider--person-career">{`${currentSlide.position}@${currentSlide.company}`}</span>
             </p>
           </figcaption>
         </figure>
          <div className="slider--feedback-block">
            <h3 className="slider--feedback-title">{title}</h3>
            <p className="slider--feedback">{currentSlide.feedback}</p>
          </div>
        </div>
        <button
          className="slider-control--button"
          onClick={this.getNextSlide}
        >&gt;
        </button>
      </div>
    );
  }
}


