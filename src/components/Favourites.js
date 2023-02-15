import {Link} from "react-router-dom";
import Navigation from "./Navigation";
import Background from "./Background";

export default function Favourites({repositoriesInformation}) {
    return (
        <>
            <Background/>
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