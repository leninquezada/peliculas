import {ContextMovieCard, Con} from "../components/ContextMovieCard";
import ReactPlayer from "react-player";

export function LandingPage(){
    return(<div>
        <ContextMovieCard/>
        <div className='player-wrapper'>
            <ReactPlayer className='react-player' url='https://www.youtube.com/watch?v=_w4sPyiNdBY'/>
        </div>
    </div>)
}

