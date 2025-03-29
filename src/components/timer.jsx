// src/components/Timer.jsx
import { useState, useEffect, useRef } from "react";
import DurationButtons from "./DurationButtons";
import TimerControls from "./TimerControls";
import AudioFeedback from "./AudioFeedback";
import SoundToggle from "./SoundToggle";
import ThemeSelector from "./ThemeSelector";

function Timer() {
  const DEFAULT_TIME = 1 * 60;
  const [timeLeft, setTimeLeft] = useState(DEFAULT_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [theme, setTheme] = useState("green");
  const timerRef = useRef(null);

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60).toString().padStart(2, "0");
    const seconds = (secs % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(DEFAULT_TIME);
  };

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (!isRunning || timeLeft === 0) {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning, timeLeft]);

  const bgClass = theme === "green"
    ? "bg-green-200"
    : theme === "pink"
    ? "bg-pink-200"
    : theme === "blue"
    ? "bg-blue-200"
    : "bg-white";

  return (
    <div className={`min-h-screen w-full ${bgClass} transition-colors duration-500`}>
      <div className="flex flex-col items-center justify-center gap-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800">🕰️ KozyKloc</h1>

        <ThemeSelector currentTheme={theme} onThemeChange={setTheme} />

        <DurationButtons
          setTime={(seconds) => {
            setIsRunning(false);
            setTimeLeft(seconds);
          }}
        />

        <div className="text-6xl font-mono text-gray-700"><h1>{formatTime(timeLeft)}</h1></div>

        <TimerControls
          isRunning={isRunning}
          onToggle={toggleTimer}
          onReset={resetTimer}
        />

        <SoundToggle isMuted={isMuted} onToggle={() => setIsMuted((prev) => !prev)} />

        <AudioFeedback
          playTick={isRunning && timeLeft > 0 && !isMuted}
          triggerAlarm={timeLeft === 0}
          muted={isMuted}
        />
      </div>
    </div>
  );
}

export default Timer;