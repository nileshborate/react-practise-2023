import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import store from "./store"
import { Provider } from "react-redux"

store.subscribe(()=>console.log(store.getState()));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Provider store={store}>
            <App />
        </Provider>
    </>
);

