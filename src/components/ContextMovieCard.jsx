import {useEffect, useState} from "react";
import {get} from "../data/httpClient";
import {MovieCards} from "./MovieCards";
import "../styles/ConTextMovieCard.css";
export function ContextMovieCard() {
    const [movies, SetMovies] = useState([])
    useEffect(() => {
        get("/discover/movie").then((data) => {
            SetMovies(data.results.filter(resultado => resultado.language = "es-ES"));
            console.log(data);
        })
    }, []);
    return (<ul className={"container"}>
        {movies.map(item=>(
            <MovieCards movie={item}/>
        ))}
    </ul>)
}