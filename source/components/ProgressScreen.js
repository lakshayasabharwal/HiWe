import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProgressScreen = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../../assets/final logo.png')} // Replace with the correct path to your logo
        style={styles.logo}
      />

      {/* Title and Description */}
      <View style={styles.textContainer}>
        <Text style={styles.introText}>At HiWe,</Text>
        <Text style={styles.boldText}>winning is all about consistency</Text>
        <Text style={styles.description}>
          in showing up for events! Your victory is defined by the number of events you participate in!
        </Text>
      </View>

      {/* Motivation Text */}
      <View style={styles.motivationTextContainer}>
        <Text style={styles.motivationText}>This is your Win Zone!</Text>
        <Text style={styles.motivationText}>Let’s make sure we are always in it!</Text>
      </View>

      {/* Progress Graph */}
      <Image
        source={require('../../assets/Untitled_Artwork (23).png')} // Replace with the correct path to your progress image
        style={styles.progressImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 120,
    height: 60,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20,
  },
  textContainer: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  introText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 5,
  },
  boldText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
  motivationTextContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  motivationText: {
    fontSize: 16,
    color: '#888',
  },
  progressImage: {
    width: '110%',
    height: 400,
    resizeMode: 'contain',
    marginTop: -30,
  },
});

export default ProgressScreen;
