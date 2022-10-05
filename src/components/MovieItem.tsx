import React, { useEffect, useState } from "react"
import { Text, StyleSheet, View, Image, Button, TouchableOpacity } from "react-native"
import Video from 'react-native-video';
import { getMovie } from "../axiosClient"

export interface MovieProps{
    navigation:any,
    movie:{
        adult: boolean,
        backdrop_path: string,
        genre_ids: Array<Number>,
        id: Number,
        original_language: String,
        original_title: String,
        overview: String,
        popularity: number,
        poster_path: string,
        release_date: string,
        title: string,
        video: false,
        vote_average: number,
        vote_count: number
    }
}


const MovieItem = ({movie, navigation}:MovieProps) => {
    const [movieDetails, setMovieDetails] = useState(null)
    
    const loadMovie = async() => {
        const data = await getMovie(+movie.id)
        setMovieDetails(data)
        console.log(data)
    }

    useEffect(()=>{
        loadMovie()
    },[])

    return (
        <>
        <TouchableOpacity onPress={()=>{navigation.navigate("Movie-Details", {movieId: movie.id})}}>
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:`https://image.tmdb.org/t/p/w500${movie.poster_path}`}}/>
            <View style={styles.specs}>
                <Text style={styles.text}>{movie.title}</Text>
                <Text>Data de Lançamento: {movie.release_date}</Text>
                <Text>Pais: {!!movieDetails && movieDetails?.production_countries[0]?.name}</Text>
            </View>
        </View>
        </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      display:"flex",
      backgroundColor: 'white',
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'space-evenly',
      borderWidth: 1,
    },
    specs:{
        display: "flex",
        flexDirection: "column",
    },
    text:{
        color:"black",
        textAlign: "center"
    },
    image:{
        width:30,
        height: 30
    }
  
  });

export default MovieItem