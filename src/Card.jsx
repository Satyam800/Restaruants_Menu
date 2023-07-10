import React from "react" ;
import "./sass/card.scss";

const Card = ({cloudinaryImageId,name,cuisines,area,user})=>{
    
    

 return (
 <>
        <div className="card">

     <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
      cloudinaryImageId } alt="food"
      />
     

     <div>{name}</div>

     <div>{cuisines}</div>
     <div>{area}</div>
     <div>{user}</div>
   

 </div>

 </>

 )
}

export default Card;