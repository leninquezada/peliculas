import "../styles/MovieCard.css"
import {SmallBoxCards} from "./SmallBoxCards";
export function MovieCards({movie}) {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (<li className={"movieCard"}>
        <img className={"movieImage"} src={imageUrl} alt={movie.title} width={230} height={345}/>
        <div className={"subtitle"}>{movie.title}</div>
        <SmallBoxCards box={movie.overview} title={movie.title}/>
    </li>)
}

