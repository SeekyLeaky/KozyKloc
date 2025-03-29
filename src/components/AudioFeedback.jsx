// src/components/AudioFeedback.jsx
import { useEffect, useRef } from "react";

function AudioFeedback({ playTick, triggerAlarm }) {
  const tickRef = useRef(null);
  const alarmRef = useRef(null);

  useEffect(() => {
    let tickInterval;
    if (playTick && tickRef.current) {
      tickInterval = setInterval(() => {
        try {
          tickRef.current.currentTime = 0;
          tickRef.current.volume = 0.5;
          tickRef.current.play();
        } catch (e) {
          console.warn("Tick sound error:", e);
        }
      }, 1000);
    }
    return () => clearInterval(tickInterval);
  }, [playTick]);

  useEffect(() => {
    if (triggerAlarm && alarmRef.current) {
      try {
        alarmRef.current.volume = 1;
        alarmRef.current.play();
        alert("Time's up!");
      } catch (e) {
        console.warn("Alarm sound error:", e);
      }
    }
  }, [triggerAlarm]);

  return (
    <>
      <audio
        ref={tickRef}
        src="https://actions.google.com/sounds/v1/alarms/beep_short.ogg"
        preload="auto"
      />
      <audio
        ref={alarmRef}
        src="https://www.soundjay.com/button/sounds/beep-07.mp3"
        preload="auto"
      />
    </>
  );
}

export default AudioFeedback;
