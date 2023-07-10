import React, {useState} from "react"
import {Outlet} from "react-router-dom"

const Section=({title,data,isVisible,setisVisible})=>{

   

    return(
        <>
        <div>
            {title}
        </div>

        {
            isVisible? <button onClick={()=>{setisVisible()}}>{isVisible?"show less":"Show more"}</button>:
            <button onClick={()=>{setisVisible()}}>{isVisible?"show less":"Show more"}</button>
        }
        
      
      
     {isVisible&&<p>{data}</p>}
      
        
        </>
    )
}

const Help=()=>{
   
    
    // let [maint,setmaint]=useState({
    //     dummy:false,
    //     carrers:false
    // })

    let [maint,setmaint]= useState('')
    return(
        <>
        <h1>This is Help section.....</h1>

<Section 

isVisible={maint==1}
setisVisible={()=> setmaint(1)}


key="1" title={"Dummy"} data={`In and graphic design Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.

Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin.

Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets.[1] Lorem ipsum was introduced to the digital world in the mid-1980s, when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker. Other popular word processors, including Pages and Microsoft Word, have since adopted Lorem ipsum,[2] as have many LaTeX packages,[3][4][5] web content managers such as Joomla! and WordPress, and CSS libraries such as Semantic UI`} />


<Section


isVisible={maint==2}
setisVisible={()=> setmaint(2)}

key ="2" title={"Careers"} data={`The Lorem ipsum text is derived from sections 1.10.32 and 1.10.33 of Cicero's 'De finibus bonorum et malorum'.[7][8] The physical source may have been the 1914 Loeb Classical Library edition of De finibus, where the Latin text, presented on the left-hand (even) pages, breaks off on page 34 with "Neque porro quisquam est qui do-" and continues on page 36 with "lorem ipsum ...", suggesting that the galley type of that page was mixed up to make the dummy text seen today.[1]`}/>



        <Outlet/>
        </>
    )
}
export default Help