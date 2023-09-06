import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import SeriesData from './SeriesData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <h1 className='heading_style'>Web Series List</h1>
    {
      SeriesData.map((obj) => {
        console.log(obj)
        return(
          <Card 
          imgsrc={obj.imgsrc}
          title={obj.title}
          sname={obj.sname}
          link={obj.link}
          />
        )
      })
    }
    
  </>
);

