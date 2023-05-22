import First from './components/First';

import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else {
      setMode('light');
            document.body.style.backgroundColor = "white";
    }
  }

  return (
    <div>
      {/* <First /> */}
      <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter Text to Analyze"/>
        {/* <About/> */}
      </div>
      
    </div>
  );
}

export default App;
