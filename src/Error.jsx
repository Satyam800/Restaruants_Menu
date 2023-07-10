import React from "react"
import { useRouteError } from "react-router-dom"
const Error= ()=>{
    let err=useRouteError()
   
    return (

<>
<h1>
    Oops! Something went wrong...
   <p>{err.data}</p> 
   <p>{err.status}</p>
</h1>


</>

    )
}
export default Error