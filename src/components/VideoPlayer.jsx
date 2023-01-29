import React, { useRef } from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ src }) => {
    const ref = useRef();
    // start and stop playing the video
    const handlePlay = () => {
        ref.current.play();
    };
    const handlePause = () => {
        ref.current.pause();
    };
    return (
        <div className='wrapper' style={{ width: 500, height: 300 }}>
            <video width="500" height="300" src={src} ref={ref} type="video/mp4" />
            <div className='buttons'>
                <button onClick={handlePlay}>Play</button>
                <button onClick={handlePause}>Pause</button>
            </div>
        </div>
    );
};

export default VideoPlayer;