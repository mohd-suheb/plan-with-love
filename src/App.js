
import React, { useState } from "react";
import data from "./data"
// import Tours from "./components/Tours";
function Tours(){



  const [tours, setTours] = useState(data);

  function removetour({id}){
    const newtouor = tours.filter(tour => tour.id !== id);
    setTours( newtouor);

  }

  if(tours.length === 0){

    return(

      <div className="freah">
        <h2> o Tours left</h2>
        <button onClick={setTours(data)}>
          Refresh
        </button>

      </div>
    )
  }

  return(
    <div>

      <Tours tours = {tours} removetour = {removetour}></Tours>
      
    </div>
  )
}
export default Tours;