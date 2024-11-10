import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, StyleSheet, Switch, TouchableOpacity } from 'react-native';

const FormScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isAbove16, setIsAbove16] = useState(false);

  const handleSendOTP = () => {
    if (isAbove16) {
      navigation.navigate('OTP');
    } else {
      alert('You must be 16 years of age or older to proceed.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo Image */}
      <Image source={require('../../assets/final logo.png')} style={styles.logo} />

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="name"
        placeholderTextColor="#8e8e8e"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="email"
        placeholderTextColor="#8e8e8e"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        placeholder="phone number"
        placeholderTextColor="#8e8e8e"
        keyboardType="phone-pad"
      />

      {/* Checkbox Section */}
      <View style={styles.checkboxContainer}>
        <Switch
          value={isAbove16}
          onValueChange={setIsAbove16}
          trackColor={{ false: "#767577", true: "#ffcc00" }}
          thumbColor={isAbove16 ? "#ffcc00" : "#f4f3f4"}
        />
        <Text style={styles.checkboxLabel}>
          By continuing, you confirm that you are 16 years of age or older.
        </Text>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={handleSendOTP}>
        <Text style={styles.buttonText}>SEND OTP</Text>
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
  input: {
    width: '90%',
    height: 50,
    borderColor: '#b8b8b8',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
    width: '90%',
  },
  checkboxLabel: {
    flex: 1,
    marginLeft: 8,
    color: '#5c5c5c',
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#ffcc00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default FormScreen;
