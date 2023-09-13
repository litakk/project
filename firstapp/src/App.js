import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 
'react-router-dom';
import Navigation from './components/Navigation';

function App() {
    return (

        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigation />} >
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
