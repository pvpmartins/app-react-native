import React, { useEffect, useState } from "react"
import { View, Text, Image, Dimensions, StyleSheet } from "react-native"
import { getMovie } from "../axiosClient"
import Video from 'react-native-video';


const MovieDetails = ({route}) => {
    const {movieId} = route.params
    const [movie, setMovie] = useState()
    
    

    const loadMovie = async() => {
        const data = await getMovie(movieId)
        setMovie(data)
    }

    useEffect(()=>{
        loadMovie()
    },[])

    return (
        <View style={{width: "100%", height:"100%", }}>

            
            {movie && 
            <>
            <View style={styles.movieCard}>
                <Text style={{backgroundColor: "white", padding:3}}>{movie?.title}</Text>
                <Image style={{width:180, height: 250}} source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}}/>
            </View>
            <View style={styles.movieDetails}>
                <Text>Data de Lançamento: {movie?.release_date}</Text>
                <Text>{movie.production_countries?.reduce((acc, item)=>{    
                    if (acc === ""){
                        acc += item.name
                    } else{
                        acc += `, ${item.name}`
                    }
                    return "País de origem: " + acc
                },'')}</Text>
                <Text>{`\nSinopse:\n\n${movie?.overview}`}</Text>
                {!!movie.video && <Video
                        source={movie.video}
                        paused={false}
                        style={{}}
                        repeat={true}
                    ></Video>}
            </View>
        </>
        }
        </View>
    )
}

const styles = StyleSheet.create({
    movieCard:{
        paddingTop: 10,
        paddingBottom:10,
        height: 300,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", 
        backgroundColor: "red"
    },
    movieDetails:{
        color: "white",
        display:"flex",
        alignItems: "center",
        textAlign:"center",
        padding: 20,

    }
})


export default MovieDetails