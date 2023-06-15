import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground,Alert } from 'react-native';
 import firebase from '../firebase';
 import { initializeApp } from '@react-native-firebase/app';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

 
  const handleSignIn = () => {
    
    if (username === '' || password === '') {
      Alert.alert('Error', 'Please enter both username and password');
    } else {
      firebase.auth()
        .signInWithEmailAndPassword(username, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('User:', user);
          navigation.navigate('Home');
        })
        .catch((error) => {
          console.log('Sign-in error:', error);
          Alert.alert('Error', 'Failed to sign in. Please try again.');
        });
      
    }
  };

  const handleSignUp = () => {
    
    navigation.navigate('Registration');
  };

  return (
<ImageBackground source={require('../assets/B.jpg')} style={styles.backgroundImage}>
<View style={styles.container}>
       
        <Text style={styles.heading}>Welcome to Journey</Text>
              <TextInput style={styles.input} placeholder="Username" value={"username"} />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
                <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}   value={"password"} >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
                <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
</View>     
</ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center', 
    padding:30 
  },
  heading: {
    fontSize: 40,
    textAlign:'center',
    fontWeight: 'bold',
    marginTop: 100,
    marginBottom: 70,
    color:'#7B3F00',
    fontFamily: 'Open Sens'
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius:8,
    color:'black'
  },
  signInButton: {
    width: '70%',
    height: 40,
    backgroundColor: '#7B3F00',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop:20,
    borderRadius:8,
  },
  signUpButton: {
    width: '70%',
    height: 40,
    backgroundColor: '#7B3F00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius:8,
  },
});

export default LoginScreen;
