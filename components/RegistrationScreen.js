import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity,ImageBackground } from 'react-native';

const RegistrationScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleSignUp = () => {
 
    const isRegistrationValid = password === confirmPassword;

    if (isRegistrationValid) {
      setRegistrationSuccess(true);
     
      setTimeout(() => {
        setRegistrationSuccess(false);
        navigation.replace('Login');
      }, 2000);
    }
    if (password === confirmPassword) {
      console.log('Registration successful!');
    } else {
      setPasswordMatchError(true);
    }
  };

  return (
    <ImageBackground source={require('../assets/B.jpg')} style={styles.backgroundImage}>
    <View style={styles.container}>
      {registrationSuccess && (
        <Text style={styles.successMessage}>Successfully registered!</Text>
      )}
      <Text style={styles.title}>Registration</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
       <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  signUpButton: {
    width: '40%',
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius:8,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  successMessage: {
    color: 'green',
    fontSize: 16,
    marginBottom: 16,
  },
   backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default RegistrationScreen;
