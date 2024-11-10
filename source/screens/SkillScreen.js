import React from 'react';
import { Image, TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native';

const SkillScreen = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('SportsMingle')}>
      <Image
        source={require('../../assets/Group 3.png')}
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
    width: Dimensions.get('window').width*0.99,
    height: Dimensions.get('window').height*1.02,
  },
});

export default SkillScreen;
