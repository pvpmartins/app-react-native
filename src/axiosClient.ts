
import { api } from "./api";

const key = "2ecf0cb92ce58554f590c4601da974cf"


export const getMovies = async(keyword:string) => {
    const {data} = await api.get(`search/movie?api_key=${key}&query=${keyword}`)
    return data
}

export const getMovie = async(movieId:number) => {
    const {data} = await api.get(`movie/${movieId}?api_key=${key}&language=en-US`)
    return data
}