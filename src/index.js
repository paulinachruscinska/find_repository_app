import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import App from './App';
import Favourites from "./components/Favourites";
import Id from "./components/Id";
import PageNotFound from "./components/PageNotFound";
import reportWebVitals from './reportWebVitals';

function Index(){
    const [repositoriesInformation, setRepositoriesInformation] = useState([])
    return(
        <Router>
            <Routes>
                <Route path='/'  element={<App repositoriesInformation={repositoriesInformation} setRepositoriesInformation={setRepositoriesInformation}/>}/>
                <Route path='/favourites'  element={<Favourites repositoriesInformation={repositoriesInformation}/>}/>
                <Route path={'favourites/'+ repositoriesInformation.map(item=>item.id)}  element={<Id repositoriesInformation={repositoriesInformation}/>}/>
                <Route path='*'  element={<PageNotFound/>}/>
            </Routes>
        </Router>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Index/>
    </React.StrictMode>
);

reportWebVitals();
