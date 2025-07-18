import { PauseIcon, PlayIcon, RewindIcon, FastForwardIcon, DotsThreeOutlineVerticalIcon } from "@phosphor-icons/react/ssr";
// import { SiSoundcloud } from "@icons-pack/react-simple-icons";

export default function Home() {
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
        </div>

        <div className="navbar">
          <button>
            <RewindIcon weight="fill" />
          </button>
          <button className="active">
            <PlayIcon weight="fill" />
          </button>
          <button>
            <PauseIcon weight="fill" />
          </button>
          <button>
            <FastForwardIcon weight="fill" />
          </button>
          <button>
            <DotsThreeOutlineVerticalIcon weight="fill" />
          </button>
        </div>
      </div>
    </div>
  );
}
