// src/components/ThemeSelector.jsx

const THEME_CLASSES = {
    green: "bg-green-200",
    pink: "bg-pink-200",
    blue: "bg-blue-200",
  };
  
  function ThemeSelector({ currentTheme, onThemeChange }) {
    const themes = [
      { name: "Green", value: "green" },
      { name: "Pink", value: "pink" },
      { name: "Blue", value: "blue" },
    ];
  
    return (
      <div></div>
      /**<div className="flex gap-4 mt-4">
        {themes.map(({ name, value }) => (
          <button
            key={value}
            onClick={() => onThemeChange(value)}
            style={{ backgroundColor: value }}
            className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all duration-200 shadow-md ${THEME_CLASSES[value]} ${
              currentTheme === value ? "ring-4 ring-offset-2 ring-gray-700" : ""
            }`}
            title={name}
          >
            {name}
          </button>
        ))}
      </div>*/
    );
  }
  
  export default ThemeSelector;