// last.js
import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const LastScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Contents (16).png')} // Replace with your image path
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 370,
    height: 660,
    resizeMode: 'contain',
  },
});

export default LastScreen;
