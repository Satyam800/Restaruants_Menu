import { createContext } from "react";

const UserContext=createContext(
 {
    userInfo:{
        name:"Satyam",
        Email:"satyamkc.nitj@gmail.com",
        project:"pratice"
    }
 }
)

 UserContext.displayName="userContext"

export default UserContext