import './App.css';
import { useState, useEffect } from 'react';
import SeasonsDisplay from './seasonDisplay';

function App() {

  const [pos, setPos] = useState(null);
  const [error, setError] = useState("");

  useEffect( ()=> {
    window.navigator.geolocation.getCurrentPosition(
      position => setPos(position.coords.latitude),
      err => setError(err.message)
    )
  })

  if(error && !pos){
    return(
      <div>
        error:{error}
      </div>
    )
  }
  else if(!error && pos){
    return(
      <SeasonsDisplay pos={pos}/>
    )
  }
  else return <div> Loading!</div>
}

export default App;
