// src/components/DurationButtons.jsx

function DurationButtons({ setTime }) {
    const durations = [1, 5, 10, 20, 30];
  
    return (
      <div className="flex gap-2 flex-wrap justify-center">
        {durations.map((min) => (
          <button
            key={min}
            onClick={() => setTime(min * 60)}
            className="px-4 py-2 bg-blue-200 text-blue-900 rounded-lg text-sm font-semibold shadow"
          >
            {min} min
          </button>
        ))}
      </div>
    );
  }
  
  export default DurationButtons;
  