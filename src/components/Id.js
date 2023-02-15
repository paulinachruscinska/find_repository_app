import Navigation from "./Navigation";
import {useParams} from "react-router-dom";
import Background from "./Background";

export default function Id({repositoriesInformation}) {
    const {id} = useParams()
    return (
        <>
            <Background/>
            <Navigation/>
            <section className='favourites__id'>
                {repositoriesInformation.filter(item => item.id === parseFloat(id)).map(({name, owner, description, html_url, created_at, stargazers_count})=> {
                    return (
                        <div key={id}>
                            <div className='favourites__id--text'>
                                <p className='text-bold'>Repozytorium</p>
                                <p className='text'>{name}</p>
                            </div>
                            <div className='favourites__id--text'>
                                <p className='text-bold'>Twórca</p>
                                <p className='text'>{owner}</p>
                            </div>
                            <div className='favourites__id--text'>
                                <p className='text-bold'>Opis</p>
                                <p className='text'>{description}</p>
                            </div>
                            <div className='favourites__id--text'>
                                <p className='text-bold'>Adres</p>
                                <p className='text'><a href={html_url}>link</a></p>
                            </div>
                            <div className='favourites__id--text'>
                                <p className='text-bold'>Data utworzenia</p>
                                <p className='text'>{new Date(created_at).toLocaleString().match(/^.{10}/).join('')}</p>
                            </div>
                            <div className='favourites__id--text'>
                                <p className='text-bold'>Ilość gwiazdek</p>
                                <p className='text'>{stargazers_count}</p>
                            </div>
                        </div>
                    )
                })}
            </section>
        </>
    )
}