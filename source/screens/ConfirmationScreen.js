import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import LastScreen from './Last';

const ConfirmationScreen = () => {
  const [showLastScreen, setShowLastScreen] = useState(false);

  // Toggle the view to show LastScreen
  const handleConfirmationClick = () => {
    setShowLastScreen(true);
  };

  return (
    <View style={styles.container}>
      {/* Conditional Rendering */}
      {showLastScreen ? (
        <LastScreen />
      ) : (
        <>
          {/* Logo */}
          <Image
            source={require('../../assets/final logo.png')}
            style={styles.logo}
          />

          {/* Checkmark Image */}
          <TouchableOpacity onPress={handleConfirmationClick}>
            <Image
              source={require('../../assets/check.png')}
              style={styles.checkmarkImage}
            />
          </TouchableOpacity>

          {/* Confirmation Text */}
          <Text style={styles.confirmationText}>Your spot is confirmed.</Text>
          <Text style={styles.subText}>
            Way to go! I'm so happy to see you participate regularly!
          </Text>

          {/* Motivational Message */}
          <Text style={styles.motivationalMessage}>
            Remember, consistency is more important than perfection!
          </Text>

          {/* Character Image */}
          <Image
            source={require('../../assets/IMG_0906.png')}
            style={styles.characterImage}
          />
        </>
      )}
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
    marginBottom: 20,
  },
  checkmarkImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  confirmationText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4d4d4d',
    textAlign: 'center',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: '#4d4d4d',
    textAlign: 'center',
    marginBottom: 20,
  },
  motivationalMessage: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4d4d4d',
    textAlign: 'center',
    marginBottom: 30,
  },
  characterImage: {
    width: 180,
    height: 220,
    resizeMode: 'contain',
  },
});

export default ConfirmationScreen;
