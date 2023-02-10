import {useEffect, useState} from "react";
import axios from "axios";

export default function Repositories() {
    const [repository, setRepository] = useState([])
    useEffect(() => {
        axios.get("https://api.github.com/search/repositories?q=$%7Bquery%7D").then(response => setRepository(response.data.items))
    }, [])

    return (
        <>
            <div>repo</div>
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
                {repository.map(({id, name, owner: {login}, stargazers_count, created_at}) => {
                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{login}</td>
                            <td>{stargazers_count}</td>
                            <td>{created_at.match(/^.{10}/).join('')}</td>
                            <td>Dodaj do ulubionych</td>

                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}