import React from 'react';
import ReactDOM from 'react-dom/client';
import './resources/fonts/Gilroy/Gilroy-Bold.ttf';
import './resources/fonts/Gilroy/Gilroy-Semibold.ttf';
import './index.css';

import App from './components/App';

ReactDOM.createRoot( 
  document.querySelector('#root')
).render(<App />)