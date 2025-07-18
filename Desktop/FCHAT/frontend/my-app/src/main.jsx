import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { store } from '../src/redux/store.js';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);



























// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { store } from '../src/redux/store.js'
// import { Provider } from 'react-redux'
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
    
//     <Provider store={store}><App /></Provider>
    
//   </StrictMode>,
// )
