import React from 'react';
import Slide from './Slide';

function App() {

  const slide =[
    {
      id:'slide1',
      text:'Slide1'
    },
    {
      id:'slide2',
      text:'Slide2'
    },
    {
      id:'slide3',
      text:'Slide3'
    }
  ]

  return (
   <div>
     <Slide slides={slide}/>
   </div>
  );
}

export default App;
