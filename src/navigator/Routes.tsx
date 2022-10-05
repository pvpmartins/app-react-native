import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from '../../App';
import MovieDetails from '../Views/MovieDetails';
import Home from '../Views/Home';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
          />
        <Stack.Screen name="Movie-Details" component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes