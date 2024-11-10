import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import ConfirmationScreen from './ConfirmationScreen';

const Payment = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Handle click anywhere on the screen
  const handleScreenClick = () => {
    setShowConfirmation(true);
  };

  // If "screen clicked", render the ConfirmationScreen component
  if (showConfirmation) {
    return <ConfirmationScreen />;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleScreenClick}>
      {/* Payment Confirmation Image */}
      <Image
        source={require('../../assets/Contents (14).png')} // Replace with the correct path to your payment confirmation image
        style={styles.paymentImage}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0ece3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default Payment;
