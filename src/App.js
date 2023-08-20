import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './layouts/Sidebar';
import './App.css';
import TamPVC from './pages/TamPVC';
import Nano from './pages/Nano';
import Lamsong from './pages/Lamsong';
import PhuKienKhac from './pages/PhuKienKhac';
import TamDaNang from './pages/TamDaNang';
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Sidebar />
                <div className="rightSide">
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
