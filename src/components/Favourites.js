import {Link} from "react-router-dom";
import Navigation from "./Navigation";

export default function Favourites({repositoriesInformation}) {
    return (
        <>
            <Navigation/>
            <section className='favourites'>
                <h2 className='header__additional'>Ulubione repozytoria</h2>
                    {repositoriesInformation.map(item => {
                        return (
                                <Link to={'/favourites/' + item.id} key={item.id}>
                                    <div>{item.name}</div>
                                </Link>
                        )
                    })}
            </section>
        </>
    )
}