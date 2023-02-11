import {Link} from "react-router-dom";
import Navigation from "./Navigation";

export default function Favourites() {
    return (
        <>
            <Navigation/>
            <div className='header'>Favourites</div>
            <Link to='/favourites/:id'>Click</Link>
        </>
    )
}