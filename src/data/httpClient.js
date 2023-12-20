const API = "https://api.themoviedb.org/3";
export function get(path){
    return fetch(API + path,
        {
            headers:{
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTQ2ZTUzOTAyNzcyNDYzYTFjNzBiYThkNGFmNzE4ZSIsInN1YiI6IjY1ODI1NTEyOGRiYzMzMDg4OTlhODhlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8-FXMN26hPRlr0cBPG4KAIso45vHlbGL3esqREJZtNI",
                "accept": "application/json"
            }
        }).then((result) => result.json());
}

