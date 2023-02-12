import {useEffect, useState} from "react";
import axios from "axios";
import Pagination from "./Pagination";

export default function Repositories() {
    const [repository, setRepository] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [repositoriesPerPage, setRepositoriesPerPage] = useState(10);
    const [isFavourite, setIsFavourite] = useState([])



    useEffect(() => {
        axios.get("https://api.github.com/search/repositories?q=$%7Bquery%7D").then(response => setRepository(response.data.items))
    }, [])

    const lastIndexOfRepository = currentPage * repositoriesPerPage;
    const firstIndexOfRepository = lastIndexOfRepository - repositoriesPerPage;
    const currentRepositories = repository.slice(firstIndexOfRepository, lastIndexOfRepository)
    const pages = repository.length / repositoriesPerPage

    const previousPage = () => currentPage > 1 ? setCurrentPage(currentPage-1) : setCurrentPage(1);
    const nextPage = () => currentPage < pages ? setCurrentPage(currentPage+1) : setCurrentPage(pages);
    const changeAmountOfRepositoriesPerPage =(event)=> setRepositoriesPerPage(event.target.value)

    return (
        <section className='repositories'>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nazwa repozytorium</th>
                    <th>Właściciel</th>
                    <th>Ilość gwiazdek</th>
                    <th>Data utworzenia</th>
                    <th>Ulubione</th>
                </tr>
                </thead>
                <tbody>
                {currentRepositories.map(({id, name, owner: {login}, stargazers_count, created_at}) => {
                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{login}</td>
                            <td>{stargazers_count}</td>
                            <td>{created_at.match(/^.{10}/).join('')}</td>
                            <td><button onClick={(event)=>{
                                event.preventDefault()
                                if(isFavourite.includes(id)){
                                    setIsFavourite(state=>state.filter(favouriteId => favouriteId !== id))
                                } else{
                                    setIsFavourite(state=>[...state, id])
                                }
                            }}>{!isFavourite.includes(id)? 'Dodaj do ulubionych' : 'Usuń z ulubionych'}</button></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <Pagination
                changeAmountOfRepositoriesPerPage ={changeAmountOfRepositoriesPerPage}
                previousPage={previousPage}
                nextPage={nextPage}
            />
        </section>
    )
}