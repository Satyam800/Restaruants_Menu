import React,{useEffect,useState} from "react"

const useResturant=(id)=>{

console.log(id);

    useEffect(()=>{

        Menu()
    },[])
    
    
    let [resturantMenu,setResturantMenu]= useState([])
    async function Menu(){
        let data=await 
        fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.3988489&lng=75.5328482&restaurantId="+id+"&submitAction=ENTER")
    let json= await data.json()
    console.log(json)
    setResturantMenu(json?.data?.cards[0]?.card?.card?.info)
    }
    
return resturantMenu

}
export default useResturant