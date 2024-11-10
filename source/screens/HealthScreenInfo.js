import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import ParticipateScreen from '../screens/ParticipateScreen'; // Import the ParticipateScreen component

const HealthScreenInfo = () => {
  const [healthInfo, setHealthInfo] = useState(''); // State to handle user input
  const [showParticipateScreen, setShowParticipateScreen] = useState(false); // State to manage the current screen

  // Handle the "Next" button click
  const handleNext = () => {
    setShowParticipateScreen(true); // Switch to the ParticipateScreen component
  };

  // If the ParticipateScreen should be displayed, render it instead of the current screen
  if (showParticipateScreen) {
    return <ParticipateScreen />;
  }

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../../assets/final logo.png')} // Replace with the correct path to your logo
        style={styles.logo}
      />

      {/* Information Text */}
      <Text style={styles.infoText}>
        Before we proceed, please let us know of any health issues or injuries you might be suffering from.
      </Text>
      <Text style={styles.infoText}>
        We will inform your team leaders about the same in case you need any assistance.
      </Text>

      {/* Text Input Box */}
      <TextInput
        style={styles.inputBox}
        placeholder="Enter any health issues or injuries"
        placeholderTextColor="#8a7f78"
        value={healthInfo}
        onChangeText={(text) => setHealthInfo(text)}
      />

      {/* Character Image */}
      <Image
        source={require('../../assets/IMG_0906.png')} // Replace with the correct path to the character image
        style={styles.characterImage}
      />

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0ece3',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  logo: {
    width: 120,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  infoText: {
    fontSize: 16,
    color: '#4d4d4d',
    textAlign: 'center',
    marginBottom: 10,
  },
  inputBox: {
    width: '80%',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#d9cfc4',
    paddingHorizontal: 10,
    color: '#4d4d4d',
    marginVertical: 20,
  },
  characterImage: {
    width: 180,
    height: 220,
    resizeMode: 'contain',
    marginTop: 30,
  },
  nextButton: {
    width: '60%',
    height: 50,
    backgroundColor: '#ffcc00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HealthScreenInfo;
