import {useEffect, useState} from "react";
import {get} from "../data/SearchYoutube";

export function YoutubeCard ({id, title}) {
    //Buscar el video principal de youtube
    const API_KEY = "5a46e53902772463a1c70ba8d4af718e";
    const append_to_response = "videos";
    const [movies, setMovie] = useState([]);
    const path = id + '?api_key=' + API_KEY + '&append_to_response=' + append_to_response;

    const youTube = "https://www.youtube.com/embed/" + movies.key + "?rel=0";
    // funcion para la peticion de un solo objeto y mostrar en reproductor de videos
    useEffect(() => {
        get(path).then((data) => {
            if (data.videos && data.videos.results) {
                setMovie(data.videos.results.filter(resultado => resultado.name = "Official Trailer")[0]);
            }
        })
    }, []);

    return (
        <div>
            <iframe src={youTube} title={title} allowFullScreen={true}></iframe>
        </div>
    );
}