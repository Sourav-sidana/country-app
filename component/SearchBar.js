import React from "react";

export default function SearchBar ({setQuery}){
    return (
            <input id="input" onChange={(e)=>
                setQuery(e.target.value.toLowerCase())
                
                
             } type="text" placeholder="Search for a country... " />
    )
}