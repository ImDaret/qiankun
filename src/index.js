import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'vue',
    entry: '//localhost:8080',
    container: '#main',
    activeRule: '/vue',
  },
]);

start();

const letUsGo = (subapp) => {
  window.history.pushState(null, subapp, subapp) 
}

ReactDOM.render(
  <React.StrictMode>
    <div onClick={letUsGo('/vue')}>vue</div>
    <div id="main"></div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
