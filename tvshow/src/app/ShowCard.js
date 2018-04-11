import React from 'react'
import { Link } from "react-router-dom";

const ShowCard = (props) => {
  console.log(props)
  
  return(
  
  <Link to={`/ShowInfoPage/${props.show.id}`}>
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image">
        <img src={props.show.image.medium} alt="" />
          
        </div>
        <div className="card-content">
          <p>{props.show.name}</p>
        </div>
        
      </div>
    </div>
    </Link>
  
)
}

export  {ShowCard};