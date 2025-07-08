import React, { useRef } from "react";
import { SampleMusics } from "../Service/DrumPadKeyService";
import "./DrumPadKeys.css";

function DrumPadKeys({ setAudioTitle, volume, isPowerOn }) {
  const audioRefs = useRef({});

  const playAudio = (key) => {
    const _audio_ref = audioRefs.current[key];

    if (_audio_ref && _audio_ref.current && isPowerOn) {
      setAudioTitle(_audio_ref.current.title);
      _audio_ref.current.currentTime = 0;
      _audio_ref.current.volume = volume; // Set volume here (0.0 to 1.0)
      _audio_ref.current.play();
    }
  };

  return (
    <div className="drum-keys">
      {SampleMusics.map((item) => {
        if (!audioRefs.current[item.key]) {
          audioRefs.current[item.key] = React.createRef();
        }

        return (
          <div
            key={item.key}
            className="cols"
            onClick={() => playAudio(item.key)}
            id={item.name}
          >
            <audio
              src={item.source}
              id={item.key}
              ref={audioRefs.current[item.key]}
              title={item.name}
              className="clip"
            ></audio>
            {item.key}
          </div>
        );
      })}
    </div>
  );
}

export default DrumPadKeys;
