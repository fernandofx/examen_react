import {BrowserRouter as Router, Routes, Route, UNSAFE_FetchersContext } from "react-router-dom"
import { LandingPage } from "../pages/LandingPage"
import { MovieDetails } from "../pages/MovieDetails"


export function MyRoutes(){
    return(

        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/movies/:movieId" element={<MovieDetails />} />

            </Routes>
        </Router>
    )
}
