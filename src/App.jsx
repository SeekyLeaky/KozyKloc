import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from "./components/Timer.jsx";
import React from 'react'
import logo from './logo.svg';

//uncomment for original
///** @type {import('tailwindcss').Config} */
//module.exports = {
//  content: [
//    './src/**/*.{js, jsx, ts, tsx}', //Path to React components/files
//  ],
//  theme: {
//    extend: {},
//  },
//  plugins: [],
//}

// all below nw
function App() {
  //const [bgColor, setBgColor] = useState('bg-white'); // initial Tailwind class
  const [bgColor, setBgColor] = useState('#ffffff');

  const handleChangeColor = () => {
    // Example: cycle through some colors
    const colors = ['#ffffff', '#aaaaff', '#aaffaa', '#ffaaaa'];
    const currentIndex = colors.indexOf(bgColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    setBgColor(colors[nextIndex]);
  };
  return (
    <div style={{ backgroundColor: bgColor }}>
    <div className="p-4 bg-green-200 text-black">
      
    </div>
    <div className="p-4 bg-green-200 text-black">
    <Timer></Timer>
    </div>
    <div className="p-4 bg-green-200 text-black">
      
    </div>
    <div style={{ backgroundColor: bgColor }}>
      <h3 className="text-xl mb-4"></h3>
      <button
        onClick={handleChangeColor}
        className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
      >
        Change Color
      </button>
    </div>
    </div>
    
  );
}

export default App;