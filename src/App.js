import './App.css';
import React, { useState } from 'react';
import VideoPlayer from './components/VideoPlayer';
import video from './assets/writing.mp4';
import Modal from './components/Modal';
import FancyButton from './components/FancyButton';

function App() {

  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <VideoPlayer src={video} />
      {show && <Modal setShow={setShow} />}
      <FancyButton>Cocchino</FancyButton>
    </div>
  );
}

export default App;
