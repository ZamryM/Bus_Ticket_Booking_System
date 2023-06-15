import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, TextInput,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedButton, setSelectedButton] = useState(null);

  const handleProfilePress = () => {
    navigation.navigate('Account');
  };

  const handleButtonPress = (button) => {
    setSelectedButton(button);
  };

  const handleFindBusPress = () => {
    navigation.navigate('SearchResult');
  };

  return (
    <ImageBackground source={require('../assets/ri.jpg')} style={styles.backgroundImage}>
    <View style={styles.container}>
      <Text style={styles.title}>Well come!</Text>
      <TouchableOpacity onPress={handleProfilePress} style={styles.profileIcon}>
        <Icon name="person" size={40} color="gray" />
      </TouchableOpacity>

      <ScrollView horizontal>
        <View style={styles.advertisementContainer}>
          <Image source={require('../assets/3.jpg')} style={styles.advertisementImage} />
          <Image source={require('../assets/2.jpg')} style={styles.advertisementImage} />
          <Image source={require('../assets/1.jpg')} style={styles.advertisementImage} />
        </View>
      </ScrollView>
 <Text style={styles.usertext}>Choose Destination</Text>
      <View style={styles.userInputContainer}>
        <TextInput
          style={styles.userInput}
          placeholder="From"
          placeholderTextColor="gray"
        />
        <TextInput
          style={styles.userInput}
          placeholder="To"
          placeholderTextColor="gray"
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedButton === 'AC' ? styles.selectedButton : null,
          ]}
          onPress={() => handleButtonPress('AC')}
        >
          <Text style={styles.buttonText}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedButton === 'Non-AC' ? styles.selectedButton : null,
          ]}
          onPress={() => handleButtonPress('Non-AC')}
        >
          <Text style={styles.buttonText}>Non-AC</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.customButton} onPress={handleFindBusPress}>
        <Text style={styles.customButtonText}>Find Bus</Text>
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
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    
  },
  title: {
    position: 'absolute',
    top: 16,
    left: 16,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  usertext:{
    position: 'absolute',
    top: 420,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor:'white'
  },

  profileIcon: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  advertisementContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  advertisementImage: {
    width: 200,
    height: 200,
    marginRight: 8,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  userInputContainer: {
    marginTop: 0,
  },
  userInput: {
    height: 40,
    width: 200,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom:10,
    backgroundColor:'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  button: {
    backgroundColor: 'lightgray',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginHorizontal: 4, 
  },
  selectedButton: {
    backgroundColor: 'green',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  customButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 16,
  },
  customButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default HomeScreen;
