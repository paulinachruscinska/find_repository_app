import {Link} from "react-router-dom";
import Navigation from "./Navigation";

export default function Favourites({repositoriesInformation}) {
    return (
        <>
            <Navigation/>
            <div className='header'>Favourites</div>
            {repositoriesInformation.map(item=>{
                return(
                    <Link to={'/favourites/'+ item.id}>
                    <div className='header'>{item.name}</div>
                    </Link>
                )
            })}

        </>
    )
}