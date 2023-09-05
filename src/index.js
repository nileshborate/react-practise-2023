import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Card 
        imgsrc="https://wallpapercave.com/wp/wp4056399.jpg"
        title="A Netflix Original Series"
        sname="DARK"
        link="https://www.netflix.com/in/title/80100172"
    />

    <Card 
        imgsrc="https://wallpapercave.com/wp/wp4056399.jpg"
        title="A Netflix Original Series"
        sname="DARK"
        link="https://www.netflix.com/in/title/80100172"
    />
  </>
);

