function Shimmer (){


    return (<div className = "contries-container">

{ new Array(10).fill("sourav").map((a , index)=>{
    
    return ( <div className="country-card shimmer-card" key={index}> </div> )
 })}
    </div>)





}
export default Shimmer