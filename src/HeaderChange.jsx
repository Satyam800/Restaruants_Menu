import React from "react"
import "./sass/change-header.scss"
import { FcClearFilters} from 'react-icons/fc';
import { BsSearch} from 'react-icons/bs';
const HeaderChange=()=>{
let count=5

    return(
       
            <>
             <div className="header-alternate">
         
             <div className="resturant-count">
                 {count} resturant
             
             </div>
             
             <div className="header-alternate-item">
             <div className="search-icon2">
             <BsSearch  size = '13px'/>
             <span><b>Search</b></span>
             
             </div>
             
             <div>
                 relevance
             </div>
             <div>
                 Delivery Time
             </div>
             
             <div>Rating</div>
             
             <div> cost:Low to High</div>
             
             <div className="filter">
                 
              <span>Filter</span>
              <FcClearFilters size = '24px'/>
             </div>
             
             
             
             
             </div>
             
             
             </div>
             </>
            
         
    )
}
export default HeaderChange