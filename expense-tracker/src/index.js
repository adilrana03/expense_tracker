import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from './context/context';
import { SpeechProvider } from '@speechly/react-client';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SpeechProvider appId='e9fa84bb-ba55-4422-93a2-c27eaeea1148' language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider >
);

