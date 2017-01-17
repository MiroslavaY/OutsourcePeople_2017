import React from 'react';
import './LastYear.css';


export default class LastYear extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isPlay: false
    };
    this.handlePlayButton = this.handlePlayButton.bind(this);
  }

  handlePlayButton() {
    this.setState({
      isPlay: true
    })
  }

  render() {
    return (
      <div className="last-year-section">
        <h2 className="last-year-section__title">Как это было <br/> в прошлом году</h2>
        {

          this.state.isPlay ?
            <iframe className="last-year-section__video" src="https://www.youtube.com/embed/Sf50HHGVBzM"/> :
            <div className="last-year-section__video">
              <button
                onClick={this.handlePlayButton}
                className="youtube-play-button"
              />
            </div>
        }
      </div>
    );
  }
}


