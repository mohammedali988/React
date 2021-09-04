import React from "react";
import './seasonDisplay.css'

const seasonConfig = {
    summer: {
        text:"Lets hit the beach",
        iconName : "sun"
    },
    winter : {
        text:"Burr, it is chill",
        iconName:"snowflake",
    }
}
const getSeason = (lat, month)=>{
    if(month > 2 && month < 9){
        return lat > 0 ? "summer" : "Winter" 
    }else {
        return lat > 0 ? "Winter" : "Summer"
    }
}

const SeasonsDisplay = (props)=>{
    const season = getSeason(props.pos, new Date().getMonth());
    const { text, iconName} = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}> 
            <i className={`top-left massive ${iconName} icon`} />
            <h1>{text}</h1> 
            <i className={`top-right massive ${iconName} icon`} />
        </div>
    )
}

export default SeasonsDisplay;