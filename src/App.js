import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TamPVC from './pages/TamPVC';
import Nano from './pages/Nano';
import Lamsong from './pages/Lamsong';
import Lam3Song from './pages/Lamsong/Lam3Song';
import Lam5Song from './pages/Lamsong/Lam5Song';
import Lam4Song from './pages/Lamsong/Lam4Song';
import PhuKienKhac from './pages/PhuKienKhac';
import TamDaNang from './pages/TamDaNang';
import AppHeader from './components/Header';
import Register from './pages/Register';
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
                        <Route path="/lam-3-song" element={<Lam3Song />} />
                        <Route path="/lam-4-song" element={<Lam4Song />} />
                        <Route path="/lam-5-song" element={<Lam5Song />} />
                        <Route
                            path="/phu-kien-khac"
                            element={<PhuKienKhac />}
                        />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
