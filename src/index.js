import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import App from './App';
import Favourites from "./components/Favourites";
import Id from "./components/Id";
import PageNotFound from "./components/PageNotFound";
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path='/'  element={<App/>}/>
                <Route path='/favourites'  element={<Favourites/>}/>
                <Route path='favourites/:id'  element={<Id/>}/>
                <Route path='*'  element={<PageNotFound/>}/>
            </Routes>
        </Router>
    </React.StrictMode>
);

reportWebVitals();
