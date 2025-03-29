// src/components/SoundToggle.jsx

function SoundToggle({ isMuted, onToggle }) {
    return (
      <button
        onClick={onToggle}
        className="mt-4 px-4 py-2 bg-yellow-200 text-yellow-900 rounded-lg text-sm font-semibold shadow"
      >
        {isMuted ? "🔇 Sound Off" : "🔊 Sound On"}
      </button>
    );
  }
  
  export default SoundToggle;
  