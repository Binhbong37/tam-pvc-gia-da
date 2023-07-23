import './App.css';
import MainDash from './layouts/MainDash/MainDash';
import Sidebar from './layouts/Sidebar';

function App() {
    return (
        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                <MainDash />
            </div>
        </div>
    );
}

export default App;
