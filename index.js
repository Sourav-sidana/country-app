
import CountryPage from "./CountryPage"
import React from "react"
import{createRoot} from 'react-dom/client'
import Header from "./component/Header"
import Body from "./Body"
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom'
import Error from "./component/Error"
import Contact from "./Contact"
import { useState } from "react"
import { themeContext } from "./contexts/ThemeContext"
import { Myprovider } from "./contexts/ThemeContext"

const App =()=>{
  

    return(
       <Myprovider>
        <Header />
        <Outlet  />
       </Myprovider>
    )
}

const allRouter = createBrowserRouter([
    {
        path:"/",
        element : <App />,

        children :[
          
          {  path:"/",
        element : <Body />},

          {  path:"/:Country",
        element : <CountryPage />},

          {  path:"/Contact",
        element : <Contact />},
         
        ],
        errorElement:<Error/>
    }
    ]
)

// console.log(root)
const root = createRoot(document.querySelector('#root'))
root.render(<RouterProvider router={allRouter} />)



export default App


