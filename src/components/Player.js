import React,{useRef, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
const Player=({currentSong,isPLaying,setIsPlaying})=>{
    const audioRef= useRef(null);
    const audioPlayhandler=()=>{
        if(isPLaying){
            audioRef.current.pause();
            setIsPlaying(!isPLaying);
        }else{
            audioRef.current.play();
            setIsPlaying(!isPLaying);
        }
    };
    //state
    const [songInfo, setSongInfo]=useState({
        currentTime:null,
        duration:null
    });
    const timUpdatehandler=(e)=>{
        const current =e.target.currentTime;
        const duration=e.target.duration;
        setSongInfo({...songInfo,currentTime:current,duration})
    };
    const getTime=(time)=>{
        return (
            Math.floor(time/60)+":"+("0"+Math.floor(time%60)).slice(-2)
        );
    }

    return (
        <div className="player">
            <div className="time-control">
                <div>{getTime(songInfo.currentTime)}</div>
                <input type="range" />
                <div>{getTime(songInfo.duration)}</div>
            </div>
            <div className="player-control">
                <FontAwesomeIcon size="2x" icon={faChevronLeft} />
                <FontAwesomeIcon onClick={audioPlayhandler} size="2x" icon={faPlay} />
                <FontAwesomeIcon size="2x" icon={faChevronRight} />
            </div>
            <audio onLoadedMetadata={timUpdatehandler} onTimeUpdate={timUpdatehandler} ref={audioRef} src={currentSong.audio}></audio>

        </div>
    );
};
export default Player;