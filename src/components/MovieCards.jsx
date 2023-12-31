import "../styles/MovieCard.css"
import React from "react";
import {ModalDescription} from "./ModalDescription";
import {ModalYoutube} from "./ModalYoutube";

export function MovieCards({movie}) {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (<li className={"movie-card"}>
        <img className={"movie-image"} src={imageUrl} alt={movie.title} width={230} height={345}/>
        <div className={"movie-subtitle"}>{movie.title}</div>
        <ModalDescription box={movie.overview} title={movie.title}/>
        <ModalYoutube id={movie.id} title={movie.title}/>
    </li>)
}

