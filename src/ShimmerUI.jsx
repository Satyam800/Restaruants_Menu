import React from 'react'
import './sass/shimmer.scss'


const ShimmerUI=()=>{

    return(
        <>
        
        <div className='blow'>

{
    Array(18)
    .fill("")
    .map((a,index)=>{
        return <div className='shimmer' key={index}></div>
  
    })
}

</div>
        </>
    )
}
export default ShimmerUI