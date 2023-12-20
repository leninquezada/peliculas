import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {LandingPage} from "../views/LandingPage";

export function MyRoutes(){
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
            </Routes>
        </Router>
    )
}