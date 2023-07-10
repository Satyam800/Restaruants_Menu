import React,{useState,useEffect} from "react";
import {useParams} from "react-router-dom"
import HeaderChange from './HeaderChange'
import  './sass/menu.scss'
import useResturant from "./useResturant";

const Resturant=()=>{

    let {id}= useParams()

let resturantMenu= useResturant(id)

    return(
        <>
        <HeaderChange/>
       <div className="menu">
      
        <h2>{resturantMenu?.name}</h2>
       
       <div className="menu-image">
       <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+resturantMenu.cloudinaryImageId}/>
       </div>
<div>
<h1>Rs. {resturantMenu?.costForTwo}</h1>
</div>
       <div className="menu-price">


       </div>
        
        <div className="menu-button">
          <div className="menu-button-cart">ADD TO CART</div>

          <div className="menu-button-whistlist">ADD TO WHISTLIST</div>

        </div>
       </div>
        </>
    )
}
export default Resturant