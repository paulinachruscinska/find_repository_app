import {Link} from "react-router-dom";

export default function Favourites() {
    return (
        <>
            <h1>Favourites</h1>
            <Link to='/favourites/:id'>Click</Link>
        </>
    )
}