
import React from "react";




const Card = (props) =>{
  const {name,email,id} = props;
  return(
    
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
       <h2>ROBO FRIENDS NO.{id}</h2>
      <img src={`https://robohash.org/${id}?200x200`}alt="robo-friends-img"></img>
      <div className="tc">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
   
  );
}

export default Card;