import React from 'react';
import { Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Form')}>
      <Image
        source={require('../../assets/abcd.jpg')} // Replace 'hive_home.png' with the correct image name
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

export default HomeScreen;
