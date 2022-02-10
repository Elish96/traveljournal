import React from 'react';
import './App.css';
import Head from './components/Head';
import TourCard from './components/TourCard';
import Data from './components/Data';


function App() {

  const myTourCard = Data.map(item =>{
    return (
      <TourCard
        key={item.id}
        items={item}

      />
    )
  })

  return (
    <div className="App">
      <Head/>
    <div id="tourCard">
          {myTourCard}
    </div>
   
    </div>
  );
}

export default App;
