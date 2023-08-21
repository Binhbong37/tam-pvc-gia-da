import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TamPVC from './pages/TamPVC';
import Nano from './pages/Nano';
import Lamsong from './pages/Lamsong';
import PhuKienKhac from './pages/PhuKienKhac';
import TamDaNang from './pages/TamDaNang';
import AppHeader from './components/Header';
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <AppHeader />
                <div className="main-layout">
                    <Routes>
                        <Route path="/" element={<TamPVC />} />
                        <Route path="/tam-da-nang" element={<TamDaNang />} />
                        <Route path="/nano" element={<Nano />} />
                        <Route path="/lam-song" element={<Lamsong />} />
                        <Route
                            path="/phu-kien-khac"
                            element={<PhuKienKhac />}
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
