import React, { Children,Suspense, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./sass/header.scss";
import reportWebVitals from './reportWebVitals';
import "./sass/card.scss";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import Help from "./Help"

import Cart from "./Cart"
import Error from "./Error"
import Header from './Header';
import Resturant from "./Resturant"
import {Profile} from "./Profile"
import { lazy } from 'react';
import UserContext from './UserContext';

let Offer= lazy(()=> import ("./Offer"))
const App=()=>{

    let [userInfo,setuserInfo]= useState({
        userInfo:{
            name:"chandra"

        }
    })
    
    return(
        <>
       <UserContext.Provider value={userInfo}>
       
        <Outlet/>
       </UserContext.Provider>
        </>
    )
}

let approuter= createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Header  />
            },
          
            
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/offer",
                element:<Offer/>
            }
           
        ],

    },

    {
        path:"/resturant/:id",
        element:<Resturant/>
    },
    {
        path:"/help",
        element:<Help/>,
        children:[
            {
                path:'profile',  // without slash means take the parent path and add to it if use slash means "localhost:1234/profile" simply slash means from the root
                element:<Profile/>
            }
        ]
    },
   
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router={approuter}/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


