import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay,faPause, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
const Player=({setSongs,setCurrentSong,songs,currentSong,isPlaying,setIsPlaying, audioRef,songInfo, setSongInfo})=>{
  
    const audioPlayhandler=()=>{
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };
    //state
  
    const getTime=(time)=>{
        return (
            Math.floor(time/60)+":"+("0"+Math.floor(time%60)).slice(-2)
        );
    }
    const dragHandler=(e)=>{
        audioRef.current.currentTime=e.target.value;
        setSongInfo({...songInfo, currentTime:e.target.value})
    }
    const skipTrackhandler=async (direction)=>{
        const currentIndex=songs.findIndex((song)=>song.id===currentSong.id)
        if(direction==='skip-forward'){
           await setCurrentSong(songs[(currentIndex+1)%songs.length]);
           activePlayerhandler(songs[(currentIndex+1)%songs.length])
        }else if(direction==='skip-back'){
            if(((currentIndex-1)%songs.length)===-1){
                setCurrentSong(songs[(songs.length-1)]);
                if(isPlaying)audioRef.current.play();
                activePlayerhandler(songs[(songs.length-1)]);
                return;
            }
          await  setCurrentSong(songs[(currentIndex-1)%songs.length]);
          activePlayerhandler(songs[(currentIndex-1)%songs.length])
        }
        if(isPlaying)audioRef.current.play();
    };
    const activePlayerhandler=(nextpreve)=>{
        const newSong=songs.map(s=>{
            if(s.id===nextpreve.id){
                return{
                    ...s,
                    active:true}
            }else{
                return{
                    ...s,
                    active:false
                }
            }
        }) 
        setSongs(newSong);
    }
  
    return (
        <div className="player">
            <div className="time-control">
                <div>{getTime(songInfo.currentTime)}</div>
                <div className='track'>
                <input onChange={dragHandler} min="0" max={getTime(songInfo.duration)||0}value={songInfo.currentTime} type="range" />
                <div className='animate-track'></div>
                </div>
                <div>{songInfo.duration?getTime(songInfo.duration):"0:00"}</div>
            </div>
            <div className="player-control">
                <FontAwesomeIcon size="2x" icon={faChevronLeft} onClick={()=>skipTrackhandler('skip-back')} />
                <FontAwesomeIcon onClick={audioPlayhandler} size="2x" icon={isPlaying?faPause:faPlay} />
                <FontAwesomeIcon size="2x" icon={faChevronRight} onClick={()=>skipTrackhandler('skip-forward')} />
            </div>
     

        </div>
    );
};
export default Player;