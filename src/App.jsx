import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color, setColor] = useState("black");
  
   setTimeout(() => {
      setColor("pink")
    }, 2000);
  
  return (
    <div>
      <div
        style={{
          backgroundColor: color,
          paddingTop: 20,
          width: 400,
          height: 80,
          margin: 'auto'
        }}
      />
    </div>
  );
}

export default App;
