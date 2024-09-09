import React from 'react';
import PropTypes from 'prop-types';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

class PlyrComponent extends React.Component {
  componentDidMount() {
    this.player = new Plyr('.js-plyr', this.props.options);
    this.player.source = {
      type: 'video',
      sources: this.props.sources.sources, // Correctly setting video sources
    };

    // Listening for the timeupdate event to calculate progress
    this.player.on('timeupdate', (event) => {
      if (this.props.onTimeUpdate) {
        this.props.onTimeUpdate(event);
      }
    });
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.destroy();
    }
  }

  render() {
    return (
      <div>
        <video className="js-plyr plyr" playsInline controls></video>
      </div>
    );
  }
}

PlyrComponent.defaultProps = {
  options: {
    controls: [
      'rewind',
      'play',
      'fast-forward',
      'progress',
      'current-time',
      'duration',
      'mute',
      'volume',
      'settings',
      'fullscreen',
    ],
  },
  i18n: {
    restart: 'Restart',
    rewind: 'Rewind {seektime}s',
    play: 'Play',
    pause: 'Pause',
    fastForward: 'Forward {seektime}s',
    seek: 'Seek',
    seekLabel: '{currentTime} of {duration}',
    played: 'Played',
    buffered: 'Buffered',
    currentTime: 'Current time',
    duration: 'Duration',
    volume: 'Volume',
    mute: 'Mute',
    unmute: 'Unmute',
    enableCaptions: 'Enable captions',
    disableCaptions: 'Disable captions',
    download: 'Download',
    enterFullscreen: 'Enter fullscreen',
    exitFullscreen: 'Exit fullscreen',
    frameTitle: 'Player for {title}',
    captions: 'Captions',
    settings: 'Settings',
    menuBack: 'Go back to previous menu',
    speed: 'Speed',
    normal: 'Normal',
    quality: 'Quality',
    loop: 'Loop',
  },
  sources: {
    sources: [
      {
        src: '/programing1.mp4',
        type: 'video/mp4',
        size: 720,
      },
      {
        src: '/programing1.mp4',
        type: 'video/mp4',
        size: 1080,
      },
    ],
  },
};

PlyrComponent.propTypes = {
  options: PropTypes.object,
  sources: PropTypes.object,
  onTimeUpdate: PropTypes.func, // Prop to handle timeupdate event
};

export default PlyrComponent;
