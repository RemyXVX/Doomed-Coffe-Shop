import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './state/store';
import App from './pages/App';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
