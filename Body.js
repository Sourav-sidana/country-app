import { useState } from "react"
import SearchBar from "./component/SearchBar"
import SelectOption from "./component/SelectOption"
import CountryList from "./component/CountryList"
import { useOutletContext } from "react-router-dom"
import { themeContext } from "./contexts/ThemeContext"
import { useContext } from "react"

function Body(){
    const [query, setQuery] = useState("")
    
    // const [isdark] = useOutletContext()
    const  [isdark] = useContext(themeContext)
    // console.log(a)
    return(
        <main className={`${isdark ? "dark" : ""}`}>
        <div className="search-filter-container">
    <SearchBar setQuery={setQuery} />
    <SelectOption setQuery={setQuery} />
    </div>
    <CountryList query={query} />
        </main>
    )
}
export default Body