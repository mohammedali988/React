import React from "react"
import SearchBar from "./component/searchBar";

const App = ()=>{

  const onSearchSubmit = (term) => {
    console.log(term,"here")
  }

  return (
    <div className="ui container" style={{marginTop:"10px"}}> 
      <SearchBar onSubmit={onSearchSubmit}/>
    </div>
  )
}

export default App;