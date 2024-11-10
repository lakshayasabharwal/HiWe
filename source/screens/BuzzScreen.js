import React from 'react';
import { Image, TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native';

const BuzzScreen = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Skill')}>
      <Image
        source={require('../../assets/Contents (4).png')}
        style={styles.image}
        resizeMode="cover"
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
    height: Dimensions.get('window').height,
  },
});

export default BuzzScreen;
