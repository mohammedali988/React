import unsplash from "./api/unsplash";
import React, { useState } from "react"
import SearchBar from "./component/searchBar";

const App = ()=>{

  const [image, setImage] = useState([])

  const onSearchSubmit = (term) => {
    unsplash.get(
      '/photos/',{
        params:{query:term},
      }
    ).then( response => {
      return setImage(response.data)
    })
  }

  return (
    <div className="ui container" style={{marginTop:"10px"}}> 
      <SearchBar onSubmit={onSearchSubmit}/>
      We found: {image.length} photos
    </div>
  )
}

export default App;