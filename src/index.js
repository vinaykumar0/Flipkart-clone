import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit"
import { Toaster } from 'react-hot-toast';
import rootReducer from './reducers';
import { BrowserRouter } from 'react-router-dom';


const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Toaster/>
      <App />
    </BrowserRouter>
  </Provider> 
);

