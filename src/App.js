import First from './components/First';

import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
 /* the alert gets removed after some time */
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0D0D0D';
      showAlert("Dark mode has been enabled");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled");
    }
  }

  return (
    <div>
      {/* <First /> */}
      <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter Text to Analyze" mode={mode} />
        {/* <About/> */}
      </div>
      
    </div>
  );
}

export default App;
