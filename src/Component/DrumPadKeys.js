import React, { useEffect, useRef } from "react";
import { SampleMusics } from "../Service/DrumPadKeyService";
import "./DrumPadKeys.css";

function DrumPadKeys({ setAudioTitle, volume, isPowerOn, setDisplayText }) {
  const audioRefs = useRef({});

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const playAudio = (key) => {
    const _audio_ref = audioRefs.current[key];

    if (_audio_ref && _audio_ref.current && isPowerOn) {
      setAudioTitle(_audio_ref.current.title);
      _audio_ref.current.currentTime = 0;
      _audio_ref.current.volume = volume; // Set volume here (0.0 to 1.0)
      setDisplayText(key ?? "");
      _audio_ref.current.play();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toUpperCase();
      if (SampleMusics.some((item) => item.key === key)) {
        playAudio(key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [playAudio]);

  return (
    <div className="drum-keys">
      {SampleMusics.map((item) => {
        if (!audioRefs.current[item.key]) {
          audioRefs.current[item.key] = React.createRef();
        }

        return (
          <div
            key={item.key}
            className="cols drum-pad"
            onClick={() => playAudio(item.key)}
            id={item.name}
            onKeyDown={() => playAudio(item.key)}
          >
            {item.key}
            <audio
              src={item.source}
              id={item.key}
              ref={audioRefs.current[item.key]}
              title={item.name}
              className="clip"
            ></audio>
          </div>
        );
      })}
    </div>
  );
}

export default DrumPadKeys;
