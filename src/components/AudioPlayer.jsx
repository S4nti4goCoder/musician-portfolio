import { useRef, useState, useEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward,
  FaVolumeUp,
  FaMusic,
} from "react-icons/fa";
import "../styles/AudioPlayer.css";
import albumCover from "../assets/album1.jpg";

const sampleAudio =
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showVolume, setShowVolume] = useState(false);

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
    isPlaying ? audio.pause() : audio.play();
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleVolumeChange = (e) => {
    const vol = parseFloat(e.target.value);
    audioRef.current.volume = vol;
    setVolume(vol);
  };

  return (
    <div className="audio-player">
      <img src={albumCover} alt="Album Cover" className="audio-player__cover" />

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
        <div
          className="volume-container"
          onMouseLeave={() => setShowVolume(false)}
        >
          <button
            className="circle-btn"
            onMouseEnter={() => setShowVolume(true)}
            title="Volumen"
          >
            <FaVolumeUp />
          </button>
          <div className={`volume-slider ${showVolume ? "visible" : ""}`}>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              orient="vertical"
            />
          </div>
        </div>

        <button className="circle-btn" title="Anterior">
          <FaStepBackward />
        </button>

        <button className="circle-btn play-icon" onClick={togglePlay} title="Play/Pause">
          <span className="icon-wrapper">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </span>
        </button>

        <button className="circle-btn" title="Siguiente">
          <FaStepForward />
        </button>

        <button className="circle-btn" title="Lista">
          <FaMusic />
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
