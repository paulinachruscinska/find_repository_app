import {useEffect, useState} from "react";
import axios from "axios";
import Pagination from "./Pagination";

export default function Repositories({repositoriesInformation, setRepositoriesInformation}) {
    const [search, setSearch] = useState('')
    const [repository, setRepository] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [repositoriesPerPage, setRepositoriesPerPage] = useState(10);
    const [isFavourite, setIsFavourite] = useState([]);

    //promise
    useEffect(() => {
        const fetchRepositories = () => {
            axios.get("https://api.github.com/search/repositories?q=$%7Bquery%7D")
                .then(response => setRepository(response.data.items))
        }
        fetchRepositories()
    }, [])


    useEffect(() => window.localStorage.setItem('repository', JSON.stringify(repositoriesInformation)), [repositoriesInformation])

    useEffect(() => {
        const data = window.localStorage.getItem('repository')
        if (data.length !== 0) repositoriesInformation && JSON.parse(data)
    }, [])



    const lastIndexOfRepository = currentPage * repositoriesPerPage;
    const firstIndexOfRepository = lastIndexOfRepository - repositoriesPerPage;
    //filtrowanie i paginacja w jednym
    const currentRepositories = repository.filter(({name}) => name.includes(search)).slice(firstIndexOfRepository, lastIndexOfRepository)
    const pages = repository.length / repositoriesPerPage

    const previousPage = () => currentPage > 1 ? setCurrentPage(currentPage - 1) : setCurrentPage(1);
    const nextPage = () => currentPage < pages ? setCurrentPage(currentPage + 1) : setCurrentPage(pages);
    const changeAmountOfRepositoriesPerPage = (event) => {
        event.preventDefault()
        setRepositoriesPerPage(event.target.value)
    }


    return (
        <section className='repositories'>
            <input type='search' value={search} onChange={(e) => setSearch(e.target.value)}/>
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
                {currentRepositories.map(({
                                              id,
                                              name,
                                              owner: {login},
                                              stargazers_count,
                                              created_at,
                                              html_url,
                                              description,
                                          }) => {
                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{login}</td>
                            <td>{stargazers_count}</td>
                            <td>{created_at.match(/^.{10}/).join('')}</td>
                            <td>
                                <button className='button__add-to-favourite' onClick={(event) => {
                                    event.preventDefault()
                                    if (isFavourite.includes(id, name)) {
                                        setIsFavourite(state => state.filter(favouriteId => favouriteId !== id))
                                        setRepositoriesInformation(state => state.filter(favouriteName => favouriteName !== name))
                                    } else {
                                        setIsFavourite(state => [...state, id])
                                        setRepositoriesInformation(state => [...state, {
                                            'id': id,
                                            'owner': login,
                                            'name': name,
                                            'stargazers_count': stargazers_count,
                                            'created_at': created_at,
                                            'html_url': html_url,
                                            'description': description
                                        }])
                                    }
                                }}>{!isFavourite.includes(id) ? 'Dodaj do ulubionych' : 'Usuń z ulubionych'}</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <Pagination
                changeAmountOfRepositoriesPerPage={changeAmountOfRepositoriesPerPage}
                previousPage={previousPage}
                nextPage={nextPage}
                repositoriesPerPage={repositoriesPerPage}
            />
        </section>
    )
}