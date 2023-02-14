import Navigation from "./Navigation";
import {useParams} from "react-router-dom";

export default function Id({repositoriesInformation}) {
    const {id} = useParams()
    return (
        <>
            <Navigation/>
            <section className='favourites__id'>
                {repositoriesInformation.filter(item => item.id === parseFloat(id)).map(item => {
                    return (
                        <>
                            <div className='favourites__id--text'>
                                <p className='text-bold'>Repozytorium</p>
                                <p className='text'>{item.name}</p>
                            </div>
                            <div className='favourites__id--text'>
                                <p className='text-bold'>Twórca</p>
                                <p className='text'>{item.owner}</p>
                            </div>
                            <div className='favourites__id--text'>
                                <p className='text-bold'>Opis</p>
                                <p className='text'>{item.description}</p>
                            </div>
                            <div className='favourites__id--text'>
                                <p className='text-bold'>Adres</p>
                                <p className='text'><a href={item.html_url}>link</a></p>
                            </div>
                            <div className='favourites__id--text'>
                                <p className='text-bold'>Data utworzenia</p>
                                <p className='text'>{item.created_at.match(/^.{10}/).join('')}</p>
                            </div>
                            <div className='favourites__id--text'>
                                <p className='text-bold'>Ilość gwiazdek</p>
                                <p className='text'>{item.stargazers_count}</p>
                            </div>
                        </>

                    )
                })}


            </section>
        </>
    )
}