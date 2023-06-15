import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SearchResultScreen = () => {
  const navigation = useNavigation();

  const busData = [
    { busName: 'Rathna', busNumber: 'NP-5590', time: '10:00 AM', seatsAvailable: 15 },
    { busName: 'Bandara', busNumber: 'NK-4587', time: '12:00 PM', seatsAvailable: 25 },
    { busName: 'Ds', busNumber: 'ND-2021', time: '02:00 PM', seatsAvailable: 10 },
    { busName: 'Niclas', busNumber: 'ND-2022', time: '02:00 PM', seatsAvailable: 10 },
    { busName: 'Gamini', busNumber: 'ND-2021', time: '02:00 PM', seatsAvailable: 10 },
  ];

  const handleBusItemPress = () => {
    
    navigation.navigate('SeatList');
  };

  const renderBusItems = () => {
    return busData.map((bus, index) => (
      <TouchableOpacity
        key={index}
        style={styles.busContainer}
        onPress={handleBusItemPress}
      >
        <Text style={styles.busName}>{bus.busName}</Text>
        <Text style={styles.busInfo}>Bus Number: {bus.busNumber}</Text>
        <Text style={styles.busInfo}>Departure Time: {bus.time}</Text>
        <Text style={styles.busInfo}>Seats Available: {bus.seatsAvailable}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Bus Details</Text>
      {renderBusItems()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  busContainer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#F4F4F4',
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  busName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333333',
  },
  busInfo: {
    fontSize: 14,
    color: '#666666',
  },
});

export default SearchResultScreen;
