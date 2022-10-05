import React, { FC, useEffect } from "react"
import { StyleSheet, View, Text, FlatList, SafeAreaView } from "react-native"
import MovieItem, { MovieProps } from "./MovieItem"

export interface ListProps{
    navigation: any,
    movieList: {
        results: [{
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
        }]
    }
}



const MovieList= ({movieList, navigation}:ListProps ) => {
    console.log(movieList.results)
    const renderItem = ( {item}:any) => (
        <MovieItem navigation={navigation} movie={item}></MovieItem>
      );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={movieList.results}
                renderItem={renderItem}
                keyExtractor={item =>item.id.toString()}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        height:"70%",
        width:"80%",
        // color: "white",
        // backgroundColor: "white"
    }
})

export default MovieList