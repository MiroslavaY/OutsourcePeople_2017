import React from 'react';
import './SocialNetworks.css';


export default class SocialNetworks extends React.Component {

  constructor(props) {
    super(props);

    this.connectToFacebook = this.connectToFacebook.bind(this);
    this.connectToLinkedin = this.connectToLinkedin.bind(this);
    this.connectToTwitter = this.connectToTwitter.bind(this);
  }

  componentDidMount() {
    this.connectToFacebook();
    this.connectToLinkedin();
    this.connectToTwitter();
  }

  connectToFacebook() {
    let js;
    const fjs = document.getElementsByTagName('script')[0];

    if (document.getElementById('facebook-jssdk')) return;

    js = document.createElement('script');
    js.id = 'facebook-jssdk';
    js.src = '//connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.8';

    fjs.parentNode.insertBefore(js, fjs);
  }

  connectToLinkedin() {
    const root = document.getElementById('linkedin-root');
    const firstScript = document.createElement('script');
    const secondScript = document.createElement('script');

    firstScript.src = '//platform.linkedin.com/in.js';
    firstScript.innerHTML = 'lang: en_US';
    firstScript.type = 'text/javascript';
    secondScript.type = 'IN/Share';
    secondScript.dataUrl = "http://outsource-people.com/";
    secondScript.dataCounter = 'top';

    root.appendChild(firstScript);
    root.appendChild(secondScript);
  }

  connectToTwitter() {
    window.twttr = ((d, s, id) => {
      let js;
      const t = window.twttr || {};
      const fjs = d.getElementsByTagName(s)[0];

      if (d.getElementById(id)) return t;

      js = d.createElement(s);
      js.id = id;
      js.src = 'https://platform.twitter.com/widgets.js';
      fjs.parentNode.insertBefore(js, fjs);

      t._e = [];
      t.ready = (f) => {
        t._e.push(f);
      };

      return t;
    })(document, 'script', 'twitter-wjs');
  }

  render() {
    return (
      <div className="social-networks-likes">
        <div id="fb-root" className="facebook--custom">
          <div
            className="fb-like"
            data-href="http://outsource-people.com/"
            data-layout="box_count"
            data-action="like"
            data-show-faces="true"
            data-share="true">
          </div>
        </div>
        <div id="linkedin-root" className="linkedin--custom"/>
        <a
          className="twitter-share-button"
          href="https://twitter.com/intent/tweet"
        >
          Tweet
        </a>
      </div>

    );
  }
}


