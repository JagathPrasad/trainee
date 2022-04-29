import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppWrapper from './App';
import './App.css';
import 'tw-elements';
//import UserWrapper from './store/user';
// import {AuthProvider} from './context/AuthProvider';
import { StateProvider } from './store/user'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider>
      <AppWrapper />
    </StateProvider>
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>

//     <App />

//   </React.StrictMode>,
//   document.getElementById('root')
// );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
