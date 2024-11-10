import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Payment from './Payment'; // Importing the Payment component

const PaymentScreen = () => {
  const [showPaymentScreen, setShowPaymentScreen] = useState(false);

  // Handle click anywhere on the screen
  const handleScreenClick = () => {
    setShowPaymentScreen(true);
  };

  // If "screen clicked", render the Payment component
  if (showPaymentScreen) {
    return <Payment />;
  }

  // Otherwise, render the PaymentScreen content
  return (
    <TouchableOpacity style={styles.container} onPress={handleScreenClick}>
      {/* Logo */}
      <Image
        source={require('../../assets/final logo.png')} // Replace with the correct path to your logo
        style={styles.logo}
      />

      {/* Loading Spinner */}
      <Image
        source={require('../../assets/loading.png')} // Replace with a suitable loading spinner image if needed
        style={styles.spinner}
      />

      {/* Redirecting Message */}
      <View style={styles.redirectMessageContainer}>
        <Text style={styles.redirectMessage}>
          REDIRECTING YOU TO PAYMENT GATEWAY
        </Text>
      </View>

      {/* Motivational Image */}
      <Image
        source={require('../../assets/download.jpeg')} // Replace with the correct path to your payment image (e.g. cyclist image)
        style={styles.paymentImage}
      />

      {/* Motivational Text */}
      <Text style={styles.motivationalText}>
        DREAM IT{'\n'}BELIEVE IT{'\n'}ACHIEVE IT
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0ece3',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  logo: {
    width: 120,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  spinner: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  redirectMessageContainer: {
    backgroundColor: '#b19c67',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  redirectMessage: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  paymentImage: {
    width: '90%',
    height: 360,
    resizeMode: 'cover',
    borderRadius: 15,
    marginBottom: 20,
  },
  motivationalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
});

export default PaymentScreen;
