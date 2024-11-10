import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import PaymentScreen from './PaymentScreen'; // Importing the PaymentScreen component
import MembershipScreen from '../components/MembershipScreen';

const MoneyScreen = () => {
  const [showPaymentScreen, setShowPaymentScreen] = useState(false);
  const [member , setMember] = useState(false);

  // Function to handle payment button click
  const handlePayment = () => {
    setShowPaymentScreen(true);
  };
  const handleMember = () => {
    setMember(true);
  }

  // If "Proceed to Payment" is clicked, render the PaymentScreen
  if (showPaymentScreen) {
    return <PaymentScreen />;
  }
  if(member){
    return <MembershipScreen />;
  }

  // Otherwise, render the MoneyScreen content
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../../assets/final logo.png')} // Replace with the correct path to your logo
        style={styles.logo}
      />

      {/* Standard Payment Box */}
      <View style={styles.paymentBox}>
        <Text style={styles.paymentTitle}>STANDARD</Text>
        <Text style={styles.paymentAmount}>200 /-</Text>
        <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
          <Text style={styles.paymentButtonText}>PROCEED TO PAYMENT</Text>
        </TouchableOpacity>
      </View>

      {/* HiWe Members Payment Box */}
      <View style={styles.paymentBox}>
        <Text style={styles.paymentTitle}>HiWe MEMBERS</Text>
        <Text style={styles.paymentAmount}>150 /-</Text>
        <TouchableOpacity style={styles.paymentButton} onPress={handleMember}>
          <Text style={styles.paymentButtonText}>EXPLORE HiWe MEMBERSHIP!</Text>
        </TouchableOpacity>
      </View>

      {/* Bicycle Image */}
      <Image
        source={require('../../assets/bicycle.png')} // Replace with the correct path to the bicycle image
        style={styles.bicycleImage}
      />
    </View>
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
    marginBottom: 30,
  },
  paymentBox: {
    width: '90%',
    backgroundColor: '#f7941e',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  paymentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  paymentAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  paymentButton: {
    backgroundColor: '#ffcc00',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  paymentButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bicycleImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop: 30,
  },
});

export default MoneyScreen;
