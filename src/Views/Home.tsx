import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { getMovies } from '../axiosClient';
import MovieList from '../components/MovieList';
import { ListProps } from '../components/MovieList';

export default function Home({navigation}) {

  const [movieInput, setMovieInput] = useState<string>()
  const [movieList, setMovieList] = useState()
  
  const LoadMovies = async(name:string) => {
    const movies = await getMovies(name)
    setMovieList(movies)
  }

  // useEffect(()=>{
  //   if (!movieList) return
  //   console.log(movieList)
  // },[movieList])


  return (
    <View style={styles.container}>
      {!!movieInput && <Text>Nome do filme:</Text>}
      <TextInput onChangeText={(input)=>setMovieInput(input)} placeholderTextColor={"black"} placeholder={"Insira o nome do filme"} style={styles.input}/>
      <TouchableOpacity style={styles.button} onPress={()=>movieInput && LoadMovies(movieInput)}>
        <Text>Buscar</Text> 
        </TouchableOpacity>
        {movieList && <MovieList navigation={navigation} movieList={movieList}/>}
      <StatusBar style="auto" />
    </View>
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
