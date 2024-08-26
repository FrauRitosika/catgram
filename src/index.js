import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { imageList } from '../src/data/get-data';

console.log(imageList);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App images={imageList} />
  </React.StrictMode>
);