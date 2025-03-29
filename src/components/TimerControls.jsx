// src/components/TimerControls.jsx

function TimerControls({ isRunning, onToggle, onReset }) {
    return (
      <div className="flex gap-4">
        <button
          onClick={onToggle}
          className="px-6 py-2 bg-green-500 text-white rounded-lg text-lg"
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={onReset}
          className="px-6 py-2 bg-red-400 text-white rounded-lg text-lg"
        >
          Reset
        </button>
      </div>
    );
  }
  
  export default TimerControls;
  