import {Link} from "react-router-dom";
import Navigation from "./Navigation";

export default function Favourites({repositoriesInformation}) {
    return (
        <>
            <Navigation/>
            <section className='favourites'>
                <h2 className='header__additional'>Favourites</h2>
                {repositoriesInformation.map(item => {
                    return (
                        <Link to={'/favourites/' + item.id} key={item.id}>
                            <div className='text'>{item.name}</div>
                        </Link>
                    )
                })}
            </section>
        </>
    )
}