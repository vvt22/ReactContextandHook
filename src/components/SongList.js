import NewSongForm from "./NewSongForm";
import React, { useState, useEffect } from "react";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "almost home", id: 1 },
    { title: "memory gospel", id: 2 },
    { title: "this wild darkness", id: 3 },
  ]);
  const [age, setAge] = useState(20);
  //console.log(songs);
  const addSong = (title) => {
    setSongs([...songs, { title, id: Math.random }]);
  };
  useEffect(() => {
    console.log("useEffect callback", songs);
  }, [songs]);
  useEffect(() => {
    console.log("useEffect callback", age);
  }, [age]);
  return (
    <div className="song-list">
      <ul>
        {songs.map((song, index) => (
          <li key={index}>{song.title}</li>
        ))}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  );
};

export default SongList;
