import React from 'react';
import { Image, TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native';

const CalanderScreen1 = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Calander2')}>
      <Image
        source={require('../../assets/Contents (9).png')}
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

export default CalanderScreen1;
