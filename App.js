import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import RegistrationScreen from './components/RegistrationScreen';
import SearchResultScreen from './components/SearchResultScreen';
import SeatListScreen from './components/SeatListScreen';
import {firebaseConfig} from './firebase';
import { initializeApp } from '@react-native-firebase/app';
import { getAnalytics } from '@react-native-firebase/analytics';


 const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const Stack = createStackNavigator();

 if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
 firebase.app();
 }

const App = () => {

  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
         <Stack.Screen name="SearchResult" component={SearchResultScreen} />
         <Stack.Screen name="SeatList"component={SeatListScreen}options={{ title: 'Seat List' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
