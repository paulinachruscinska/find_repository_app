import './scss/main.scss';
import Background from './components/Background';
import Navigation from "./components/Navigation";
import Main from "./components/MainPage";
import Repositories from "./components/Repositories";

function App() {
    return (
        <>
            <Background/>
            <Navigation/>
            <Main/>
            <Repositories/>
        </>
    );
}

export default App;
