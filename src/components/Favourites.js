import {Link} from "react-router-dom";
import Navigation from "./Navigation";

export default function Favourites() {
    return (
        <>
            <Navigation/>
            <h1>Favourites</h1>
            <Link to='/favourites/:id'>Click</Link>
        </>
    )
}