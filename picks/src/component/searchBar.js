import React from "react";
import { useState } from "react";

const SearchBar = (props)=>{
    const[term, setTerm] = useState("")

    const onchange = (e)=>{
        setTerm(e.target.value)
    };

    const onsubmit = (e)=>{
        e.preventDefault();
        props.onSubmit(term)
    };

    return (
        <div className="ui segment"> 
            <form onSubmit={onsubmit} className="ui form">
                <div className="field"> 
                    <label>Search bar</label>
                    <input 
                        type="text"
                        value={term} 
                        onChange={onchange}
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchBar;