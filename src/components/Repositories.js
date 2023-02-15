import {useEffect, useState} from "react";
import axios from "axios";
import Pagination from "./Pagination";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";

export default function Repositories({setRepositoriesInformation}) {
    const [search, setSearch] = useState('')
    const [repository, setRepository] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [repositoriesPerPage, setRepositoriesPerPage] = useState(10);
    const [isFavourite, setIsFavourite] = useState(()=>{
        const saved = window.localStorage.getItem('favourite')
        const initialValue = JSON.parse(saved)
        return initialValue || ""
    });
    const [sorted, setSorted] = useState({ sorted: "stargazers_count", reversed: false });
    const [isChangeIcon, setChangeIcon] = useState(false)



    //promise
    useEffect(() => {
        const fetchRepositories = () => {
            axios.get("https://api.github.com/search/repositories?q=$%7Bquery%7D")
                .then(response => setRepository(response.data.items))
        }
        fetchRepositories()
    }, [])

    //sessionStorage dla search
    useEffect(()=>{
        if(window.sessionStorage.getItem('searching')){
            setSearch(window.sessionStorage.getItem('searching'))
        }
    },[])

    useEffect(()=>{
        window.sessionStorage.setItem('searching', search)
    },[search])

    //localStorage dla isFavourite
    useEffect(()=>{
        window.localStorage.setItem('favourite', JSON.stringify(isFavourite))
    },[isFavourite])

    const lastIndexOfRepository = currentPage * repositoriesPerPage;
    const firstIndexOfRepository = lastIndexOfRepository - repositoriesPerPage;

    //filtrowanie i paginacja w jednym
    const searchedRepositories = search==='' ? [] : repository.filter(({name})=>name.includes(search))
    const currentRepositories = searchedRepositories.slice(firstIndexOfRepository, lastIndexOfRepository)
    const pages = Math.ceil(searchedRepositories.length / repositoriesPerPage)>0 ?Math.ceil(searchedRepositories.length / repositoriesPerPage): '-' ;

    const previousPage = () => currentPage > 1 ? setCurrentPage(currentPage - 1) : setCurrentPage(1);
    const nextPage = () => currentPage < pages ? setCurrentPage(currentPage + 1) : setCurrentPage(pages);
    const changeAmountOfRepositoriesPerPage = (event) => {
        event.preventDefault()
        setRepositoriesPerPage(event.target.value)
    }



    //sortowanie
    const sortingStars = () => {
        const repositoryCopy = [...repository];
        repositoryCopy.sort((a, b) => {
            if (sorted.reversed) {
                setChangeIcon(true)
                return a.stargazers_count - b.stargazers_count;
            } else{
                setChangeIcon(false)
                return b.stargazers_count - a.stargazers_count;
            }
        })
        setRepository(repositoryCopy);
        setSorted({ sorted: "stargazers_count", reversed: !sorted.reversed });
    };


    return (
        <section className='repositories'>
            <input type='text' value={search} onChange={(e) => setSearch(e.target.value)}/>
            <p className='text'>{`Strona ${currentPage} z ${pages}`}</p>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nazwa repozytorium</th>
                    <th>Właściciel </th>
                    <th onClick={sortingStars} >Ilość gwiazdek
                        {!isChangeIcon? <FontAwesomeIcon  icon={faCaretDown}/> : <FontAwesomeIcon icon={faCaretUp}/>}
                    </th>
                    <th>Data utworzenia</th>
                    <th>Ulubione</th>
                </tr>
                </thead>
                <tbody>
                {!search
                    ? (<tr>
                        <td colSpan='6'>Brak wyników wyszukiwania</td>
                    </tr>)
                    : currentRepositories.map(({
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
                            <td>{new Date(created_at).toLocaleString().match(/^.{10}/).join('')}</td>
                            <td>
                                <button className='button__add-to-favourite' onClick={(event) => {
                                    event.preventDefault()
                                    if (isFavourite.includes(id)) {
                                        setIsFavourite(state => state.filter(favouriteId => favouriteId !== id))
                                        setRepositoriesInformation(state => state.filter(item => item.id!== id))
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