"use client"

import { PauseIcon, PlayIcon, RewindIcon, FastForwardIcon, DotsThreeOutlineVerticalIcon } from "@phosphor-icons/react/ssr";
// import { SiSoundcloud } from "@icons-pack/react-simple-icons";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [songProgress, setSongProgress] = useState<number>(0);
  const [status, setStatus] = useState<boolean>(false);
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
      <div className="box">
        <div className="box-content">
          <div className="cover">
            <img src="/cover.jpg" />
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
            <DotsThreeOutlineVerticalIcon weight="fill" />
          </button>
        </div>
      </div>
    </div>
  );
}
