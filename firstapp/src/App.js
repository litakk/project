import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 
'react-router-dom';
import Navigation from './components/Navigation';
import { useReducer } from 'react';

function App() {
    const [state, dispatch] = useReducer(globalReducer, initialState)
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
