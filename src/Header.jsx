import React,{useState,useEffect,useContext}from "react"
import "./sass/header.scss"
import { IoIosArrowDropdown} from 'react-icons/io';
import { BsSearch} from 'react-icons/bs';
import { CiPercent} from 'react-icons/ci';
import { MdOutlineSupportAgent} from 'react-icons/md';
import { MdOutlinePeopleOutline} from 'react-icons/md';
import { BsCart4} from 'react-icons/bs';

import Card from "./Card";

import ShimmerUI from "./ShimmerUI"
import "./sass/change-header.scss";
import {Link} from "react-router-dom"
import UserContext from "./UserContext";


const name="Help";
// add name dynamically later
let count=305;
//later change it dynamically by api



 const Header= ({user})=>{
    

    let {userInfo}= useContext(UserContext)
    console.log(userInfo)

    // useEffect(()=>{
    //     let k=  setInterval(()=>{
    //         console.log("hello");
    //     },1000)

        
    // return()=>{
    //     clearInterval(k)
    // }
    // },[])

//  Here concept of demerit of single page Application that remove by clean the code by clearInterval


  useEffect(()=>{
    api()   
},[])

    const [filteredResturant,setfilteredResturant]=useState([])
    const [allResturant,setallResturant]=useState([])
 async function api(){
let call= 
await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.3988489&lng=75.5328482&page_type=DESKTOP_WEB_LISTING')
const json= await call.json()
console.log(json);
 let resItem= await json?.data?.cards.filter((item,index)=>{
    if(item.cardType=="seeAllRestaurants")
    return item
})

setallResturant(resItem[0]?.data?.data?.cards)
setfilteredResturant(resItem[0]?.data?.data?.cards)
}




    const filterdata=(allResturant,state)=>{
        
          const datafilter=  allResturant.filter((a)=>{
                return a?.data?.name?.toLowerCase()?.includes(state?.toLowerCase())
           
            }) 
            return datafilter
    }
   
   
  
    const [state,call]=useState("")

    const change=(e)=>{
        console.log(state,"call");
        call(e.target.value)
        
    }

   

    

   
  if(!allResturant) return null
     
     return ( allResturant.length===0)?(<ShimmerUI/>):(
<>

        <div className="header ">
         
            <div className="header-child1">

                <div className="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ns9FvqOpjkxTavKyDt34Em07w8Ry6FIcLA&usqp=CAU" alt="logo"/>

                <div>
                    <b>location</b>
                    <IoIosArrowDropdown size = '30px'/>
                </div>

                </div>

                <div className="header-child1-location">

                </div>


            </div>



<div className="header-child2">

<div className="search-icon" >
<BsSearch  size = '13px'/>
<span><input placeholder="Search"  onChange={change}/>
<button onClick={ ()=>{
    const data= filterdata(allResturant,state);
  
    setfilteredResturant(data)
      console.log(filteredResturant,"data");
}}
>search</button>

</span>

</div>

<div className="offer">

<CiPercent size = '19px'/>
<Link to="./Offer"><span><b>Offers</b></span></Link>

</div>

<div className="help">
<MdOutlineSupportAgent size = '19px'/>
<Link to="./Help"><span><b>Help</b></span></Link>

</div>

<div className="customer-name">
    <MdOutlinePeopleOutline size = '19px'/>

<span><b>{userInfo.name}</b></span>


        </div>
        
        
 </div>

 <div className="cart">
    <Link to="./Cart"><BsCart4 size = '23px'/></Link>
  
</div>

</div>


<div className="list">
                
   { filteredResturant.map((resturant)=>{
           return <Link to={"/resturant/"+resturant?.data?.id}><Card {...resturant.data} key={{...resturant?.data?.id}} user={user} /></Link>
        })}
            </div>

        
        </>
    )

}



export default Header


