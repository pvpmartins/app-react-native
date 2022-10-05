
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { getMovies } from './src/axiosClient';
import MovieList from './src/components/MovieList';
import { ListProps } from './src/components/MovieList';
import Routes from './src/navigator/Routes';

export default function App() {

  // const [movieInput, setMovieInput] = useState<string>()
  // const [movieList, setMovieList] = useState()
  
  // const LoadMovies = async(name:string) => {
  //   const movies = await getMovies(name)
  //   setMovieList(movies)
  // }

  // useEffect(()=>{
  //   if (!movieList) return
  //   console.log(movieList)
  // },[movieList])


  return (
    <>
      <Routes/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    height:"90%"
  },
  input:{
    fontWeight:"bold",
    color: "black",
    outline: "1px solid black",
    border: "1px solid black",
    backgroundColor: 'yellow',
    minWidth: "40%",
    height: 30,
    paddingLeft: 10,
    paddingRight:10,
  },
  button:{
    backgroundColor: "white"
  }
});
