import React from 'react';
import './App.css';

const soundMap = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Speech',
  url: 'https://res.cloudinary.com/brunosra/video/upload/v1536638793/r2d2/mp3/speech1.mp3'
}, {
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Surprise',
  url: 'https://res.cloudinary.com/brunosra/video/upload/v1536638793/r2d2/mp3/surprise.mp3'
}, {
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Wow',
  url: 'https://res.cloudinary.com/brunosra/video/upload/v1536638793/r2d2/mp3/wow.mp3'
}, {
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Zweep',
  url: 'https://res.cloudinary.com/brunosra/video/upload/v1536638793/r2d2/mp3/zweep.mp3'
}, {
  keyCode: 83,
  keyTrigger: 'S',
  id: 'ZeepZeep',
  url: 'https://res.cloudinary.com/brunosra/video/upload/v1536638793/r2d2/mp3/zeepzeep.mp3'
}, {
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Moving',
  url: 'https://res.cloudinary.com/brunosra/video/upload/v1536638793/r2d2/mp3/moving.mp3'
}, {
  keyCode: 90,
  keyTrigger: 'Z',
  id: 'Laughter',
  url: 'https://res.cloudinary.com/brunosra/video/upload/v1536638793/r2d2/mp3/laughter.mp3'
}, {
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Alarmed',
  url: 'https://res.cloudinary.com/brunosra/video/upload/v1536638792/r2d2/mp3/alarmed.mp3'
}, {
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Chatter',
  url: 'https://res.cloudinary.com/brunosra/video/upload/v1536638792/r2d2/mp3/chatter.mp3'
}];


class DrumSound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'kn.'
    }
    this.playSound=this.playSound.bind(this);
    this.handleKeyPress=this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }
  playSound(e) {
    const sound = document.getElementById(this.props.keyTrig);
    sound.play();
    this.props.dispClip(this.props.idClip);
  }
  render() {
    return (
      <div id={this.props.idClip}
           onClick={this.playSound}
           className="drum-pad">
            <audio id={this.props.keyTrig} className="clip" src={this.props.clip}></audio>
           {this.props.keyTrig}
      </div>
    )
  }
}

const BackArrow = () => {
  return (
    <div id="backwards">
      <div><h2><a href="http://ahaf-dev.com"><i className="fa fa-backward"/>  ahaf-dev</a></h2></div>
    </div>
  )
}

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Clip"
    }
    this.displayClip=this.displayClip.bind(this);
  }
  displayClip(name) {
    this.setState({
      display: name
    });
  }
  render() {
    let Pad;
    Pad=soundMap.map((item, i, mappedArr) => {
      return (
       <DrumSound idClip={mappedArr[i].id}
                  clip={mappedArr[i].url}
                  keyTrig={mappedArr[i].keyTrigger}
                  keyCode={mappedArr[i].keyCode}
                  dispClip={this.displayClip}/>
       )
    });
    return (
      <div id="content">
        <div id="pad">
          <h1>Drum Machine</h1>
          {Pad}
          <p id="display" className="btn btn-primary">
            {this.state.display}
          </p>
        </div>
        <p>Photo by Matthijs Smit on Unsplash</p>
        <BackArrow />
      </div>

    )
  }
}

export default DrumMachine;
