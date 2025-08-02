const API = "https://api.themoviedb.org/"

export function get( path ){

    return fetch(API + path, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmIwNjhkY2YxNjZiZDc3ZjY1MzY5MzU5ODg2MGNkOCIsIm5iZiI6MTU3NzU0MzAxMi41NDQsInN1YiI6IjVlMDc2NTY0NGMxZDlhMDAxOWUxZDU0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tIOE64nRf3oK_aeLz7mYoZ5AlJqIvlTBrJD0_Bb-1kE",
            "Content-Type": "application/json"
        }
    }).then(result => result.json())    
}