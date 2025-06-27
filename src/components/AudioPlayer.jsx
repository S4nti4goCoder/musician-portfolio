import { useRef, useState, useEffect } from "react";
import "../styles/AudioPlayer.css";
import albumCover from "../assets/album1.jpg";

// Audio temporal
const sampleAudio = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    const setAudioData = () => setDuration(audio.duration);
    const updateTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener("loadedmetadata", setAudioData);
    audio.addEventListener("timeupdate", updateTime);
    return () => {
      audio.removeEventListener("loadedmetadata", setAudioData);
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="audio-player">
      <img src={albumCover} alt="Portada del álbum" className="audio-player__cover" />
      <div className="audio-player__info">
        <h4>Audio 1</h4>
        <p>Frank García / Demo Álbum</p>
      </div>

      <audio ref={audioRef} src={sampleAudio} preload="metadata" />

      <div className="audio-player__progress">
        <span>{formatTime(currentTime)}</span>
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={(e) => {
            const value = Number(e.target.value);
            audioRef.current.currentTime = value;
            setCurrentTime(value);
          }}
        />
        <span>{formatTime(duration)}</span>
      </div>

      <div className="audio-player__buttons">
        <button className="circle-btn" title="Volumen">🔈</button>
        <button className="circle-btn" title="Anterior">⏮️</button>
        <button className="circle-btn main" onClick={togglePlay}>
          {isPlaying ? "⏸️" : "▶️"}
        </button>
        <button className="circle-btn" title="Siguiente">⏭️</button>
        <button className="circle-btn" title="Lista">🎵</button>
      </div>
    </div>
  );
};

export default AudioPlayer;
