import React from 'react';
import LibrarySong from './LibrarySong';

const Library=({songs, setCurrentSong, audioRef, isPlaying, setSongs, isOpenLibrary})=>{
    return(
        <div className={`library ${isOpenLibrary?'library-active':''}`}>
            <h2>Library</h2>
            {songs.map((song)=><LibrarySong setSongs={setSongs} isPlaying={isPlaying}  audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} key={song.id} id={song.id} song={song} />)}
            

        </div>
    );
}
export default Library;