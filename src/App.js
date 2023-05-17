import First from './components/First';

import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

function App() {
  return (
    <div>
      {/* <First /> */}
      <NavBar title="TextUtils" />
      <div className="container">
      <TextForm heading="Enter Text to Analyze"/>
      </div>
      
    </div>
  );
}

export default App;
