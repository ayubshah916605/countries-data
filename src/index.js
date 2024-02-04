import React from 'react';
// import ReactDOM from 'react-dom';
import {createRoot} from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext.jsx';
import { Provider } from 'react-redux';
import { store } from './components/redux/store.jsx';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
