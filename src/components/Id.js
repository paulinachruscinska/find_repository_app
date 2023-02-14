import Navigation from "./Navigation";
import {useParams} from "react-router-dom";

export default function Id({repositoriesInformation}) {
       const {id} = useParams()
    return (
        <>
            <Navigation/>
            <section className='favourites__id'>
                {repositoriesInformation.filter(item=>item.id===parseFloat(id)).map(item=>{
                    return(
                        <>
                        <p className='text'>{item.name} by {item.owner}</p>
                        <p className='text'>{item.description}</p>
                            <a href={item.html_url}>url</a>
                    <p className='text'>{item.created_at}</p>
                    <p className='text'>{item.stargazers_count}</p>
                        </>
                    )
                })}
            </section>
        </>
    )
}