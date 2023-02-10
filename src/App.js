import './scss/main.scss';
import Navigation from "./components/Navigation";
import Main from "./components/MainPage";
import Repositories from "./components/Repositories";

function App() {
    return (
        <>
            <Navigation/>
            <Main/>
            <Repositories/>
        </>
    );
}

export default App;
