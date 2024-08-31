import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { Test } from './Test';
import {App} from './App';
import { Toaster } from 'react-hot-toast';
import {Provider} from "react-redux"
import store from './REDUX/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    <Toaster/>
    </Provider>
    {/* <Test/> */}
  </React.StrictMode>
);

