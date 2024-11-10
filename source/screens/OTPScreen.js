import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const OTPScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Automatically focus the next input field
    if (value.length === 1 && index < otp.length - 1) {
      refs[index + 1].focus();
    }
  };

  // References for OTP inputs
  const refs = [];

  const handleVerifyOTP = () => {
    if (otp.join('').length === 6) {
      alert('OTP verified successfully!');
      navigation.navigate('Consistent');
    } else {
      alert('Please enter a valid 6-digit OTP.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../../assets/final logo.png')} style={styles.logo} />

      {/* OTP Input */}
      <Text style={styles.title}>Enter Verification Code</Text>
      <View style={styles.otpContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            style={styles.otpBox}
            value={value}
            onChangeText={(val) => handleChange(val, index)}
            keyboardType="number-pad"
            maxLength={1}
            ref={(input) => (refs[index] = input)}
          />
        ))}
      </View>

      {/* Instruction Text */}
      <Text style={styles.instructionText}>
        A One-Time Password has been sent on the number entered.
      </Text>

      {/* Verify Button */}
      <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
        <Text style={styles.buttonText}>VERIFY</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
  },
  logo: {
    width: 120,
    height: 60,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4d4d4d',
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  otpBox: {
    width: 40,
    height: 45,
    borderWidth: 1,
    borderColor: '#b8b8b8',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#e0e0e0',
  },
  instructionText: {
    color: '#5c5c5c',
    textAlign: 'center',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#ffcc00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 30,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default OTPScreen;
