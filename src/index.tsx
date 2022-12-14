import React from 'react';
import './index.css';
import App from './App';
import {store} from './store'
import {Provider} from 'react-redux'
import { createRoot } from 'react-dom/client';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement!)

root.render(<Provider store={store}>
  <App />
  </Provider>)
