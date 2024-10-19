export default function ({setQuery}){
    return ( <select name="" id="" className="filter-by-region" onChange={(e)=>{
        setQuery(e.target.value.toLowerCase())
        // console.log(e.target.value)
    }}>
        <option hidden>search by region</option>
        <option value="Africa">africa</option>
        <option value="americas">america</option>
        <option value="asia">asia</option>
        <option value="Europe">europe</option>
        <option value="Oceania">oceania</option>
    </select>)
}