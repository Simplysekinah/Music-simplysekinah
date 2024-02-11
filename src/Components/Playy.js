import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import './styling.css'; // Import your styles

const Playy = () => {
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const playerRef = useRef(null);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleProgress = (state) => {
    if (!playing) {
      setPlaying(true);
    }
    setPlayed(state.played);
  };

  return (
    <div className="app">
      <h1>Music Player</h1>
      <div className="player-wrapper">
        <ReactPlayer
          ref={playerRef}
          url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          playing={playing}
          onProgress={handleProgress}
          height="50px"
          width="100%"
          progressInterval={50}
        />
      </div>
      <div className="seek-bar" style={{ width: `${played * 100}%` }}></div>
      <button className='buttons' onClick={handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
    </div>
  );
};

export default Playy;
