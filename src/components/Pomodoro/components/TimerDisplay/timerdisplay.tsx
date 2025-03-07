import React from "react";
import MuteToggle from "../MuteToggle/mutetoggle";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const TimerDisplay = ({
  timerMode,
  percentage,
  timeLeft,
  isActive,
  setIsActive,
  buttonText,
  setButtonText,
  volume,
  setVolume,
}) => {
  const handleClick = (event) => {
    if (event.target.id === "muteButton") {
      return null;
    }

    if (timeLeft === "0:00") {
      return null;
    }

    setIsActive(!isActive);
    setButtonText(
      buttonText === "START" || buttonText === "RESUME" ? "PAUSE" : "RESUME"
    );
  };

  let timesUpMsg = timerMode === "pomo" ? "time for a break" : "back to work!";

  let timeText = timeLeft === "0:00" ? timesUpMsg : timeLeft;

  let textSize = timeLeft === "0:00" ? "12px" : "28px";

  return (
    <div className="timer" onClick={handleClick}>
      <div className="timer__display">
        <CircularProgressbarWithChildren
          value={percentage}
          text={timeText}
          strokeWidth={4}
          styles={buildStyles({
            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,
            // Colors & Fonts
            pathColor: "#ed68a2",
            textColor: "pink",
            textSize: textSize,
            trailColor: "none",
          })}
        >
          <MuteToggle volume={volume} setVolume={setVolume} />
          <button className="display__start-pause" onClick={handleClick}>
            {buttonText}
          </button>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};

export default TimerDisplay;
