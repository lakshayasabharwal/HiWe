import React from 'react';
import { Image, TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native';

const CalanderScreen2 = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Master')}>
      <Image
        source={require('../../assets/Contents (10).png')}
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
    height: Dimensions.get('window').height*0.98,
  },
});

export default CalanderScreen2;
