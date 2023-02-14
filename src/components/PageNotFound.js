import Navigation from "./Navigation";

export default function PageNotFound() {
    return (
        <>
            <Navigation/>
            <section className='favourites'>
                <div className='header__additional'>Ups, nie znaleziono</div>
            </section>
        </>
    )
}