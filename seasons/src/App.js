import './App.css';
import { useState, useEffect } from 'react';
import SeasonsDisplay from './seasonDisplay';
import Loader from './loader';

function App() {

  const [pos, setPos] = useState(null);
  const [error, setError] = useState("");

  useEffect( ()=> {
    window.navigator.geolocation.getCurrentPosition(
      position => setPos(position.coords.latitude),
      err => setError(err.message)
    )
  })

  const renderContent = ()=>{
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
    else return <Loader message="please accept the relocation"/>
  }

  return (
    <div >
      {renderContent()}
    </div>
  );
}

export default App;
