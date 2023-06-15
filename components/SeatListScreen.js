import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';

const SeatListScreen = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seatData = [
    { seatNumber: '1', status: 'available' },
    { seatNumber: '2', status: 'available' },
    { seatNumber: '3', status: 'available' },
    { seatNumber: '4', status: 'available' },
    { seatNumber: '5', status: 'available' },
    { seatNumber: '6', status: 'occupied' },
    { seatNumber: '7', status: 'available' },
    { seatNumber: '8', status: 'available' },
    { seatNumber: '9', status: 'available' },
    { seatNumber: '10', status: 'available' },
    { seatNumber: '11', status: 'available' },
    { seatNumber: '12', status: 'available' },
    { seatNumber: '13', status: 'available' },
    { seatNumber: '14', status: 'available' },
    { seatNumber: '15', status: 'available' },
    { seatNumber: '16', status: 'available' },
    { seatNumber: '17', status: 'available' },
    { seatNumber: '18', status: 'available' },
    { seatNumber: '19', status: 'available' },
    { seatNumber: '20', status: 'available' },
    { seatNumber: '21', status: 'available' },
    { seatNumber: '22', status: 'occupied' },
    { seatNumber: '23', status: 'available' },
    { seatNumber: '24', status: 'available' },
  
  
    
  
  ];

  const handleSeatPress = (seatNumber) => {
    const seatIndex = selectedSeats.indexOf(seatNumber);
    if (seatIndex > -1) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const handleConfirmBooking = () => {
    
    showToastMessage('Booking successful!');
  };

  const showToastMessage = (message) => {
    Toast.show({
      text1: message,
      type: 'success',
    });
  };

  const renderSeatItems = () => {
    return seatData.map((seat, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.seatContainer,
          seat.status === 'occupied' ? styles.occupiedSeat : styles.availableSeat,
          selectedSeats.includes(seat.seatNumber) && styles.selectedSeat,
        ]}
        onPress={() => handleSeatPress(seat.seatNumber)}
        disabled={seat.status === 'occupied'}
      >
        <Text style={styles.seatNumber}>{seat.seatNumber}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seat List</Text>
      <View style={styles.seatList}>{renderSeatItems()}</View>
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={handleConfirmBooking}
        disabled={selectedSeats.length === 0}
      >
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
      <Toast ref={(ref) => Toast.setRef(ref)} />
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
  seatList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  seatContainer: {
    margin: 8,
    padding: 16,
    backgroundColor: '#F4F4F4',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  availableSeat: {
    backgroundColor: '#B2EBF2',
  },
  occupiedSeat: {
    backgroundColor: '#FFCDD2',
  },
  selectedSeat: {
    backgroundColor: '#FFA000',
  },
  seatNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  confirmButton: {
    alignSelf: 'center',
    marginTop: 16,
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
  },
  confirmButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default SeatListScreen;
