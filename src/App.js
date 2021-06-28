import React, {useState} from 'react';
import Song from './components/Song';
import Player from './components/Player';
import data from './components/utils';
function App() {
  //state
  const [songs, setSongs]=useState(data());
  const [currentSong, setCurrentSong]=useState(songs[0]);
  const [isPLaying, setIsPlaying]=useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player isPLaying={isPLaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />
    </div>
  );
}

export default App;
