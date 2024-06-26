import React, { useState } from "react";
import data from './data';
import Tours from "./Components/Tours";

const App = () => {

  const [tours, setTours] = useState(data);

  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !==id);
    setTours(newTours);
  }
  if(tours.length === 0){
    return (
        <div className="refresh">
          <h2> no tours left</h2> 
          <button className="btn-white" onClick={()=> setTours(data)}> refresh</button>

        </div>
    );
  }
  return (
    <div className="app">

   
    <Tours tours={tours}  removeTour={removeTour}> </Tours>
    </div>
  );
};

export default App;
