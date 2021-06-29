import React, {useState, useRef} from 'react';
import Song from './components/Song';
import Player from './components/Player';
import data from './components/utils';
import Library from './components/Library';
import Nav from './components/Nav';
function App() {
  //state
  const [songs, setSongs]=useState(data());
  const [currentSong, setCurrentSong]=useState(songs[0]);
  const [isPlaying, setIsPlaying]=useState(false);
  const audioRef= useRef(null);
  const [songInfo, setSongInfo]=useState({
    currentTime:0,
    duration:0
});
const [isOpenLibrary, setIsOpenLibrary]=useState(false);
const timUpdatehandler=(e)=>{
    const current =e.target.currentTime;
    const duration=e.target.duration;
    setSongInfo({...songInfo,currentTime:current,duration})
};
//audio ende handler
const audioEndedHandler=async ()=>{
  const currentIndex=songs.findIndex((song)=>song.id===currentSong.id);
     await setCurrentSong(songs[(currentIndex+1)%songs.length]);
     if(isPlaying)audioRef.current.play();
};
  return (
    <div className={`App ${isOpenLibrary?'library--active':''}`}>
      <Nav setIsOpenLibrary={setIsOpenLibrary} isOpenLibrary={isOpenLibrary} />
      <Song currentSong={currentSong} />
      <Player setSongs={setSongs} setCurrentSong={setCurrentSong} songs={songs} songInfo={songInfo} setSongInfo={setSongInfo} audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />
      <Library isOpenLibrary={isOpenLibrary}  setIsOpenLibrary={setIsOpenLibrary} setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} setCurrentSong={setCurrentSong} songs={songs} />
      <audio onEnded={audioEndedHandler} onLoadedMetadata={timUpdatehandler} onTimeUpdate={timUpdatehandler} ref={audioRef} src={currentSong.audio}></audio>
     
    </div>
  );
}

export default App;
