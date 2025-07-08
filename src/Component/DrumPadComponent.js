import { useState } from "react";
import "./DrumPad.css";
import DrumPadKeys from "./DrumPadKeys";
import DrumPadSet from "./DrumPadSet";

export default function DrumPadComponent() {
  const [audioTitle, setAudioTitle] = useState("");
  const [volume, setVolume] = useState(0.5);
  const [isPowerOn, setIsPowerOn] = useState(true);
  const [displayText, setDisplayText] = useState("");

  return (
    <div className="d_machine" id="drum-machine">
      <div className="drum_keys" id="display">
        {displayText}
        <DrumPadKeys setAudioTitle={setAudioTitle} volume={volume} isPowerOn={isPowerOn} setIsPowerOn={setIsPowerOn}
        setDisplayText={setDisplayText} />
      </div>
      <div className="drum_set">
        <DrumPadSet
          audioTitle={audioTitle}
          volume={volume}
          setVolume={setVolume}
          isPowerOn={isPowerOn}
          setAudioTitle={setAudioTitle}
          setIsPowerOn={setIsPowerOn}
        />
      </div>
    </div>
  );
}
