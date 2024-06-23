import { useEffect } from 'react';
import OneSignal from 'react-onesignal';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    OneSignal.init({
      appId: "75f26761-cd6f-457d-a5ef-a482853c089a",
      apiKey: 'OWRkOTc4YzgtZjM5NS00MGU2LWFiNDMtNWMxMWZkNmEyNzJj', 
    })
    .then(() => {
      // OneSignal.Notifications.requestPermission();
      console.log('OneSignal.Notifications.requestPermission();')
    })
  }, []);

  const foo = () => {
    OneSignal.Notifications.requestPermission();
  }
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
