import { createContext } from "react";
import { useState } from "react";
 export const themeContext = createContext()
//  console.log(themeContext) //this returns an object

 export function Myprovider({children}){
    const [isdark, SetDark] = useState(JSON.parse(localStorage.getItem("isdark")))
return(
<themeContext.Provider value={[isdark, SetDark]}>
{children}
</themeContext.Provider>
)
 }