import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {  BrowserRouter } from 'react-router-dom'
import { createStore } from "redux";
import contactReducer from './redux/reducers/contactReducer';
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux';
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/react-toastify/dist/ReactToastify.css'


const store = createStore(contactReducer,composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
   
);

