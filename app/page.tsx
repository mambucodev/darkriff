"use client"

import {
  PauseIcon,
  PlayIcon,
  RewindIcon,
  FastForwardIcon,
  FadersIcon,
} from "@phosphor-icons/react";
import { useState } from "react";

export default function Home() {
  const [songProgress, setSongProgress] = useState<number>(0);
  const [status, setStatus] = useState<boolean>(false);
  const [cover, setCover] = useState<undefined | string>("/cover.jpg");
  const [showSettings, setShowSettings] = useState<boolean>(false);

  function parseDuration(secondsRaw: number) {
    const minutes = Math.floor(secondsRaw / 60);
    const seconds = secondsRaw % 60;
    
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }
  // testing
  const songDuration = 242;

  return (
    <div className="container-fill">
      <h1>Darkriff Station</h1>

      <div className="box-grouping">
        <div className="box">
          <div className="box-content">
            <div className="cover">
              <div style={{ backgroundImage: `url("${cover}")` }} className="cover-image"></div>
              <div className="details">
                <strong>YOUtopia</strong> - Bring Me The Horizon
              </div>
            </div>
            <div className="slider">
              <span>{parseDuration(songProgress)}</span>
              <input type="range" min={0} value={songProgress} onChange={(event) => setSongProgress(parseInt(event.target.value))} max={songDuration} />
              <span>-{parseDuration(songDuration - songProgress)}</span>
            </div>
          </div>
          <div className="navbar">
            <button>
              <RewindIcon weight="fill" />
            </button>
            <button onMouseDown={() => setStatus(true)} className={status ? "active" : ""}>
              <PlayIcon weight="fill" />
            </button>
            <button onMouseDown={() => setStatus(false)} className={status ? "" : "active"}>
              <PauseIcon weight="fill" />
            </button>
            <button>
              <FastForwardIcon weight="fill" />
            </button>
            <button onMouseDown={() => setShowSettings(!showSettings)} className={showSettings ? "active" : ""}>
              <FadersIcon weight="fill" />
            </button>
          </div>
        </div>

        <div className="footnote">
          Powered by <SiSoundcloud />
        </div>
      </div>

      <noscript>
        <div className="noscript">
          <div className="noscript-box">
            <h1>Javascript is Disabled</h1>
            <p>We're sorry, but this is a web radio station. In order to work (stream music, have interactive UI/UX) we need JavaScript to be enabled on your browser.</p>
          </div>
        </div>
      </noscript>
    </div>
  );
}
