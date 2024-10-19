import { useRouteError } from "react-router-dom"


function Error(){
    const err = useRouteError()
    console.log(err)
    return (
        <div>something went wrong
            <h3>{err.status}:{err.statusText}</h3> </div>
    )
}
export default Error