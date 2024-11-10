import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

const CitySelectionScreen = ({ navigation }) => {
  const [selectedCity, setSelectedCity] = useState('');

  const handleSelectCity = (index, value) => {
    setSelectedCity(value);
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../../assets/final logo.png')} style={styles.logo} />

      {/* Dropdown Picker */}
      <ModalDropdown
        options={[
          'Delhi',
          'Mumbai',
          'Bangalore',
          'Chennai',
          'Kolkata',
          'Pune',
          'Hyderabad',
          'Ahmedabad',
          'Jaipur',
          'Lucknow',
          'Chandigarh',
        ]}
        defaultValue="Select your city"
        onSelect={(index, value) => handleSelectCity(index, value)}
        textStyle={styles.dropdownText}
        dropdownTextStyle={styles.dropdownItemText}
        dropdownStyle={styles.dropdown}
        style={styles.dropdownContainer}
        dropdownTextHighlightStyle={styles.dropdownTextHighlight}
      />

      {/* Next Button */}
      {selectedCity ? (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Calander1')}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 140,
    height: 70,
    marginBottom: 50,
    resizeMode: 'contain',
  },
  dropdownContainer: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  dropdownText: {
    fontSize: 18,
    paddingVertical: 12,
    paddingHorizontal: 16,
    color: '#333',
    textAlign: 'center',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#333',
    padding: 12,
  },
  dropdown: {
    width: '80%',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    borderColor: '#ccc',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  dropdownTextHighlight: {
    backgroundColor: '#f0f0f0',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#ffcc00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default CitySelectionScreen;
