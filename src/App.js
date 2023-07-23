import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainDash from './layouts/MainDash/MainDash';
import Sidebar from './layouts/Sidebar';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="AppGlass">
                    <Sidebar />
                    <MainDash />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
