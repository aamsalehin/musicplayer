import React from 'react';
const LibrarySong=({song, songs, setCurrentSong, audioRef, isPlaying, setSongs})=>{
    const selectedSongHandler= async ()=>{
//  const selectedSong=songs.filter(state=>state.id===id);
//     setCurrentSong(selectedSong[0]);
const newSong=songs.map(s=>{
    if(s.id===song.id){
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
await setSongs(newSong);
        const selectedSong = song;
        await setCurrentSong(selectedSong);
        if(isPlaying)audioRef.current.play();
    };

   
    return (
        <div onClick={selectedSongHandler} className={`library-song ${song.active?"selected":''}`}>
            <img src={song.image} alt={song.name} />
            <div className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            </div>
        </div>
    );
};
export default LibrarySong;