import React from 'react';
import { Image, TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native';

const ConsistentScreen = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Buzz')}>
      <Image
        source={require('../../assets/Contents (3).png')} // Replace with the correct image file name
        style={styles.image}
        resizeMode="cover" // Ensures the image covers the entire screen
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height*1.05,
  },
});

export default ConsistentScreen;
